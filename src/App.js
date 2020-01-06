import React from "react"; // react는 당신이 거기에 쓰는 모든 요소를 생성한다는 것.

function Food({favourite}) {
  return <h1> I Like {favourite} </h1>;
}

function App() {
  return (
    <div>
      <h1> Hello!!! </h1>{" "}
      <Food favourite="kimchi"/>
      <Food favourite="ramen"/>
      <Food favourite="samgiopsal"/>
      <Food favourite="chukumi"/>
    </div>
  );
}

export default App;
