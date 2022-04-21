import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./component/layouts/footer";
import Header from "./component/layouts/header";
import Navbar from "./component/layouts/navbar";
import Contact from "./pages/contact";
import Home from "./pages/home";

const MasterLayout = () => {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>

      <div class="wrapper">
        <Switch>
            <Route exact path="/contact"><Contact></Contact></Route>
            <Route exact path="/" component={Home}></Route>
        </Switch>
        <Footer></Footer>
      </div>
    </>
  );
};

export default MasterLayout;
