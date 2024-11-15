import { Component } from 'react';

import Player from './components/Player/Player.component';
import VideoList from './components/VideoList/VideoList.component';
import Reader from './components/Reader/Reader.component';

import videos from './videos.json';
import publications from './publications.json';

class App extends Component {
  state = { selectedVideo: null };

  selectVideo = (link) => {
    this.setState({ selectedVideo: link });
  };

  render() {
    return (
      <>
        <div style={{ padding: 24 }}>
          <h1>Selected video: {this.state.selectedVideo}</h1>
          <VideoList videos={videos} onSelect={this.selectVideo} />
          <Player url={this.state.selectedVideo} />
        </div>

        <Reader publications={publications} />
      </>
    );
  }
}

export default App;
