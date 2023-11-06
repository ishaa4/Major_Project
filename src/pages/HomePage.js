import React from 'react'
import HomePageCss from '../css/HomePage.module.css';
import ProfileCard from '../components/ProfileCard';

export const HomePage = () => {
  return (
    <div id={HomePageCss.homePage}>
      <div id={HomePageCss.profileContainer}>
        <ProfileCard/>
      </div>
    </div>
  )
}
