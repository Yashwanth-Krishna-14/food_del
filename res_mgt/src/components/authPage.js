import React, { useState } from 'react';

const AuthPage = ({ isLogin, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoginMode, setIsLoginMode] = useState(isLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoginMode) {
      // Handle login logic
      console.log('Logging in with:', { email, password });
    } else {
      // Handle signup logic
      console.log('Signing up with:', { name, email, password });
    }
    onClose();
  };

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
  };

  return (
    <div className="relative">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        aria-label="Close"
      >
        ×
      </button>
      <h1 className="text-2xl font-bold mb-6 text-center">{isLoginMode ? 'Login' : 'Signup'}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLoginMode && (
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          {isLoginMode ? 'Login' : 'Signup'}
        </button>
      </form>
      <button
        onClick={toggleMode}
        className="mt-4 text-blue-500 hover:underline"
      >
        {isLoginMode ? 'Switch to Signup' : 'Switch to Login'}
      </button>
    </div>
  );
};

export default AuthPage;
