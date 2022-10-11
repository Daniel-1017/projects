import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { BrowserRouter } from 'react-router-dom';

import { WatchListContextProvider } from './context/watchListContext'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WatchListContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </WatchListContextProvider>
  </React.StrictMode>
)
