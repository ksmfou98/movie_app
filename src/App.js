import React from 'react';


function Food({fav}){
  console.log(fav);
  return (
    <h1>i like {fav} </h1>
  )

}




function App() {
  return (
    <div className="App">
      <h1 id="222">dohyun</h1>
      <span className="ddd">hyun</span>
      hello! react
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="gimbab" />
      <Food fav="chicken" />
    </div>
  );
}

export default App;
