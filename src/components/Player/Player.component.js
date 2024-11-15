import { Component } from 'react';

import { PlayerWrapper, StyledPlayer } from './Player.styled';

class Player extends Component {
  state = { isVideoLoaded: false };

  componentDidUpdate(prevProps, _prevProps) {
    console.log({ prev: prevProps.url, curr: this.props.url });

    if (prevProps.url !== this.props.url) {
      this.setState({ isVideoLoaded: false });
    }
  }

  handlePlayerReadiness = () => {
    this.setState({ isVideoLoaded: true });
  };

  render() {
    const {
      props: { url },
      state: { isVideoLoaded },
    } = this;
    const showLoader = !isVideoLoaded && url;
    const playerSize = isVideoLoaded ? '100%' : 0;

    return (
      <>
        {showLoader && <h2>Loading...</h2>}
        {url && (
          <PlayerWrapper>
            <StyledPlayer
              width={playerSize}
              height={playerSize}
              controls
              url={url}
              onReady={this.handlePlayerReadiness}
            />
          </PlayerWrapper>
        )}
      </>
    );
  }
}

export default Player;
