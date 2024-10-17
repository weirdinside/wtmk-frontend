import React from "react";
import { useState, useCallback, useEffect } from "react";
import "./Main.css";
import bgImage1 from "../../assets/main_page/brooke-lark-unsplash.jpg";
import bgImage2 from "../../assets/main_page/katie-smith-unsplash.jpg";
import bgImage3 from "../../assets/main_page/brooke-lark-unsplash-2.jpg";
import * as randomRecipeList from "../../utils/randomRecipeList.json";

import RecipePage from "../RecipePage/RecipePage";

function Main({ setActivePhoto, openPreview }) {
  const getRandomInt = useCallback((max) => {
    return Math.floor(Math.random() * max);
  }, []);

  const randomBackgroundImage = useCallback(() => {
    const possibleImages = [bgImage1, bgImage2, bgImage3];
    return possibleImages[getRandomInt(possibleImages.length)];
  }, [getRandomInt]);

  const getRandomRecipe = useCallback(() => {
    return randomRecipeList.results[
      getRandomInt(randomRecipeList.results.length)
    ];
  }, [getRandomInt]);

  const [backgroundImage, setBackgroundImage] = useState({});
  const [randomRecipe, setRandomRecipe] = useState({});

  useEffect(() => {
    setRandomRecipe(getRandomRecipe());
    setBackgroundImage({ backgroundImage: `url(${randomBackgroundImage()})` });
  }, [getRandomInt, getRandomRecipe, randomRecipeList]);

  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    setBgImage(randomBackgroundImage());
  }, [randomBackgroundImage, bgImage]);

  return (
    <main className="main">
      <div className="main__heading" style={backgroundImage}>
        <div className="main__heading_chef-hat"></div>
        <div className="main__heading_cover"></div>
        <h1 className="main__heading_title">wtmk</h1>
        <h2 className="main__heading_subtitle">what will you make today?</h2>
      </div>
      <RecipePage
        setActivePhoto={setActivePhoto}
        openPreview={openPreview}
        recipe={randomRecipe}
        recipeSrc={randomRecipe.sourceUrl}
        recipeTitle={randomRecipe.title}
      ></RecipePage>
    </main>
  );
}

export default Main;
