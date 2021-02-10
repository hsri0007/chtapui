import React from "react";

import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import Registration from "./registrationForm/registration.page";
import Crud from "./crud/crud.page";
import Login from "./loginForm/login.page";
import Admin from "./admin/admin.page";
import Edit from "./crud/edit.page";

function App() {
  const [save, setSaveuser] = React.useState({});
  React.useEffect(() => {
    const savedData = JSON.parse(window.localStorage.getItem("saveUser"));
    setSaveuser(savedData);
  }, []);
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Crud} />
          <Route exact path="/edit/:id" component={Edit} />
          <Route exact path="/Registration" component={Registration} />
          <Route exact path="/Login" component={Login} />
          <Route
            exact
            path="/dashboard"
            render={() => (save ? <Admin /> : <Redirect to="/Login" />)}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
