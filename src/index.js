import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
//import { store } from './app/store';
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './store/loginSlice'
import App from './App';
import './index.css';
import productReducer from './store/productSlice';

const container = document.getElementById('root');
const root = createRoot(container);

  const store = configureStore({
    reducer:{
      pr:productReducer,
      lr:loginReducer
    },
  });

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

