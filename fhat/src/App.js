import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import DropResults from "./Components/DropResults";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/dropresults">
          <DropResults />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
