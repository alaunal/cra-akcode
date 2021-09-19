import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/es/integration/react';

import GlobalStyles from './GlobalStyles'
import reportWebVitals from './reportWebVitals';

import configureStore from './store/index';
import Routes from './routers/index';

// -- Components
import Layout from  './components/Layout';

const { persistor, store, dispatch } = configureStore();
// persistor.purge(); // Debug to clear persist

const Root = _ => (
  <>
  <GlobalStyles />
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router dispatch={dispatch} store={store}>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </PersistGate>
  </Provider>
  </>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
