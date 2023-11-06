import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const clientId = '73d44c1d252d46b9be32c4cfe992a17c';
  const redirectUri = 'http://localhost:3000/callback'; 
  const scopes = 'user-read-private user-read-email'; 
  const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=token`;

  const navigate = useNavigate();

  const handleLogin = () => {
    // Redirect the user to Spotify for authentication
    window.location.href = authUrl;
  };

  const handleCallback = () => {
    const accessToken = new URLSearchParams(window.location.hash.substring(1)).get('access_token');
    console.log(accessToken);
    if (accessToken) {
      localStorage.setItem('access_token', accessToken);
      navigate('/callback');
    }
  };

  React.useEffect(() => {
    handleCallback();
  }, []);

  return (
    <div className="login-container">
      <h1>Welcome to TuneSync</h1>
      <p>Log in with your Spotify account:</p>
      <Button onClick={handleLogin}>Log in with Spotify</Button>
    </div>
  );
};

export default Login;
