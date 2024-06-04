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
  const reset = () => {
    if (value > 0){
      setValue(0);
    }
  };

  return (
    <div className="card">
      {/* afficher la variable (value) */}
      <h2 className="value">{value}</h2>

      <div className='buttons'>

      {/* mettre le parametre (decrement) sur le onClick du premier boutton */}
      <button alt="down" className="btn_dwn" onClick={decrement}>
        -
      </button>


      {/* mettre le parametre (increment) sur le onClick du deuxième boutton */}
      <button alt="up" className="btn_up" onClick={increment}>
        +
      </button>
      <button alt="reset" className="btn_rst" onClick={reset}>
        Reset
      </button>
      </div>
    </div>
  );
}

export default Counter;