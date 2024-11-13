import './PokePage.css';

import MultipleCustomHooks from '../hooks/MultipleCustomHooks';

const PokePage = () => {
    return (
      <div className='poke-page'>
        <h1>Pokémon Viewer</h1>
        <MultipleCustomHooks />
      </div>
    );
  };
  
  export default PokePage;