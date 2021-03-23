import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";

const App = () => {
  //about 이라는 주소에 접근시 component = About 을 실행시킴   , exact={ture} 이건 오직 url이 / 일때만 여길 들어가게끔 하는 거임 강의 6-1에있음
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
};

export default App;
