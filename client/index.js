import React from 'react';
import ReactDom from 'react-dom';
import App from '../src/app';

import React, { useState } from 'react';

// 注水
React.hydrate(App, document.getElementById('root'));
