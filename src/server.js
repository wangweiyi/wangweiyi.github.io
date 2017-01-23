import Express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Layout from './components/Layout';
import Index from './components/Index';

const app = new Express();

app.use('/static', Express.static(path.resolve(__dirname, '../build')));

app.get('/', (req, res, next) => {
  var content = renderToString(
    <ClientLayout>
      <Home />
    </ClientLayout>
  );

  var html =  `
    <!DOCTYPE html>
    <html lang="zh-CN">
      <head>
        <meta charset="utf-8">
        <title>后端渲染测试</title>
        <link rel="stylesheet" href="/static/bundle.css" />
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/static/client.js"></script>
      </body>
    </html>
  `;

  res.send(html);
});

app.get('/article/new', (req, res, next) => {
  res.send('new');
});

app.get('/article/:param', (req, res, next) => {
  res.send(req.param);
});

// 启动服务器
app.listen(3000, (err) => {
  if (err) {
    console.error(err);
  }
  console.info(`Listening on port 3000.`);
});

