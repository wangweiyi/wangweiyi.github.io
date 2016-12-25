import React from 'react';
import style from './header.less';

let navItemsData = [{
  text: 'HOME',
  link: '/index.html',
  isActive: true
}, {
  text: 'Web前端',
  link: '/dist/wfe/index.html',
  isActive: false
}, {
  text: 'TRAVEL',
  link: '/dist/travel/index.html',
  isActive: false
}, {
  text: 'LIFE STYLE',
  link: '/dist/life-style/index.html',
  isActive: false
}];

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let navItems = navItemsData.map(function (item) {      
      return (
      <a className={style.topNavItem + (item.isActive ? ' active' : '')} href={item.link} key={Math.random()}>{item.text}</a>
      );
    });

    return (
      <header className={style.siteHeader}>
        <nav className={style.topNav}>
          <div className={style.topNavItemsWrap}>
            {navItems}
          </div>
        </nav>
        <div className={style.siteMeta}>
          <h1 className={style.siteName}>Cathy</h1>
          <h2 className={style.siteSlogon}>keep memorizes alive</h2>
        </div>
      </header>
    );
  }
}

export default Header;