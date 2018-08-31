import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Login from "./pages/login";
import Admin from "./admin";
import Buttons from "./pages/ui/buttons";
import Modals from './pages/ui/modals';
import NoMatch from "./pages/nomatch";
export default class IRouter extends Component {
  state = {};
  render() {
    return (
      <Router>
        <App>
          <Route path="/login" component={Login} />
          <Route
            path="/"
            render={() => (
              <Admin>
                <Switch>
                <Route path="/ui/buttons" component={Buttons} />
                <Route path="/ui/modals" component={Modals} />
                <Route  component={NoMatch} />
                </Switch>
              </Admin>
            )}
          />
          {/* <Route path="/admin/ui/buttons" component={Buttons} /> */}

        </App>
      </Router>
    );
  }
}
