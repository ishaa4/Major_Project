import React from 'react'
import HomePageCss from '../css/HomePage.module.css';
import { Button } from '@mui/material';

export const ProfileCard = (props) => {
    const profile = {
      username: "Tanish",
      image: 'https://assets-global.website-files.com/60a0ade9a9e15bdd6b98f68b/60d5dc467b950c5ccc8ced95_spotify-for-artists.jpg',
      genres: [
        "indie",
        "pop",
        "hip-hop"
      ],
      artists: [
        'Arjit Singh',
        'Chainsmokers',
        'AP Dhillon'
      ]
    };

  return (
    <div className={HomePageCss.ProfileCard}>
        <img src={profile.image}/>
        <div className={HomePageCss.profileInfo}>
            <h1>{profile.username}</h1>
        </div>
        <h2>Favorite Genres</h2>
        <div className={HomePageCss.genreContainer}>
          {profile.genres.map((genre) => {
            return <div className={HomePageCss.genre}>

            </div>
          })}
        </div>
        <h2>Favorite Artists</h2>
        <div className={HomePageCss.artistContainer}>
        {profile.artists.map((artist) => {
            return <div className={HomePageCss.artist}>

            </div>
          })}
        </div>
        <Button>Connect</Button>
    </div>
  )
}
