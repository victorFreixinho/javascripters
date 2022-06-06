import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ScrollContext } from "react-router-scroll-4";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import UserList from "./components/users/UserList";
import SignUp from "./pages/signUp";
import Login from "./pages/login";
import DesearseList from "./components/desearses/DesearseList";
import OMForm from "./pages/OMForm";
import DoencaForm from "./pages/DoencaForm";
import UploadData from "./pages/UploadData";
import { selectSigned } from "./states/modules/session/session.utils";
import NotFound from "./pages/NotFound";

function App() {
  const signed = useSelector(selectSigned);
  console.log("Signed: ", signed);
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
            path={`${process.env.PUBLIC_URL}/login`}
            component={Login}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/diseases`}
            component={DesearseList}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/admin-om`}
            component={OMForm}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/upload-data`}
            component={UploadData}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/admin-doenca`}
            component={DoencaForm}
          />
          <Route path="*" component={NotFound} />
        </Switch>
      </ScrollContext>
    </BrowserRouter>
  );
}

export default App;
