import React, { useState } from 'react';

export const UserProfile = ({ user, onLike, onDislike }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(true);
    onLike();
  };

  const handleDislike = () => {
    setIsLiked(false);
    onDislike();
  };

  return (
    <div className="user-profile">
      <img src={user.imageUrl} alt={user.name} />
      <h3>{user.name}</h3>
      <p>{user.description}</p>
      {isLiked ? <span>Liked!</span> : null}
      <button onClick={handleLike}>Like</button>
      <button onClick={handleDislike}>Dislike</button>
    </div>
  );
};