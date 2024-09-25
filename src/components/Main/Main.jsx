import React from "react";
import { useState, useEffect } from "react";
import "./Main.css";
import bgImage1 from "../../assets/main_page/brooke-lark-unsplash.jpg";
import bgImage2 from "../../assets/main_page/katie-smith-unsplash.jpg";
import bgImage3 from "../../assets/main_page/brooke-lark-unsplash-2.jpg";

import RecipePage from "../RecipePage/RecipePage";

function Main() {
  function randomBackgroundImage() {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    const possibleImages = [bgImage1, bgImage2, bgImage3];
    return possibleImages[getRandomInt(possibleImages.length)];
  }

  const [bgImage, setBgImage] = useState('');

  useEffect(()=>{
    setBgImage(randomBackgroundImage())
  },[randomBackgroundImage, bgImage])

  return (
    <div
      className="main"
    >
      <div className="main__heading"
      style={{ backgroundImage: `url(${randomBackgroundImage()})` }}>
        <div className="main__heading_chef-hat"></div>
        <div className="main__heading_cover"></div>
        <h1 className="main__heading_title">wtmk</h1>
        <h2 className="main__heading_subtitle">what will you make today?</h2>
      </div>
      <RecipePage></RecipePage>
    </div>
  );
}

export default Main;
