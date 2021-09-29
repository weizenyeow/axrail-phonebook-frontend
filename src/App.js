import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Create from "./components/Create";

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
              <Create />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }

export default App;
