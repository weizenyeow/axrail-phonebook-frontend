import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CreateContact from "./components/CreateContact";
import ContactDetails from "./components/ContactDetails";

function App() {
    return (
      <Router>
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <CreateContact />
            </Route>
            <Route path="/contacts/:id">
              <ContactDetails />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }

export default App;
