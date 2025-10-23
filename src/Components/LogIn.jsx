import React, { useState, useEffect } from "react";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");
    if (savedUser && savedPassword) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogIn = (e) => {
    e.preventDefault();

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("isLoggedIn", "true");

    setIsLoggedIn(true);
    console.log("Logged In:", username);
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("isLoggedIn");

    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  return (
    <>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {localStorage.getItem("username")}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleLogIn}>
          <div>
            <label>UserName</label>
            <input
              type="text"
              value={username}
              onChange={handleUsername}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={handlePassword}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      )}
    </>
  );
};

export default LogIn;
