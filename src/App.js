import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import PlannerList from "./components/PlannerList/PlannerList";
import Welcome from "./components/Welcome/Welcome";
import History from "./components/History/History";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/goals">
            <PlannerList />
          </Route>
          <Route path="/history">
            <History />
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
