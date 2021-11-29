import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import {  Route } from "wouter";
import App from './App';
import Footer from './components/footer';
import NewUser from './components/newuser';
import UpdateUser from './components/updateuser';
import Viewinfouser from './components/viewinfouser';


ReactDOM.render(
  <Fragment>
    <Route path="/viewinfouser/:id" component={Viewinfouser} />
    <Route path="/updateinfouser/:id" component={UpdateUser} />
    <Route path="/newuser" component={NewUser} />
    <Route exact path="/" component={App} />
    {/* // <React.StrictMode> */}
    {/* <App /> */}
  {/* // </React.StrictMode> */}
       <Footer  />
  </Fragment>

  ,
  document.getElementById('root')
);
