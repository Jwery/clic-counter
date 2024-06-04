import React, { useState } from 'react';

//donner une valeur par défault quand on lance la page (0)
function Counter() {
  const [value, setValue] = useState(0);

  //Une peremière variable pour incrémenter valur +1
  const increment = () => {
    setValue(value + 1);
  };

  //Une seconde variable pour décrémenter valeur -1 tout en évitant qu'elle devienne négative
  const decrement = () => {
    if (value > 1) {
    setValue(value - 1);
    } 
    
    //pour que le comteur s'arrêre à zero
    else {
      setValue(0);
    }
  };

  return (
    <div className="card">
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

export default Counter;