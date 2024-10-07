import "./Calculator.css"
import { useRef, useState } from 'react';

const Calculator = () => {
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [currentOperation, setCurrentOperation] = useState('');
  const operation = useRef(null);
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    inputRef.current.value = e.target.value;
  };

  const handleOperation = (op) => {
    const value = parseFloat(inputRef.current.value);
    if (operation.current === null) {
      operation.current = { op, firstValue: value };
      setCurrentOperation(`${value} ${op}`);
      inputRef.current.value = '';
    } else {
      let res;
      switch (operation.current.op) {
        case '+':
          res = operation.current.firstValue + value;
          break;
        case '-':
          res = operation.current.firstValue - value;
          break;
        case '*':
          res = operation.current.firstValue * value;
          break;
        case '/':
          res = operation.current.firstValue / value;
          break;
        default:
          break;
      }
      setResult(res);
      setHistory((prev) => [...prev, res].sort((a, b) => a - b));
      operation.current = null;
      setCurrentOperation('');
      inputRef.current.value = '';
    }
  };

  const handleReset = () => {
    setResult(null);
    setHistory([]);
    setCurrentOperation('');
    inputRef.current.value = '';
    operation.current = null;
  };

  return (
    <div className="calculator">
      <h2>Calculadora</h2>
      <input
        ref={inputRef}
        type="number"
        placeholder="Inserte Numero"
        onChange={handleInputChange}
      />
      <div>
        <button onClick={() => handleOperation('+')}>+</button>
        <button onClick={() => handleOperation('-')}>-</button>
        <button onClick={() => handleOperation('*')}>*</button>
        <button onClick={() => handleOperation('/')}>/</button>
        <button onClick={() => handleOperation('=')}>=</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      {result !== null && <h3>Resultado: {result}</h3>}
      <h4>Historial: {history.join(', ')}</h4>
      {currentOperation && <p>Operacion Actual: {currentOperation}</p>}
    </div>
  );
};

export default Calculator;