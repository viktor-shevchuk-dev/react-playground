import { Component } from 'react';

import { MaterialEditorForm } from './components/MaterialEditorForm/MaterialEditorForm.component';
import { MaterialList } from './components/MaterialList/MaterialList.component';

import * as API from './services/api';

class App extends Component {
  state = { materials: [], isLoading: false, error: null };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const materials = await API.getMaterials();
      this.setState({ materials });
    } catch (error) {
      console.log('Failed to get materials:', error);
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  addMaterial = async (values) => {
    try {
      this.setState({ isLoading: true });
      const material = await API.addMaterial(values);
      this.setState((prevState) => ({
        materials: [...prevState.materials, material],
      }));
    } catch (error) {
      console.log('Failed to add material:', error);
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  removeMaterial = async (id) => {
    try {
      await API.removeMaterial(id);
      this.setState((prevState) => ({
        materials: prevState.materials.filter((material) => material.id !== id),
      }));
    } catch (error) {
      console.log('Failed to remove material:', error);
      this.setState({ error });
    }
  };

  updateMaterial = async (fields) => {
    try {
      const updatedMaterial = await API.edtMaterial(fields);
      this.setState((prevState) => ({
        materials: prevState.materials.map((material) =>
          fields.id === material.id ? updatedMaterial : material
        ),
      }));
    } catch (error) {
      this.setState({ error });
      console.log('Failed to edit material:', error);
    }
  };

  render() {
    const { isLoading, materials, error } = this.state;

    return (
      <>
        {error && <p>{error.message}</p>}
        <MaterialEditorForm
          onSubmit={this.addMaterial}
          isSubmitting={isLoading}
        />
        {isLoading && <p>Loading...</p>}
        <MaterialList
          items={materials}
          onRemove={this.removeMaterial}
          onEdit={this.updateMaterial}
        />
      </>
    );
  }
}

export default App;
