import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ToDo from "./pages/ToDo";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import "./pages/styles.css";
import UserProvider, { UserContext } from "./components/UserProvider";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser("test");
  }, []);

  return (
    <Router>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <UserProvider>
          <div className="app">
            <nav>
              <ul className="router">
                <li>
                  <Link to="/me/todos">ToDo</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">SignUp</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/login" component={Login}></Route>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/me/todos">
                <ToDo />
              </Route>
            </Switch>
          </div>
        </UserProvider>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
