import React from 'react';

function Display({ result }) {
  return (
    <div className="display">
      <h2>Resultado: {result !== null ? result : 'Porfavor seleccione dos valores, seleccione operador y luego oprima el botón: ='}</h2>
    </div>
  );
}

export default Display;
