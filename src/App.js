import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import {UserProfile} from './UserProfile';
import { Callback } from './pages/Callback';
import {HomePage} from './pages/HomePage';

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
        <Route path="/callback" element={<Callback/>}/>
        <Route path="/home" element={<HomePage/>}/>
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
