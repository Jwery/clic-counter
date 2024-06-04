import React, { useState } from 'react';

//donner une valeur par défault quand on lance la page (0)
function Home() {
  const [value, setValue] = useState(0);

  //Une peremière variable pour incrémenter valur +1
  const increment = () => {
    setValue(value + 1);
  };

  //Une seconde variable pour décrémenter valeur -1
  const decrement = () => {
    setValue(value - 1);
  };

  return (
    <div>
      {/* afficher la variable (value) */}
      <h2>{value}</h2>

      {/* mettre le parametre (decrement) sur le onClick du premier boutton */}
      <button onClick={decrement}>
        -
      </button>


      {/* mettre le parametre (increment) sur le onClick du deuxième boutton */}
      <button onClick={increment}>
        +
      </button>
    </div>
  );
}

export default Home;
