import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Login from "../screen/Login";
import Signup from "../screen/Signup";
import User from "../screen/User";
import Profile from "../screen/Profile";
const Home=()=>{
    return <h1>home</h1>
}




 function AppRoute() {
  
    
    return (
      <Router>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/user">
              <User />
            </Route>

            <Route path="/">
              <Home/>
            </Route>
          </Switch>
  
      </Router>
    );
  }

  export default AppRoute