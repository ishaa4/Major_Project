import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const Login = () => {
  const clientId = '73d44c1d252d46b9be32c4cfe992a17c';
  const redirectUri = 'http://localhost:3000/callback'; 
  const scopes = 'user-read-private user-read-email'; 

  const handleLogin = () => {
    // Redirect the user to Spotify for authentication
    window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=token`;
  };

  return (
    <div className="login-container">
      <h1>Welcome to Your App</h1>
      <p>Log in with your Spotify account:</p>
      <Button onClick={handleLogin}>Log in with Spotify</Button>
    </div>
  );
};

export default Login;
