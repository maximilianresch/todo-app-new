import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ToDo from './pages/ToDo';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import './pages/styles.css'

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul className="router">
            <li>
              <Link to="/todos">ToDo</Link>
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
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/todos">
            <ToDo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
  

export default App;
