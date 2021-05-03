import "./App.css";
import Card5 from "./cards/card5";
import Card6 from "./cards/card6";
import Card7 from "./cards/card7";
import Class5 from "./classes/class5";
import Class6 from "./classes/class6";
import Class7 from "./classes/class7";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/class5" component={Class5} />
          <Route exact path="/class6" component={Class6} />
          <Route exact path="/class7" component={Class7} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
