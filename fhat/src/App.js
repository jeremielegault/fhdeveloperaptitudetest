import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Homepage from "./Components/Homepage";
import DropResults from "./Components/DropResults";
import SearchResults from "./Components/SearchResults";

function App() {
  return (
    <BrowserRouter>
      <Main>
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
      </Main>
    </BrowserRouter>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1500px;
`;

export default App;
