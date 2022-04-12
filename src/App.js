import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ScrollContext } from "react-router-scroll-4";
import Home from "./pages/Home";
import UserList from "./components/users/UserList";

function App() {
  return (
    <BrowserRouter basename={"/"}>
      <ScrollContext>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/users`}
            component={UserList}
          />
          <Route path="*" element={<div>default</div>} />
        </Switch>
      </ScrollContext>
    </BrowserRouter>
  );
}

export default App;
