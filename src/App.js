import React from 'react';
import axios from 'axios';


class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  }
  
  getMovies = async () => { //async, await 는 우리가 자바스크립트한테 axios 가 조금 시간이 걸릴수도 있다고 말해주는거임
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  };

  async componentDidMount(){   //render() 함수가 실행되고 나서 젤 먼저 실행되는 함수임.
    this.getMovies();
  }

  render(){

    const {isLoading} = this.state;
    return (
      <div>
        {isLoading ? "Loading..." : "we are ready"}
      </div>
    )
  }


}

export default App;
