import React from 'react';
import ReactDOM from 'react-dom';

import style from './index.less';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Main from '../../components/main';
import Article from '../../components/article';


var asyncJs = require('../../database/articles/async-javascript.json');
Object.assign(asyncJs, {displayMode: 'intro'});

// var fs = require('fs');
// let files = fs.readdirSync('../../database/articles');

ReactDOM.render(
  <div>
    <Header/>
    <Main>
      <Article data={asyncJs} />
      <div>{files}</div>
    </Main>
    <Footer/>
  </div>,  
  document.querySelector('#root')
);