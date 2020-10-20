import React from "react";
import "./View.css";

export default class PodcastView extends React.Component {
  state = {
    episodes: []
  };

  componentDidMount() {
    fetch(
      `https://www.buzzsprout.com/api/1184462/episodes.json?api_token=${process.env.REACT_APP_ACCESS_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        json.forEach((el) => this.setState({
          episodes: [...this.state.episodes,
          el]
        }));
        console.log(this.state.episodes);
      });
  }

  render() {
    return (
      <div className="view-section">
        <h1 className="page-title">The Ladies Code Collective Podcast</h1>
        <EpisodeContainer episodes={this.state.episodes} />
      </div>
    );
  }
}

function EpisodeContainer({ episodes }) {
  return (
    <div className="episode-container">
      <ul>
        {
          episodes.map(episode => (
            <li key={episode.id}><Episode episode={episode} /></li>
          ))
        }
      </ul>
    </div>
  );
}

function Episode({ episode }) {
  return (
    <div className="episode">
      <h2 className="episode-title">{episode.title}</h2>
      
    </div>
  );
}

/* <div id="buzzsprout-player-5889634"></div>
<script src="https://www.buzzsprout.com/1184462/5889634-lcc-14-shiny-object-syndrome-when-learning-to-code.js?container_id=buzzsprout-player-5889634&player=small" type="text/javascript" charset="utf-8"></script> */
