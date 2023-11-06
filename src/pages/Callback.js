import React, { useEffect } from 'react';

export const Callback = () => {
  useEffect(() => {
    // Extract the access token from the URL
    const params = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = params.get('access_token');

    // Store the access token in localStorage or a state management solution
    localStorage.setItem('access_token', accessToken);

    // Redirect the user to the desired route (e.g., user profiles)
    window.location.href = '/user-profiles';
  }, []);

  return (
    <div className="loading-container">
      <p>Logging you in...</p>
    </div>
  );
};
