import React from 'react';

class Huahua extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 'red'
    };
  }
  
  onClick() {
    var color = this.state.color;
    this.setState({
      color: color === 'red' ? 'blue' : 'red'
    });
  }

  render() {
    return (
      <div>
         <div><button type="button" onClick={this.onClick.bind(this)}>Toggle Text Color</button></div>
         <p style={{color: this.state.color}}>Watch my color</p>
      </div>
    );
  }
}

export default Huahua;