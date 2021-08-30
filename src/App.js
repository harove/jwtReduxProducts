import logo from "./logo.svg";
import "./App.css";
import { Login } from "./container/Login/Login";
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";
import UsersList from "./container/users-list/UsersList";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import {useSelector} from 'react-redux'

function App() {
  const success = useSelector(state => state.login.success)
  return (
    <div className="App container">
      <Router>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
          </ul>      
        </nav>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <PrivateRoute path="/users" component={UsersList} isLogin={success} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
