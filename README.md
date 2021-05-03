# Movie App


접속 방법 : https://ksmfou98.github.io/movie_app/   

## 설치  

<b>1. 프로젝트 클론</b>  
```
$ git clone "https://github.com/ksmfou98/movie_app.git"
```  

<b>2. 프로젝트 설치</b>
```
$ npm install
```    

<b>3. 프로젝트 실행</b>
```
$ npm start
```  

<br />

## 강의 소감

html/css/js의 기초를 다진 뒤 프레임 워크를 공부하려고 React vs Vue를 고민하다가 React로 결정 하였다.   
그동안 내가 알던 방식은 html로 웹 구조를 만들고, css로 디자인을 한 뒤 , js로 기능을 넣어주는 것 이였는데,  
리액트는 컴포넌트를 이용하여 하나의 html로 웹을 만드는 형태였다.  
처음에는 적응이 쉽지 않아서 많이 어려웠지만 강의 중반 쯤 갈때부터는 어느 정도 적응이 되어서 괜찮았다.   
이 강의에서는 react의 기본문법부터, api를 불러와서 화면에 나오게 하고,   
이렇게 완성된 웹을 깃허브의 gh-pages로 배포하는 방법 까지 알려준다.   
강의 코드를 100% 이해하고 넘어가려고 하다보니 각 영상이 5~10분인데 , 각 영상마다 1시간씩은 본 거 같다.    
아직 초보 수준이지만 다양한 웹을 만들면서 react의 대해서 많은 것을 공부 하려 한다.  

## react 웹을 github의 pages로 배포 하는법

강의에서 매우 유익한 부분이여서 공유 하려 한다.

1. gh-pages 설치

```
npm i gh-pages
```

gh-pages는 웹사이트를 github의 github page 도메인에 나타나게 해준다   


2. package.json 의 homepage를 추가   
```
"homepage": "https://(아이디).github.io/(레포지이름)/"
```  


3. package.json의 scripts 추가
```
"deploy": "gh-pages -d build",
"predeploy": "npm run build"
```    

4. 배포를 할때 필요한 파일을 build하자  

```
npm run build
```    

5. 배포  
```
npm run deploy
```  

6. 파일 수정을 했을 경우 다시 한 번!  
```  
npm run deploy  
```  





혹시 오류가 생긴다면 gh-pages의 버전 문제일 가능성이 크다. 그럴경우  
```
npm install gh-pages@2.0.1
```  
이렇게 해준 뒤 다시 해보자

