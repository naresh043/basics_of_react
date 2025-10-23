import React, { useState } from "react";

const BasicForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password) {
      setIsSubmit(true);
      console.log("Form submitted successfully!");
    } else {
      setIsSubmit(false);
      console.log("Please fill out all fields!");
    }
  };

  console.log(isSubmit);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Form</h2>
        
        <div className="space-y-6">
          <div className="name-section">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={handleName}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 transition duration-200 outline-none text-gray-800 placeholder-gray-400"
            />
          </div>

          <div className="email-section">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmail}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition duration-200 outline-none text-gray-800 placeholder-gray-400"
            />
          </div>

          <div className="password-section">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePassword}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-pink-500 focus:ring-4 focus:ring-pink-200 transition duration-200 outline-none text-gray-800 placeholder-gray-400"
            />
          </div>

          <button 
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-4 px-6 rounded-xl hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition duration-300 shadow-lg hover:shadow-xl"
          >
            Submit
          </button>
        </div>

        {isSubmit && (
          <div className="mt-8 overflow-hidden rounded-xl border-2 border-gray-200 shadow-lg animate-fadeIn">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Email</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition duration-150">
                  <td className="px-6 py-4 text-gray-800 font-medium">{name}</td>
                  <td className="px-6 py-4 text-gray-800 font-medium">{email}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default BasicForm;