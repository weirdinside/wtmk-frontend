import React from "react";
import { useState, useEffect } from "react";
import "./RecipePage.css";
import { stringifyRecipe } from "../../utils/functions";

import recipeRequest from "../../utils/ThirdPartyAPI";

function RecipePage({ setActivePhoto, recipe, openPreview }) {
  const [instructionsView, setInstructionsView] = useState("list");
  const [currentStep, setCurrentStep] = useState(0);
  const [recipeImage, setRecipeImage] = useState("");
  const [recipeSteps, setRecipeSteps] = useState(<></>);
  const [recipeIngredients, setRecipeIngredients] = useState(<></>);

  function timeConversion() {
    if (recipe.readyInMinutes >= 60) {
      return `${Math.floor(recipe.readyInMinutes / 60)} hour${
        recipe.readyInMinutes >= 120 ? "s" : ""
      } and ${recipe.readyInMinutes % 60} minutes`;
    } else {
      return `${recipe.readyInMinutes} minutes`;
    }
  }

  function toggleClass(e) {
    e.stopPropagation();
    const customClass = "steps-list__crossed-out";
    const instructions = e.currentTarget.children[1];
    e.currentTarget.classList.toggle(customClass);
    if (e.currentTarget.classList.contains(customClass)) {
      instructions.classList.add("steps-list__hidden");
    } else {
      instructions.classList.remove("steps-list__hidden");
    }
  }

  function toggleStep(operation) {
    if (
      operation === "+" &&
      currentStep < recipe.analyzedInstructions[0].steps.length - 1
    ) {
      setCurrentStep(currentStep + 1);
    }
    if (operation === "-" && currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  }

  useEffect(() => {
    if (recipe.extendedIngredients) {
      setRecipeIngredients(
        recipe.extendedIngredients.map((ingredient) => {
          return (
            <p className="recipepage__ingredients_item" key={`${ingredient.id}${ingredient.original}`}>
              {ingredient.original}
            </p>
          );
        }),
      );
    }
  }, [recipe.extendedIngredients]);

  useEffect(() => {
    setRecipeImage(recipe.image);
    // there needs to be a conditional here to check if analyzedInstructions has property steps
    if (recipe.analyzedInstructions?.length > 0) {
      setRecipeSteps(recipeStepRenderer());
    }
  }, [recipe, instructionsView, currentStep, recipe.analyzedInstructions]);

  function recipeStepRenderer() {
    if (recipe.analyzedInstructions.length === 0) {
      return;
    }
    if (instructionsView === "list") {
      return (
        <div className="recipepage__steps-list">
          {recipe.analyzedInstructions[0].steps.map((step) => {
            return (
              <div key={`step${step.number}`} onClick={toggleClass}>
                <h3 className="steps-list__step">step #{step.number}</h3>
                <p className="steps-list__text">{step.step}</p>
              </div>
            );
          })}
        </div>
      );
    }
    if (instructionsView === "steps") {
      return (
        <div className="recipepage__steps-seq">
          <h3 className="steps-seq__step">
            step #{recipe.analyzedInstructions[0].steps[currentStep].number}
          </h3>
          <div
            onClick={() => {
              toggleStep("-");
            }}
            className="steps-seq__arrow arrow_back"
          ></div>
          <div
            onClick={() => {
              toggleStep("+");
            }}
            className="steps-seq__arrow arrow_forward"
          ></div>
          <p className="steps-seq__text">
            {recipe.analyzedInstructions[0].steps[currentStep].step}
          </p>
        </div>
      );
    }
  }

  // main return
  return (
    <div className="recipepage">
      <h1 className="recipepage__heading">
        {recipe.title}
        <a target="_blank" href={recipe.sourceUrl}>
          <button className="recipepage__source">source</button>
        </a>
      </h1>

      <h2 className="recipepage__author">from {recipe.sourceName}</h2>
      <div className="recipepage__recipe">
        <div className="recipepage__description">
          <p className="recipepage__description_item">
            ready in: {timeConversion()}
          </p>
          <p className="recipepage__description_item">
            serves: {recipe.servings}
          </p>
          <p className="recipepage__description_item">
            {stringifyRecipe(recipe)}
          </p>
        </div>
        <div
          onClick={() => {
            setActivePhoto({ image: recipeImage, source: recipe.sourceName });
            openPreview();
          }}
          style={{ backgroundImage: `url(${recipeImage})` }}
          className="recipepage__image"
        ></div>
      </div>

      <div className="recipepage__view-options">
        <p className="recipepage__view-buttons_heading">view instructions as</p>
        <button
          onClick={() => {
            setInstructionsView("steps");
          }}
          className={`recipepage__view-buttons_steps ${
            instructionsView === "steps" ? "button_active" : null
          }`}
        >
          steps
        </button>
        <button
          onClick={() => {
            setInstructionsView("list");
          }}
          className={`recipepage__view-buttons_list ${
            instructionsView === "list" ? "button_active" : null
          }`}
        >
          list
        </button>
      </div>

      <div className="recipepage__prep">
        <h2 className="recipepage__ingredients_title">
          ingredients{" "}
          <div className="recipepage__ingredients">{recipeIngredients}</div>
        </h2>

        {recipeSteps}
      </div>
    </div>
  );
}

export default RecipePage;
