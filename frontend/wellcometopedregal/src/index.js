import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {  Route } from "wouter";
import App from './App';
import Footer from './components/footer';
import CU_user from './components/CU_user';
import Viewinfouser from './components/viewinfouser';


ReactDOM.render(
  <Fragment>
    <Route path="/viewinfouser/:id" component={Viewinfouser} />
    <Route path="/user" component={CU_user} />
    <Route exact path="/" component={App} />
    {/* // <React.StrictMode> */}
    {/* <App /> */}
  {/* // </React.StrictMode> */}
       <Footer  />
  </Fragment>

  ,
  document.getElementById('root')
);


