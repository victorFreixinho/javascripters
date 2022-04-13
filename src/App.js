import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ScrollContext } from "react-router-scroll-4";
import Home from "./pages/Home";
import UserList from "./components/users/UserList";
import SignUp from "./pages/signUp";
import DesearseList from "./components/desearses/DesearseList";

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
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/signup`}
            component={SignUp}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/desearses`}
            component={DesearseList}
          />
          <Route path="*" element={<div>default</div>} />
        </Switch>
      </ScrollContext>
    </BrowserRouter>
  );
}

export default App;
