
import React, { useState } from 'react';


function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e) => {
  e.preventDefault(); 
  alert('Login clicked!');
  };

  return (
  <div style={{ padding: '20px' }}>

   {/* Page title */}
  <h2>Login</h2>

   {/* Login form */}
  <form onSubmit={handleSubmit}>

    {/* Username field */}
  <div style={{ marginBottom: '10px' }}>
    <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)} 
        />
        </div>

    {/* Password field */}
    <div style={{ marginBottom: '10px' }}>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} // Updates password when user types
          />
        </div>

      {/* Login button */}
      <button type="submit">Login</button>

      </form>
    </div>
  );
}

export default LoginPage;