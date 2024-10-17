import React from "react";
import "./RecipeCard.css";
import { stringifyRecipe } from "../../utils/functions";

function RecipeCard({ recipe }) {
  return (
    <div className="recipecard">
      <div className="recipecard__text">
        <button
          onClick={() => window.open(`${recipe.sourceUrl}`, "_blank")}
          className="recipecard__source"
        >
          source
        </button>
        <h1 className="recipecard__title">{recipe.title}</h1>
        <p className="recipecard__description">{stringifyRecipe(recipe)}</p>
      </div>
      <div
        style={{ backgroundImage: `url(${recipe.image})` }}
        className="recipecard__image"
      ></div>
    </div>
  );
}

export default RecipeCard;
