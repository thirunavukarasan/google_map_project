import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css"
import 'primeflex/primeflex.css';
import MapContext from './context/mapContext';

ReactDOM.render(
  <>
    <MapContext>
      <App />
    </MapContext>
  </>,
  document.getElementById('root')
);
reportWebVitals();
