import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';

import './styles.css'; // aqui hacemos que los estilos sean para toda la aplicacion


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <GifExpertApp />
  //</React.StrictMode>
);


