// import Huahua from '../components/Huahua';

var Comp = React.createClass({
  render: function() {
    return (
      <div>comp {this.props.test}</div>
    );
  }
});

ReactDOM.render(
  <div>
    <p>Tixss</p>
    <Comp name="hel"/>
    <Huahua />
  </div>,
  document.getElementById('root')
);