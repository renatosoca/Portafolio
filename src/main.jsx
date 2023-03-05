import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import { AppPorfolio } from './AppPorfolio'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppPorfolio />
    </BrowserRouter>
  </React.StrictMode>,
);
