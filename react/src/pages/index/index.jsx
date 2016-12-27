import React from 'react';
import ReactDOM from 'react-dom';

import style from './index.less';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Main from '../../components/main';
import Article from '../../components/article';

var articles =  __ARTICLE_FILES__.split(',').map((filename, index) => {
  var articleData = require('../../database/articles/'+filename);  
  Object.assign(articleData, {displayMode: 'intro'});
  return <Article data={articleData} key={index} />;
});

ReactDOM.render(
  <div>
    <Header/>
    <Main>
      {articles}
    </Main>
    <Footer/>
  </div>,  
  document.querySelector('#root')
);