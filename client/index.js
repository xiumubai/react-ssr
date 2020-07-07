import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/app';
import store from '../src/store/store';

const Page = (
  <Provider store={store}>
    <BrowserRouter>{App}</BrowserRouter>
  </Provider>
);

// 注水
React.hydrate(Page, document.getElementById('root'));
