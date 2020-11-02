require("dotenv/config")

const mongoose = require("mongoose");

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = mongoose.model("user", {
    username: String,
    email: String,
    password: String
})

const ToDo = mongoose.model("todo", {
    text: String,
    completed: Boolean,
    userId: mongoose.Types.ObjectId
})

module.exports = {
    User, 
    ToDo
}