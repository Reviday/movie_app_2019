import React from "react"; // react는 당신이 거기에 쓰는 모든 요소를 생성한다는 것.
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies/json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading
          ? (
            <div class="loader">
              <span class="loader__text">Loading...</span>
            </div>
          )
          : (
            <div class="movies">
              {
                movies.map(movie => {
                  return (
                    <Movie
                      key={movie.id}
                      id={movie.id}
                      year={movie.year}
                      title={movie.title}
                      summary={movie.summary}
                      poster={movie.medium_cover_image}
                    />
                  );
                })
              }
            </div>
            )
        }
      </section>
    );
  }
}

export default App;

/*
class App extends React.Component { // react는 자동적으로 너의 class compnent의 render method를 실행해! 자동으로!
  constructor(props) {
    super(props);
    console.log('constructor');
  }
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

  componentDidMount() {
    console.log('component rendered');
  }

  componentDidUpdate() {
    console.log("I'm just updated");
  }

  componentWillUnmount() {
    console.log("Goobye, cruel word");
  }

  render() {
    console.log("I'm rendering");
    return <div>
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
  }
  // component가 render 된 후, 호출되는 다른 function들이 존재한다.
  // 그 중 알아둬야 할 것만 말하면
  // * Mounting : 태어나는 것과 같다.
  //        - constructor() : 자바스크립트의 생성자
  //        - getDerivedStateFromProps() : (다루지 않음)
  //        - render() 
  //        - componentDidMount() : render 후 실행
  // * Updating : 일반적인 업데이트를 의미(업데이트의 원인은 너!) => setState를 호출할 때마다 발생!
  //        - getDerivedStateFromProps() : (다루지 않음)
  //        - shouldComponentUpdate() : (다루지 않음) - 기본적으로 업데이트를 할지 말지 결정하는 것에 대한 것
  //        - render()
  //        - getSnpshotBeforeUpdate() : (다루지 않음 - 니콜라스도 사용한 적 없음.)
  //        - domponentDidUpdate() 
  // * Unmounting : component가 죽는 것을 의미(페이지를 바꿀 때)
  //        - componentWillUnmount() : component가 떠날 때 호출된다.

}
*/
