import React from "react";
import { useState } from "react";
import "./RecipePage.css";

import recipeRequest from "../../utils/ThirdPartyAPI";

function recipepage() {
  const [instructionsView, setInstructionsView] = useState("list");
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="recipepage">
      <h1 className="recipepage__heading">
        recipe title
        <button className="recipepage__source">source</button>
      </h1>

      <h2 className="recipepage__author">by recipe author</h2>
      <div className="recipepage__recipe">
        <div className="recipepage__description">
          <p className="recipepage__description_item">recipe time</p>
          <p className="recipepage__description_item">recipe serves</p>
          <p className="recipepage__description_item">
            Red Lentil Soup with Chicken and Turnips might be a good recipe to
            expand your main course repertoire. This recipe serves 8 and costs
            $3.0 per serving. One serving contains <b>477 calories</b>,{" "}
            <b>27g of protein</b>, and <b>20g of fat</b>. It is brought to you
            by Pink When. 1866 people have tried and liked this recipe. It can
            be enjoyed any time, but it is especially good for <b>Autumn</b>.
            From preparation to the plate, this recipe takes approximately{" "}
            <b>55 minutes</b>. It is a good option if you're following a{" "}
            <b>gluten free and dairy free</b> diet. Head to the store and pick
            up salt and pepper, canned tomatoes, flat leaf parsley, and a few
            other things to make it today. Overall, this recipe earns a{" "}
            <b>spectacular spoonacular score of 99%</b>.
          </p>
        </div>
        <img alt="recipe image" className="recipepage__image"></img>
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
        <div className="recipepage__ingredients"></div>
        {instructionsView === "steps" ? (
          <div className="recipepage__steps-seq">
            <h3 className="steps-seq__step">step # x</h3>
            <div className="steps-seq__arrow arrow_back"></div>
            <div className="steps-seq__arrow arrow_forward"></div>
            <p className="steps-seq__text">
              To a large dutch oven or soup pot, heat the olive oil over medium
              heat.
            </p>
          </div>
        ) : (
          <div className="recipepage__steps-list">
            {/* for each step, render the following and cycle based on arrow inputs */}
            <h3 className="steps-list__step">step # x</h3>
            <p className="steps-list__text">
              {" "}
              To a large dutch oven or soup pot, heat the olive oil over medium
              heat.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default recipepage;
