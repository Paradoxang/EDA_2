import React, { useState } from 'react';

const CounterApp = () => {
  // Definir el estado del contador, con un valor inicial de 10
  const [counter, setCounter] = useState(10);

  // Función para sumar 1 al contador
  const handleAdd = () => {
    setCounter(counter + 1);
  };

  // Función para restar 1 al contador, pero que no sea menor de 0
  const handleSubstract = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  // Función para reiniciar el contador al valor por defecto (10)
  const handleReset = () => {
    setCounter(10);
  };

  return (
    <div>
      <h1>Contador: {counter}</h1> {/* Mostrar el valor del contador */}

      {/* Botón para sumar */}
      <button onClick={handleAdd}>Sumar</button>

      {/* Botón para restar, con validación para no permitir valores negativos */}
      <button onClick={handleSubstract}>Restar</button>

      {/* Botón para reiniciar */}
      <button onClick={handleReset}>Reiniciar</button>
    </div>
  );
};

export default CounterApp;
    