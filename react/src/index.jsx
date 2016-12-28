import React from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Sketch from './components/sketch';
import Home from './components/home';
import Article from './components/article';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Sketch}>
      <IndexRoute component={Home}/>
      <Route path="/article/:title" component={Article}/>
    </Route>
  </Router>
), document.querySelector('.container'))