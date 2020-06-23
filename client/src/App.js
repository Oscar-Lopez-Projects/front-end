import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Route} from "react-router-dom"
import ClientLandingPage from './clientLanding/client_landing';
import ClientSignUp from './ClientSignUp/signup'

function App() {
  return (
    <div className="App">
      <Route exact path = "/">
        <Link to ="/ClientLandingPage">Client</Link>
      </Route>
      <Route exact path = "/ClientLandingPage">
        <ClientLandingPage/>
      </Route>
      <Route exact path = "/ClientSignUp">
        <ClientSignUp/>
      </Route>
    </div>
  );
}

export default App;
