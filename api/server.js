const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");
var jwt = require("jsonwebtoken");
require("express-async-errors");

app.use(express.json());
app.use(cors());

const JWT_KEY = "app-key";

app.post("/signup", async (req, res) => {
  const body = req.body;
  console.log("body", req.body);

  const userWithEmail = await db.User.findOne({
    email: body.email,
  });
  if (userWithEmail) {
    res.json({
      success: false,
      error: "E-Mail existiert bereits",
    });
    return;
  }

  const savedUser = await db.User.create(req.body);
  var token = jwt.sign(
    {
      id: savedUser._id,
    },
    JWT_KEY
  );
  res.json({
    success: true,
    token: token,
  });
});

app.post("/login", async (req, res) => {
  const body = req.body;

  const currentUser = await db.User.findOne({
    email: body.email,
    password: body.password,
  });

  if (currentUser) {
    currentUser._id;
    var token = jwt.sign({ id: currentUser._id }, JWT_KEY);
    res.json({
      succes: true,
      token: token,
    });
  } else {
    res.json({
      success: false,
      error: "e-mail oder passwort falsch",
    });
  }
});

app.post("/me/todos", async (req, res) => {
  const body = req.body;

  const user = body.todo;

  const currentToDo = await db.ToDo.create({
    text: body.text,
    completed: body.completed,
    userId: user._id,
  });

  res.json({
    success: true,
    message: "todo gespeichert",
  });

  console.log("body", req.body);
  console.log("user", user);
});

app.get("/me", async (req, res) => {
  const user = await getAuthUser(req, res);

  res.json({ success: true, user });
});

app.get("/me/todos", async (req, res) => {
  const user = await getAuthUser(req);

  const todos = await db.ToDo.find({
    userId: user._id,
  });

  res.json(todos);
});

async function getAuthUser(req) {
  const token = req.headers.authorization;
  console.log("token", token);

  const jwtPayload = jwt.verify(token, JWT_KEY);
  const userId = jwtPayload.id;

  const user = await db.User.findById(userId);

  console.log("user", user);

  if (!user) {
    throw new Error("user not found");
  }
  return user;
}

app.listen(4000, () => {
  console.log("server listening on port 4000");
});
