import {
  //  Component,
  PureComponent,
} from 'react';

class Tabs extends PureComponent {
  state = { activeTabIndex: 0 };

  // shouldComponentUpdate(nextProps, nextState) {
  //   // return nextState.activeTabIdx !== this.state.activeTabIdx;

  //   if (this.state.activeTabIndex === nextState.activeTabIndex) {
  //     return false;
  //   }

  //   return true;
  // }

  setActiveTabIndex = (index) => {
    this.setState({ activeTabIndex: index });
  };

  render() {
    const activeTab = this.props.items[this.state.activeTabIndex];

    console.log(`Re-render @ ${Date.now()}`);

    return (
      <>
        <div>
          {this.props.items.map((item, index) => {
            return (
              <button
                type="button"
                key={item.label}
                onClick={this.setActiveTabIndex.bind(null, index)}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div>
          <h2>{activeTab.label}</h2>
          <h2>{activeTab.content}</h2>
        </div>
      </>
    );
  }
}

export default Tabs;
