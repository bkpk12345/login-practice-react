import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/store/authContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let isLoggedinStatus = localStorage.getItem("isLoggedin");

  useEffect(() => {
    if (isLoggedinStatus == "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedin", "1");
    console.log({ isLoggedinStatus });
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedin");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedin: isLoggedIn, onLogout: logoutHandler }}>
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
