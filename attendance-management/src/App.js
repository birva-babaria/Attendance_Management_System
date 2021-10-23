import AllEmp from './Component/AllEmp/AllEmp';
import AddEmp from  './Component/AddEmp/AddEmp';
import EditEmp from './Component/EditEmp/EditEmp';
import About from './Component/about/about';
import Contactus from './Component/contactUs/contactUs';
import NotFound from './Component/NotFound.js'; 
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { useState } from "react";
import Login from './Component/login/login';
import Register from './Component/register/register';
import AllHistory from './Component/allHistory/allHistory';

function App() {
  const [user, setLoginUser] = useState()

  return (
    <BrowserRouter>

      <Switch>
      <Route exact path="/">
            {
              user && user._id ? <AddEmp setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />
            }
          </Route>
          <Route exact path="/login">
            <Login setLoginUser={setLoginUser} />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        <Route exact path="/all" component={AllEmp} />
        <Route exact path="/add" component={AddEmp} />
        <Route exact path="/edit/:id" component={EditEmp} />
        <Route exact path="/about" component={About}/>
        <Route exact path="/contactUs" component={Contactus}/>
        <Route exact path="/allHistory" component={AllEmp}>
            <AllHistory />
          </Route>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
