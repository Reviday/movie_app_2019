import React from "react"; // react는 당신이 거기에 쓰는 모든 요소를 생성한다는 것.
import PropTypes from "prop-types";

class App extends React.Component { // react는 자동적으로 너의 class compnent의 render method를 실행해! 자동으로!
  state = { // 너가 바꿀 데이터를 넣어
    count : 0
  };
  add = () => {
    console.log("add");
  };
  minus = () => {
    console.log("minus");
  };
  render() {
  return <div>
    <h1>The number is: {this.state.count}</h1>
    <button onClick={this.add}>Add</button>
    <button onClick={this.minus}>Minus</button>
  </div>
  }
}

export default App;
