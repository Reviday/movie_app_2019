import React from "react"; // react는 당신이 거기에 쓰는 모든 요소를 생성한다는 것.
import PropTypes from "prop-types";

class App extends React.Component { // react는 자동적으로 너의 class compnent의 render method를 실행해! 자동으로!
  state = { // 너가 바꿀 데이터를 넣어
    count : 0
  };
  add = () => { // render function이 호출되도록 코딩해야함
    this.setState(current => ({count: current.count + 1})) // setState를 호출하면 refresh를 함.
                // 이것이 여러분이 state를 set할 때, 
                // react에서 외부의 상태에 의존하지 않는 가장 좋은 방법
  };
  minus = () => {
    this.setState(current => ({count: current.count - 1}))
  };
  // 너가 setState를 호출할 때마다 react는 다시 render 할거야.
  render() {
  return <div>
    <h1>The number is: {this.state.count}</h1>
    <button onClick={this.add}>Add</button>
    <button onClick={this.minus}>Minus</button>
  </div>
  }
}

export default App;
