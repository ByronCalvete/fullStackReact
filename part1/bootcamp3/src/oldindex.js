import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Counter = ({ number }) => {
  console.log('Counter render');
  return <h1>{number}</h1>;
};

const App = (props) => {
  const [contador, setContador] = useState(0);

  console.log('render');

  const handleClick = (arg) => {
    arg ? setContador(contador + 1) : setContador(contador - 1);
    // setContador(prevContador => prevContador + 1)
  };

  const handleClickReset = () => {
    setContador(0);
  };

  const isEvent = contador % 2 === 0;

  return (
    <div>
      <p>El valor del contador es</p>
      <Counter number={contador} />
      <p>{isEvent ? 'Es par' : 'Es impar'}</p>
      <button onClick={() => handleClick(true)}>Incrementar</button>
      <button onClick={() => handleClick(false)}>Decrementar</button>
      <button onClick={handleClickReset}>Reset</button>
    </div>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
