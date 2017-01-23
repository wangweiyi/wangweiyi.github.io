import React from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Layout from './components/Layout';
import Index from './components/Index';
import CreateArticle from './components/CreateArticle';
import Article from './components/article';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Index}/>
      <Route path="/article/create" component={CreateArticle}/>
      <Route path="/article/:title" component={Article}/>
    </Route>
  </Router>
), document.getElementById('root'))