import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import DropResults from "./Components/DropResults";
import SearchResults from "./Components/SearchResults";

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
        <Route exact path="/searchresults">
          <SearchResults />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
