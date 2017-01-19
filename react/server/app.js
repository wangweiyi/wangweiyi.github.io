var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

var app = express();
app.use('/', express.static(path.join(__dirname, '../dist')));

var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Huahua = require('./components/Huahua.js');

app.get('/admin', function (req, res) {
    const { name } = req.query;
    
    const content = renderToString(
      <Huahua name={name} />
    );

    const html = `
        <!DOCTYPE html>
        <html lang="zh-CN">
          <head>
            <meta charset="utf-8">
            <title>后端渲染测试</title>
          </head>
          <body>
            <div id="root">${content}</div>
            <script src="/assets/client.js"></script>
            <script src="/assets/client.js"></script>
            <script src="/assets/client.js"></script>
          </body>
        </html>`;

    res.send(html);
});

app.listen(3000, function () {
  console.log('express-handlebars example server listening on: 3000');
});