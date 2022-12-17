import React from "react";
import Landing_page from "./pages/landing";
import Products from "./pages/products";
import Login from "./pages/login_signup";
import Register from "./pages/Register.page";
import {auth} from './firebase'

import Single_Product from "./pages/Single_item";
import {
  BrowserRouter,
  Route,
  Switch,
  Router,
  Routes,
  NavLink,
} from "react-router-dom";



function App() {

  return (
    <div>
      <BrowserRouter>
          <Switch>
            <Route path="/abc" exact component={Landing_page} />
            <Route path="/login" exact component={Login} />
            <Route path="/Register" exact component={Register} />
            <Route path="/products" exact component={Products} />
            <Route path="/products/:id" exact component={Single_Product} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
