import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from "./components/Navbar";
import ContactList from "./components/ContactList";
import Create from "./components/Create";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <ContactList />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
