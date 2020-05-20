import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import * as ServiceWorker from './serviceWorker';

// import './index.css';
import App from './App';

const MyAppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <MyAppWithStore />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// PWA
ServiceWorker.register();