import "./css/slider.css";
import React, { useState, useEffect } from "react";
function App() {
  const listImg = [
    "https://s2.best-wallpaper.net/wallpaper/1920x1080/1711/Beautiful-nature-landscape-grass-trees-river-clouds-colorful_1920x1080.jpg",
    "https://wallpaperaccess.com/full/1511370.jpg",
    "https://wallpaperaccess.com/full/279114.jpg",
    "https://wallpaperaccess.com/full/138728.jpg"
  ];
  const lenList = listImg.length;
  const [index, setIndex] = useState(0);
  const pevImg = () => {
    setIndex( state =>
      (state - 1) % lenList >= 0
        ? (state - 1) % lenList
        : lenList + ((state - 1) % lenList)
    );
  };
  const nextImg = () => {
    setIndex( state => (state + 1) % lenList);
  };
  const changeIndex = (index) => {
    setIndex(index);
  };
  //useEffect(() => void setInterval(() => setIndex(state => (state + 1) % lenList), 3000), [])
  return (
    <div>
      <div className="slider">
        <img className="imgBox" src={listImg[index]} />
        <i className="fas fa-angle-left pev" onClick={pevImg}></i>
        <i className="fas fa-angle-right next" onClick={nextImg}></i>
      </div>
      <div className="dotRow">
        {listImg.map((src, indexDot) => {
          let background = indexDot === index ? { background: "#f16e03" } : { background: "#bdb8b8" }
          return (
            <i
              className="dot"
              style={background}
              onClick={() => changeIndex(indexDot)}
            ></i>
          );
        })}
      </div>
    </div>
  );
}

export default App;
