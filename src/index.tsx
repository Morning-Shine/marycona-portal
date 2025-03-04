import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { persistor, store } from 'store';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      {/* <BrowserRouter basename='/marycona-portal'> */}
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistor}
        >
          <App />
        </PersistGate>
      </Provider>
      {/* </BrowserRouter> */}
    </HashRouter>
  </React.StrictMode>
);