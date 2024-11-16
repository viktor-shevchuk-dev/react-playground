import { Component } from 'react';

const EditMaterialModal = ({ onClose, onEdit }) => {
  return (
    <div>
      <h2>Material Editing Modal</h2>
      <button
        type="button"
        onClick={() => {
          onEdit();
          onClose();
        }}
      >
        Yes, I am sure, edit.
      </button>
      <button type="button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export class Material extends Component {
  state = { isModalOpen: false };

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const {
      props: { item, onRemove, onEdit },
      state: { isModalOpen },
    } = this;

    return (
      <>
        <p>Title: {item.title}</p>
        <p>
          Link:{' '}
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            {item.link}
          </a>
        </p>
        <button type="button" onClick={onRemove.bind(null, item.id)}>
          Remove
        </button>
        <button type="button" onClick={this.openModal}>
          Edit
        </button>
        {isModalOpen && (
          <EditMaterialModal
            onClose={this.closeModal}
            onEdit={onEdit.bind(null, { id: item.id, title: Date.now() })}
          />
        )}
        <hr />
      </>
    );
  }
}
