import React from "react"; // react는 당신이 거기에 쓰는 모든 요소를 생성한다는 것.

function Food({name, image}) {
  return <div>
    <h1> I Like {name} </h1>;
    <img src={image} style={{width: "300px"}}/>
    </div>
}

const foodILike = [
  {
    name : "Kimchi",
    image : "https://craftlog.com/m/i/6171598=s1280=h960.webp"
  },
  {
    name : "Ramen",
    image : "http://file.mk.co.kr/meet/neds/2017/09/image_readtop_2017_587233_15042337473013492.jpg"
  },
  {
    name : "Samgiopsal",
    image : "https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fdailylife%2F64c28216ea484ac2ac07ef70405c159b.JPG"
  },
  {
    name : "Chukumi",
    image : "https://s3.ap-northeast-2.amazonaws.com/meesig/v3/prod/image/item/main/649/2a6a17ff3e3447288ae6cdc0425f11b320180627151514"
  },
  {
    name : "Kimbap",
    image : "https://homecuisine.co.kr/files/attach/images/140/001/083/558d170258752df2dd76bef00861497f.JPG"
  }
]

function App() {
  return (
    <div>
      <h1> Hello!!! </h1>{" "}
      {
        foodILike.map(dish => <Food name={dish.name} image={dish.image}/>)
      }
    </div>
  );
}

export default App;
