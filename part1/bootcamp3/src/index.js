import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = (props) => {
  const [contador, setContador] = useState(0)

  console.log('render')

  return (
    <div>
      <p>El valor del contador es</p>
      <h1>{contador}</h1>
      <button onClick={() => {
        setContador(contador + 1)
        // setContador(prevContador => {
        //   console.log(prevContador)
        //   return prevContador + 1
        // })
      }}>
        Incrementar
      </button>
    </div>
  )
}
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );

