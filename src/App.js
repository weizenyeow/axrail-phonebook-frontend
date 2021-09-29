import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import List from "./components/List";
import Create from "./components/Create";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <List />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
