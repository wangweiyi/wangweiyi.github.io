var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var app = express();

var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Huahua = require('./components/Huahua');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    var html = ReactDOMServer.renderToStaticMarkup(React.createElement(
      'body',
      null,
      React.createElement('div', { id: 'root', dangerouslySetInnerHTML: { __html: ReactDOMServer.renderToString(React.createElement(Huahua, {name: "cathy" }))
        }}),
      React.createElement('script', { dangerouslySetInnerHTML: { __html: 'var APP_PROPS = 1;'}}),
      React.createElement('script', { src: '/react.min.js' }),
      React.createElement('script', { src: '/react-dom.min.js' }) //,
      // React.createElement('script', { src: '/bundle.js' })
    ));
    res.end(html);
});

app.listen(3000, function () {
  console.log('express-handlebars example server listening on: 3000');
});