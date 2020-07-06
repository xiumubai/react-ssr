import React from 'react';
import { renderToString } from 'react-dom/server';

import express from 'express';
import APP from '../src/app';

const app = express();

app.get('/', (req, res) => {
  const Page = <APP title='react-ssr'></APP>;
  const content = renderToString(Page);
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>react ssr</title>
    </head>
    <body>
      <div id="root">${content}</div>
    </body>
    </html>
  `);
});

app.listen(9093, () => {
  console.log('app server listen 9093!');
});
