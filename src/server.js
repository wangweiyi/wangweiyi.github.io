import Express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';

import ClientLayout from './components/clientLayout';
import Home from './components/home';

const app = new Express();

app.use('/static', Express.static(path.resolve(__dirname, '../build')));


function generateHtml(contentComponent) {
  const bodyContent = renderToString(
    <ClientLayout>
      {contentComponent}
    </ClientLayout>
  );

  return `
    <!DOCTYPE html>
    <html lang="zh-CN">
      <head>
        <meta charset="utf-8">
        <title>后端渲染测试</title>
        <link rel="stylesheet" href="/static/client.css" />
      </head>
      <body>
        <div id="root">${bodyContent}</div>
        <script src="/static/client.js"></script>
      </body>
    </html>
  `;
}

app.get('/', (req, res, next) => {
  res.send(generateHtml(<Home />));
});

// 启动服务器
app.listen(3000, (err) => {
  if (err) {
    console.error(err);
  }
  console.info(`Listening on port 3000.`);
});

