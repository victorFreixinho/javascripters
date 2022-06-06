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

function App() {
  const signed = useSelector(selectSigned);

  return (
    <BrowserRouter basename={"/"}>
      <ScrollContext>
        {signed ? <SignedRoutes /> : <UnsignedRoutes />}
      </ScrollContext>
    </BrowserRouter>
  );
}

const DefaultComponent = () => <div>default</div>;

const SignedRoutes = () => {
  return (
    <Switch>
      <Route
        exact
        path={`${process.env.PUBLIC_URL}/`}
        component={() => <Home />}
      />
      <Route
        exact
        path={`${process.env.PUBLIC_URL}/users`}
        component={UserList}
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
      <Route path="*" component={DefaultComponent} />
    </Switch>
  );
};

const UnsignedRoutes = () => {
  return (
    <Switch>
      <Route
        exact
        path={`${process.env.PUBLIC_URL}/`}
        component={() => <Home />}
      />
      <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
      <Route
        exact
        path={`${process.env.PUBLIC_URL}/signup`}
        component={SignUp}
      />
      <Route path="*" component={DefaultComponent} />
    </Switch>
  );
};

export default App;
