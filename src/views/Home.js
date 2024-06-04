import React from 'react';
import Counter from '../containers/HomeContainer/Counter';

//donner une valeur par défault quand on lance la page (0)
function Home() {
  
  return (

    <div className='bkg' >
      <h1  className="title">Compteur de clics</h1>
      {/* appel du composant counter à la place de la logique de compteur */}
     <Counter />
     <div className='signature'>

     <p>By Joachim</p>
     </div>

    </div>
  );
}

export default Home;
