import React, { useState } from "react";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [storedUsername, setStoredUsername] = useState("");
  const [storedPassword, setStoredPassword] = useState("");

  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  // ✅ Validation function (same logic style as BasicForm)
  const validate = () => {
    const newErrors = {};

    if (!username.trim()) {
      newErrors.username = "Username is required";
    } else if (username.length < 3) {
      newErrors.username = "Username must be at least 3 characters long";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    return newErrors;
  };

  // ✅ Signup validation and logic
  const handleSignUp = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStoredUsername(username);
    setStoredPassword(password);
    alert("Account created successfully! You can now log in.");
    setIsSignup(false);
    setUsername("");
    setPassword("");
  };

  // ✅ Login validation and logic
  const handleLogIn = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (username === storedUsername && password === storedPassword) {
      setIsLoggedIn(true);
      alert("Login successful!");
    } else {
      alert("Invalid username or password!");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {isLoggedIn ? (
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mx-auto flex items-center justify-center mb-4">
                <span className="text-white text-3xl font-bold">
                  {storedUsername.charAt(0).toUpperCase()}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Welcome back!
              </h2>
              <p className="text-xl text-gray-600">{storedUsername}</p>
            </div>
            <button
              onClick={handleLogout}
              className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-red-600 hover:to-pink-600 transition duration-300 shadow-lg"
            >
              Logout
            </button>
          </div>
        ) : isSignup ? (
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Create Account
            </h2>
            <form onSubmit={handleSignUp} className="space-y-6">
              {/* Username */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={handleUsername}
                  className={`w-full px-4 py-3 border-2 rounded-lg outline-none bg-white text-gray-900 placeholder-gray-400 transition duration-200 ${
                    errors.username
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:ring-2 focus:ring-purple-500"
                  }`}
                  placeholder="Choose a username"
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">{errors.username}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={handlePassword}
                  className={`w-full px-4 py-3 border-2 rounded-lg outline-none bg-white text-gray-900 placeholder-gray-400 transition duration-200 ${
                    errors.password
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:ring-2 focus:ring-purple-500"
                  }`}
                  placeholder="Create a password"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 transition duration-300 shadow-lg transform hover:scale-105"
              >
                Create Account
              </button>
              <p className="text-center text-gray-600 text-sm">
                Already have an account?{" "}
                <span
                  onClick={() => setIsSignup(false)}
                  className="text-blue-600 font-semibold cursor-pointer hover:text-blue-700 hover:underline"
                >
                  Log In
                </span>
              </p>
            </form>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Welcome Back
            </h2>
            <form onSubmit={handleLogIn} className="space-y-6">
              {/* Username */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={handleUsername}
                  className={`w-full px-4 py-3 border-2 rounded-lg outline-none bg-white text-gray-900 placeholder-gray-400 transition duration-200 ${
                    errors.username
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:ring-2 focus:ring-blue-500"
                  }`}
                  placeholder="Enter your username"
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">{errors.username}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={handlePassword}
                  className={`w-full px-4 py-3 border-2 rounded-lg outline-none bg-white text-gray-900 placeholder-gray-400 transition duration-200 ${
                    errors.password
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:ring-2 focus:ring-blue-500"
                  }`}
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition duration-300 shadow-lg transform hover:scale-105"
              >
                Login
              </button>
              <p className="text-center text-gray-600 text-sm">
                Don't have an account?{" "}
                <span
                  onClick={() => setIsSignup(true)}
                  className="text-purple-600 font-semibold cursor-pointer hover:text-purple-700 hover:underline"
                >
                  Sign Up
                </span>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
