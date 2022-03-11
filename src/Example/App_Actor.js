import React from 'react';
import PropTypes from 'prop-types';

const actors = [
  {
    id: 1,
    name:"Lee Ji-eun",
    image:"https://spnimage.edaily.co.kr/images/photo/files/NP/S/2020/10/PS20100800026.jpg",
    stature: 162
  },
  {
    id: 2,
    name:"Bae Su-ji",
    image:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FZ4EGg%2FbtqxhyrCuQO%2F79Ukd6XkItCINLkBg3UBkK%2Fimg.jpg",
    stature: 168
  },
  {
    id: 3,
    name:"Go Youn-jung",
    image:"https://thumb.mt.co.kr/06/2021/03/2021032410588246416_1.jpg/dims/optimize/",
    stature: 167
  },
];

function Actor({name, picture, stature}){
  return (<div>
      <img src={picture} alt={name}/>
      <h2>이름 : {name}</h2>
      <h4>키 : {stature}cm</h4>
    </div>);
}

Actor.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string,
  stature: PropTypes.number
};

function App_Actor() {
  return (<div>
      <h1>연예인</h1>
      {actors.map((item)=> <Actor key={item.id} name={item.name} picture={item.image} stature={item.stature}/> )}
    </div>);
}

export default App_Actor;
