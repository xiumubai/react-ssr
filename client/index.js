import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/app';

const Page = <BrowserRouter>{App}</BrowserRouter>;
// 注水
React.hydrate(Page, document.getElementById('root'));
