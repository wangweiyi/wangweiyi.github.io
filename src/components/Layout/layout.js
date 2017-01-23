// 前端页面结构
import React from 'react';
import Header from '../header';
import style from './clientLayout.less';

class ClientLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        
        <main className={style.siteMain}>
          {this.props.children}
        </main>
        
        <footer className={style.siteFooter}>&copy; 2016 Cathy. All Rights Reserved.</footer>
      </div>
    );
  }
}

export default ClientLayout;