// 页面骨架
import React from 'react';

import Header from '../header';
import Footer from '../footer';
import Main from '../main';

class Sketch extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        <Main>
          {this.props.children}
        </Main>
        <Footer />
      </div>
    );
  }
}

export default Sketch;