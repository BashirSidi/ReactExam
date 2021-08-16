import { hot } from 'react-hot-loader';
import React from 'react';
import StoreInput from './components/storeInput';
import store from './store/customerStore';
import './App.css';

const message = 'Welcome to ReactExam1';

const App = () => (
  <div className="App">
    <h1>{message}</h1>
    <StoreInput store={store} />
  </div>
);

export default hot(module)(App);
