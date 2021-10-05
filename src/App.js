import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CreateContact from "./components/CreateContact";
import ContactDetails from "./components/ContactDetails";
import { Paths } from './services/url';

function App() {
    return (
      <Router>
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path={Paths.contact.viewContacts}>
              <Home />
            </Route>
            <Route path={Paths.contact.createContact}>
              <CreateContact />
            </Route>
            <Route path={Paths.contact.viewContactParams}>
              <ContactDetails />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }

export default App;
