import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import {UserProfile} from './UserProfile';

function App() {
  const [userProfiles, setUserProfiles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLike = () => {
    // Implement logic to handle liking a user and update userProfiles
  };

  const handleDislike = () => {
    // Implement logic to handle disliking a user and update userProfiles
  };
 

  return (
    <Routes>
        <Route path="/" element={<Login/>} />
        <Route
          path="/user-profiles"
          element={<UserProfile
            user={userProfiles[currentIndex]}
            onLike={handleLike}
            onDislike={handleDislike}
          />}
        />
      </Routes>
  );
}

export default App;
