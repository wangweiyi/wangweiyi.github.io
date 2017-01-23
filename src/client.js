import React from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import ClientLayout from './components/clientLayout';
import Home from './components/home';
import Article from './components/article';

render((
  <Router history={browserHistory}>
    <Route path="/" component={ClientLayout}>
      <IndexRoute component={Home}/>
      <Route path="/article/:title" component={Article}/>
    </Route>
  </Router>
), document.getElementById('root'))