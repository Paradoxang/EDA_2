import React, { useState, useMemo } from 'react';
import './App.css';
import Display from './Display';
import Button from './Button';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState(null);

 //Inputs 1 y 2 para el usuario
  const handleNum1Change = (e) => setNum1(e.target.value);
  const handleNum2Change = (e) => setNum2(e.target.value);

  //Se usa Memo para evitar cálculos innecesarios
  const calculatedResult = useMemo(() => {
    if (operator && num1 !== '' && num2 !== '') {
      const n1 = Number(num1);
      const n2 = Number(num2);
      switch (operator) {
        case '+':
          return n1 + n2;
        case '-':
          return n1 - n2;
        case '*':
          return n1 * n2;
        case '/':
          return n2 !== 0 ? n1 / n2 : 'Error';
        default:
          return null;
      }
    }
    return null;
  }, [num1, num2, operator]);

  //Aquí se maneja el "trigger" para la calculadora
  const calculate = () => setResult(calculatedResult);

  return (
    <div className="App">
      <h1>Calculadora Clásica</h1>
      <input type="number" value={num1} onChange={handleNum1Change} placeholder="Valor 1" />
      <input type="number" value={num2} onChange={handleNum2Change} placeholder="Valor 2" />

      <div className="buttons">
        
        <Button label="+" onClick={() => setOperator('+')} />
        <Button label="-" onClick={() => setOperator('-')} />
        <Button label="*" onClick={() => setOperator('*')} />
        <Button label="/" onClick={() => setOperator('/')} />
      </div>

      <button onClick={calculate} className="equals">=</button>

      
      <Display result={result} />
    </div>
  );
}

export default App;

