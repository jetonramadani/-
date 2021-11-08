import "./App.css";
import React, { useState, useEffect } from "react";
import logins from "./logins.json";
import Login from "./components/Login";
import AddDataToDb from "./components/AddDataToDb";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    // ON MOUNT CONSTRUCTOR
    const log = localStorage.getItem("logged");
    setLoggedIn(log === "true");
    return () => {
      //ON DISMOUNT DESTRUCTOR
    };
  }, []);
  const loginHandler = (data) => {
    if (logins[data.name] === data.pass) {
      setLoggedIn(true);
      localStorage.setItem("logged", true);
    } else {
      alert("WRONG COMBINATION");
    }
  };
  return (
    <div>
      {loggedIn ? (
        <>
          <h1>
            LOGGED IN{" "}
            <button
              onClick={() => {
                setLoggedIn(false);
                localStorage.setItem("logged", false);
              }}
            >
              LOG OUT
            </button>
          </h1>
          <AddDataToDb />
        </>
      ) : (
        <>
          <Login login={loginHandler} />
        </>
      )}
    </div>
  );
}

export default App;
