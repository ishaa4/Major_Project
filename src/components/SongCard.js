import React from 'react'
import HomePageCss from '../css/HomePage.module.css';

export const SongCard = (props) => {
  return (
    <div className={HomePageCss.songCard}>
        <img className={HomePageCss.songImage} src={props.song.songImage}/>
        <div className={HomePageCss.songCardInfo}>
            <span>{props.song.songTitle}</span>
           <span>{props.song.songArtist}</span>
        </div>
    </div>
  )
}
