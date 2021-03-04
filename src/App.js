import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css'


class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  }
  
  getMovies = async () => { //async, await 는 우리가 자바스크립트한테 axios 가 조금 시간이 걸릴수도 있다고 말해주는거임
    const {data : {data : {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating ");
    // 위에 구문은 data안에 data 안에 movies를 출력하라를 es6 문법으로 쓴거임 
    // 내가 썻던 문법은 data.data.movies 이거임 
    this.setState({movies : movies, isLoading:false})  //왼쪽 movies는 state의 movies이고 오른쪽 moviessms 방금 axios 로 가져온 data 무비임
    // setState 는 state의 값을 변경할 때 쓰는거임

  };

  async componentDidMount(){   //render() 함수가 실행되고 나서 젤 먼저 실행되는 함수임.
    this.getMovies();
  }

  render(){

    const {isLoading, movies} = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) 
        : (
          <div className="movies">
            {movies.map(movie => (
              <Movie 
                key={movie.id}
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
          )}
      </section>
    )
  }


}

export default App;
