import { Component } from 'react';

import Controls from './Controls/Controls.component';
import Progress from './Progress.component';
import Publication from './Publication.component';

const LOCAL_STORAGE_KEY = 'reader_item_index';

class Reader extends Component {
  state = { currentTabIndex: 0 };

  componentDidMount() {
    const savedTabIndex = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (!savedTabIndex) return;

    this.setState({ currentTabIndex: Number(savedTabIndex) });
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.currentTabIndex !== this.state.currentTabIndex) {
      localStorage.setItem(LOCAL_STORAGE_KEY, this.state.currentTabIndex);
    }
  }

  changeIndex = (value) => {
    this.setState((prevState) => ({
      currentTabIndex: prevState.currentTabIndex + value,
    }));
  };

  render() {
    const {
      props: { publications },
      state: { currentTabIndex },
    } = this;
    const publication = publications[currentTabIndex];

    return (
      <>
        <Controls
          onIndexChange={this.changeIndex}
          total={publications.length}
          current={currentTabIndex + 1}
        />

        <Progress total={publications.length} current={currentTabIndex + 1} />

        <Publication title={publication.title} text={publication.text} />
      </>
    );
  }
}

export default Reader;
