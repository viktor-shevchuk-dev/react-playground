import { ButtonContainer, Button } from './Controls.styled';

const Controls = ({ onIndexChange, current, total }) => {
  const backButtonDisabled = current === 1;
  const forwardButtonDisabled = current === total;

  return (
    <ButtonContainer>
      <Button
        disabled={backButtonDisabled}
        onClick={onIndexChange.bind(null, -1)}
      >
        Back
      </Button>
      <Button
        disabled={forwardButtonDisabled}
        onClick={onIndexChange.bind(null, 1)}
      >
        Forward
      </Button>
    </ButtonContainer>
  );
};

export default Controls;
