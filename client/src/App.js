import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ClientLandingPage from "./clientLanding/client_landing";
import ClientSignUp from "./ClientSignUp/signup";
import axiosWithAuth from "./utils/axiosWithAuth";
import { InitialContext } from "./contexts/InitialContext";

function App() {
  // setting up state and functions for InitialContext
  const [session, setSession] = useState([]);
  const [reservedClasses, setReservedClasses] = useState([]);
  const reserveClass = (clas) => {
    setReservedClasses([...reservedClasses, clas]);
  };
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/clients")
      .then((res) => {
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axiosWithAuth()
      .get("/classes")
      .then((res) =>
        // console.log(res.data)
        setSession(res.data)
      )
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(session);
  return (
    <>
      <Router>
        <div className="App">
          <InitialContext.Provider value={{ session, reserveClass }}>
            <Switch>
              <Route exact path="/">
                <Link to="/ClientLandingPage">Client</Link>
              </Route>
              <Route exact path="/ClientLandingPage">
                <ClientLandingPage />
              </Route>
              <Route exact path="/ClientSignUp">
                <ClientSignUp />
              </Route>
            </Switch>
            <Link to="/">
              <button className="home-button">Home</button>
            </Link>
          </InitialContext.Provider>
        </div>
      </Router>
    </>
  );
}

export default App;
