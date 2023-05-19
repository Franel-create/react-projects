import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOMClient from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import rentalReducer from './redux/rentalReducer';


const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

const store = configureStore({
  reducer: rentalReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// const store = configureStore({
//   reducer: rentalReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(redirect)
// });

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
