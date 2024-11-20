import { useState } from 'react';

import { SignupForm } from './components/SignupFom/SignupForm.component';
import { ColorPicker } from './components/ColorPicker/ColorPicker.component';
import { Counter } from './components/Counter/Counter.component';
import { Clock } from './components/Clock/Clock.component';
import PokemonForm from './components/Pokemon/PokemonForm/PokemonForm.component';
import PokemonInfo from './components/Pokemon/PokemonInfo/PokemonInfo.component';
import Appbar from './components/Clock/AppBar.component';
import SkipEffectOnFirstRender from './components/SkipEffectOnFirstRender.component';
import Friends from './components/Friends.component';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const App = () => {
  const [pokemonName, setPokemonName] = useState('');

  const handleFormSubmit = (pokemonName) => {
    setPokemonName(pokemonName);
  };

  return (
    <>
      <Appbar />
      <hr />

      <SignupForm />
      <Counter />
      <Clock />
      <ColorPicker options={colorPickerOptions} />

      <PokemonForm onSubmit={handleFormSubmit} />
      <PokemonInfo pokemonName={pokemonName} />
      <hr />

      <SkipEffectOnFirstRender />
      <hr />

      <Friends />
    </>
  );
};

export default App;
