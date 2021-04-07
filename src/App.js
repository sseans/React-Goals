import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import PlannerList from "./components/PlannerList/PlannerList";
import Welcome from "./components/Welcome/Welcome";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/goals">
            <PlannerList />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
