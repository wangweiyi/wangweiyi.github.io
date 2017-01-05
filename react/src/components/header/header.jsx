import React from 'react';
import { IndexLink } from 'react-router';
import style from './header.less';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className={style.siteHeader}>
        <nav className={style.topNav}>
          <div className={style.topNavItemsWrap}>
            <IndexLink to="/" className={style.topNavItem} activeClassName="active"><i className={style.icon}>&#xe607;</i>HOME</IndexLink>
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