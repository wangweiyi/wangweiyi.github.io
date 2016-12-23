import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';


var headerData = {
  site: {
    name: 'Cathy',
    slogon: 'keep memorizes alive'
  },
  navItems: [
    {
      text: 'HOME',
      url: '/index.html',
      isActive: true
    }, {
      text: 'Web前端',
      url: '/dist/wfe/index.html',
      isActive: false
    }, {
      text: 'TRAVEL',
      url: '/dist/travel/index.html',
      isActive: false
    }, {
      text: 'LIFE STYLE',
      url: '/dist/life-style/index.html',
      isActive: false
    }
  ]
};

var footerData = {
  copyrights: '&copy; 2016 Cathy. All Rights Reserved.'
}


ReactDOM.render(
  <div>
    <Header data={headerData}/>
    <Main />
    <Footer data={footerData}/>
  </div>,  
  document.querySelector('#root')
);