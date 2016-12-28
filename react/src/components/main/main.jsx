//页面主内容区
import React from 'react';
import style from './main.less';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main className={style.siteMain}>
        {this.props.children}
      </main>
    );
  }
}

export default Main;