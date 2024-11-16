import { Component } from 'react';

import { MaterialEditorForm } from './components/MaterialEditorForm/MaterialEditorForm.component';

import * as API from './services/api';

class App extends Component {
  state = { materials: [], isLoading: false };

  addMaterial = async (values) => {
    try {
      this.setState({ isLoading: true });
      const material = await API.addMaterial(values);
      this.setState((prevState) => ({
        materials: [...prevState.materials, material],
      }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { isLoading } = this.state;
    return (
      <>
        {isLoading && <p>Loading...</p>}
        <MaterialEditorForm
          onSubmit={this.addMaterial}
          isSubmitting={isLoading}
        />
      </>
    );
  }
}

export default App;
