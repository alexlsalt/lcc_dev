import React, { useState } from 'react';
import './View.css';

export default function PodcastView() {
  const [episodes, setEpisodes] = ([]);

  fetch(`https://www.buzzsprout.com/api/1184462?api_token=${process.env.REACT_APP_ACCESS_KEY}`)
    .then(res => res.json())
    .then(json => {
      console.log(json);
    })


  return (
    <div className='view-section'>
      <h1 className='page-title'>The Ladies Code Collective Podcast</h1>
      <EpisodeContainer />
    </div>
  )
}


function EpisodeContainer() {
  return (
    <div className='episode-container'>
      <Episode />
      <Episode />
      <Episode />
      <Episode />
      
    </div>
  )
}

function Episode() {
  return (
    <div className='episode'>
      <h2 className='episode-title'>Episode Title</h2>
      <p className='episode-description'>Episode Description</p>
    </div>
  )
}