import React, { useState, useRef, useEffect } from "react";
import "./RecipeFinder.css";
import { CSSTransition } from "react-transition-group";
import recipeRequest from "../../utils/ThirdPartyAPI";
import { cuisineTypes, diets, allergies } from "../../utils/constants";
import Preloader from "../Preloader/Preloader";
import RecipeCard from "../RecipeCard/RecipeCard";

function RecipeFinder() {
  const [stage, setStage] = useState(0);
  const duration = 0; // this is not working for the time being for transitions, so i've disabled timing
  const [checkedCuisines, setCheckedCuisines] = useState([]);
  const [checkedDiets, setCheckedDiets] = useState([]);
  const [checkedAllergies, setCheckedAllergies] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [error, setErrorActive] = useState(false);
  const [time, setTime] = useState(45);
  const [isLoading, setIsLoading] = useState(false);
  const [returnedRecipes, setReturnedRecipes] = useState(<></>);

  const nodeRef = useRef(null);
  const nodeRef2 = useRef(null);

  function resetSelection() {
    setStage(0);
    setCheckedAllergies([]);
    setCheckedCuisines([]);
    setCheckedDiets([]);
    setTime(45);
    setReturnedRecipes(<></>);
    setInputValue("");
  }

  function handleSubmit() {
    setIsLoading(true);
    recipeRequest({
      cuisines: checkedCuisines,
      diets: checkedDiets,
      allergies: checkedAllergies,
      time: time,
    })
      .then((res) => {
        setReturnedRecipes(renderRecipes(res.results));
      })
      .catch((err) => {
        return console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function renderRecipes(recipeList) {
    console.log(recipeList);
    if (typeof recipeList === "object") {
      if (recipeList.length === 0) {
        return (
          <p className="recipefinder__failed-results">
            we're sorry, but there are no results for your selection. would you
            like to try again?
          </p>
        );
      }
      return recipeList.map((recipe) => {
        return <RecipeCard recipe={recipe}></RecipeCard>;
      });
    } else {
      return <p>oops! error</p>;
    }
  }

  function handleInputChange(event) {
    let value = event.target.value;
    if (value.match(/[^a-zA-Z\s,]/g)) {
      console.log("nope!");
      setErrorActive(true);
    } else {
      console.log("you good");
      setErrorActive(false);
    }
    const sanitizedValue = value.replace(/[^a-zA-Z\s,]/g, "");
    setInputValue(sanitizedValue);
  }

  function handleCuisineChange(cuisine, addCuisine) {
    setCheckedCuisines((prev) => {
      if (addCuisine) {
        if (!prev.includes(cuisine)) {
          return [...prev, cuisine];
        }
      } else {
        return prev.filter((item) => item !== cuisine);
      }
      return prev;
    });
  }

  function translateTime() {
    if (time == 121) {
      return "I got time!";
    } else if (time > 59) {
      return `${Math.floor(time / 60)} hour${time > 119 ? "s" : ""} ${
        time % 60 === 0 ? "" : `& ${time % 60} minutes`
      }`;
    } else if (time <= 59) {
      return `${time} minutes`;
    }
  }

  function handleDietChange(diet, addDiet) {
    setCheckedDiets((prev) => {
      if (addDiet) {
        if (!prev.includes(diet)) {
          return [...prev, diet];
        }
      } else {
        return prev.filter((item) => item !== diet);
      }
      return prev;
    });
  }

  function handleAllergies(allergy, addAllergy) {
    setCheckedAllergies((prev) => {
      if (addAllergy) {
        if (!prev.includes(allergy)) {
          return [...prev, allergy];
        }
      } else {
        return prev.filter((item) => item !== allergy);
      }
      return prev;
    });
  }

  function allergyIsChecked(allergy) {
    return checkedAllergies.includes(allergy);
  }

  function dietIsChecked(diet) {
    return checkedDiets.includes(diet);
  }

  function cuisineIsChecked(cuisine) {
    return checkedCuisines.includes(cuisine);
  }

  return (
    <div className="recipefinder">
      {/* introduction */}
      <CSSTransition
        nodeRef={nodeRef}
        in={stage === 0}
        timeout={duration}
        classNames={{
          enter: "stage-enter",
          enterActive: "stage-enter-active",
          exit: "stage-exit",
          exitActive: "stage-exit-active",
        }}
        unmountOnExit
      >
        <div ref={nodeRef} className="recipefinder__stage recipefinder__stage1">
          <h1 className="recipefinder__title">welcome to the recipe finder!</h1>
          <p className="recipefinder__subtitle">click 'next' to begin</p>
          <button
            onClick={() => {
              setStage(1);
            }}
            style={{ margin: "20px auto" }}
            className="recipefinder__next-stage-button"
          >
            next
          </button>
        </div>
      </CSSTransition>

      {/*  */}
      <CSSTransition
        nodeRef={nodeRef2}
        in={stage === 1}
        timeout={duration}
        classNames={{
          enter: "stage-enter",
          enterActive: "stage-enter-active",
          exit: "stage-exit",
          exitActive: "stage-exit-active",
        }}
        unmountOnExit
      >
        <div
          ref={nodeRef2}
          className="recipefinder__stage recipefinder__stage2"
        >
          <h1 className="recipefinder__title">pick some cuisines:</h1>
          <form className="recipefinder__checkboxes">
            {cuisineTypes.map((cuisine) => {
              return (
                <label key={cuisine} className="recipefinder__checkbox-label">
                  <input
                    onChange={(e) => {
                      handleCuisineChange(cuisine, e.target.checked);
                    }}
                    checked={cuisineIsChecked(cuisine)}
                    className="recipefinder__checkbox"
                    type="checkbox"
                  ></input>
                  <div className="recipefinder__checkbox-checkmark"></div>
                  <span className="recipefinder__custom-checkbox"></span>
                  {cuisine}
                </label>
              );
            })}
          </form>
          <div className="recipefinder__buttons">
            <button
              onClick={() => {
                setStage(0);
              }}
              className="recipefinder__previous-stage-button"
            >
              back
            </button>
            <button
              onClick={() => {
                setStage(2);
              }}
              className="recipefinder__next-stage-button"
            >
              next
            </button>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        nodeRef={nodeRef}
        in={stage === 2}
        timeout={duration}
        classNames={{
          enter: "stage-enter",
          enterActive: "stage-enter-active",
          exit: "stage-exit",
          exitActive: "stage-exit-active",
        }}
        unmountOnExit
      >
        <div ref={nodeRef} className="recipefinder__stage recipefinder__stage3">
          <h1 className="recipefinder__title">are you on any diets?</h1>
          <form className="recipefinder__checkboxes">
            {diets.map((diet) => {
              return (
                <label key={diet} className="recipefinder__checkbox-label">
                  <input
                    onChange={(e) => {
                      handleDietChange(diet, e.target.checked);
                    }}
                    checked={dietIsChecked(diet)}
                    className="recipefinder__checkbox"
                    type="checkbox"
                  ></input>
                  <div className="recipefinder__checkbox-checkmark"></div>
                  <span className="recipefinder__custom-checkbox"></span>
                  {diet}
                </label>
              );
            })}
          </form>
          <div className="recipefinder__buttons">
            <button
              onClick={() => {
                setStage(1);
              }}
              className="recipefinder__previous-stage-button"
            >
              back
            </button>
            <button
              onClick={() => {
                setStage(3);
              }}
              className="recipefinder__next-stage-button"
            >
              next
            </button>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={stage === 3}
        timeout={duration}
        classNames={{
          enter: "stage-enter",
          enterActive: "stage-enter-active",
          exit: "stage-exit",
          exitActive: "stage-exit-active",
        }}
        unmountOnExit
      >
        <div className="recipefinder__stage recipefinder__stage3">
          <h1 className="recipefinder__title">what are you allergic to?</h1>

          <form className="recipefinder__checkboxes">
            {allergies.map((allergy) => {
              return (
                <label key={allergy} className="recipefinder__checkbox-label">
                  <input
                    onChange={(e) => {
                      handleAllergies(allergy, e.target.checked);
                    }}
                    className="recipefinder__checkbox"
                    type="checkbox"
                    checked={allergyIsChecked(allergy)}
                  ></input>
                  <div className="recipefinder__checkbox-checkmark"></div>
                  <span className="recipefinder__custom-checkbox"></span>
                  {allergy}
                </label>
              );
            })}
          </form>
          <label className="recipefinder__input-label">
            please type other allergies below, followed by a comma
            <input
              className="recipefinder__input"
              placeholder="ex. eggplant, apples, broccoli"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
            ></input>
            <p
              className={`recipefinder__input-error ${error ? "active" : null}`}
            >
              only letters and commas allowed!
            </p>
          </label>
          <div className="recipefinder__buttons">
            <button
              onClick={() => {
                setStage(2);
              }}
              className="recipefinder__previous-stage-button"
            >
              back
            </button>
            <button
              onClick={() => {
                setCheckedAllergies(
                  checkedAllergies.concat(inputValue.split(",")),
                );
                console.log(checkedAllergies);
                setStage(4);
              }}
              className="recipefinder__next-stage-button"
            >
              next
            </button>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={stage === 4}
        timeout={duration}
        classNames={{
          enter: "stage-enter",
          enterActive: "stage-enter-active",
          exit: "stage-exit",
          exitActive: "stage-exit-active",
        }}
        unmountOnExit
      >
        <div className="recipefinder__stage recipefinder__stage4">
          <h1 className="recipefinder__title">how long do you have?</h1>
          <label className="recipefinder__input-slider_label">
            {translateTime()}
            <input
              onChange={(e) => {
                setTime(e.target.value);
              }}
              type="range"
              min="15"
              max="121"
              className="recipefinder__input-slider"
              id="myRange"
              value={time}
            ></input>
          </label>
          <div className="recipefinder__buttons">
            <button
              onClick={() => {
                setStage(3);
              }}
              className="recipefinder__previous-stage-button"
            >
              back
            </button>
            <button
              onClick={() => {
                console.log(
                  checkedCuisines,
                  checkedDiets,
                  checkedAllergies,
                  time,
                );
                handleSubmit();
                setStage(5);
              }}
              className="recipefinder__submit-button"
            >
              submit
            </button>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={stage === 5}
        timeout={duration}
        classNames={{
          enter: "stage-enter",
          enterActive: "stage-enter-active",
          exit: "stage-exit",
          exitActive: "stage-exit-active",
        }}
        unmountOnExit
      >
        <div className="recipefinder__stage recipefinder__results">
          <p className="recipefinder__reset">
            want some different results?
            <button
              onClick={() => {
                resetSelection();
              }}
              className="recipefinder__reset-button"
            >
              search again
            </button>
          </p>

          {isLoading ? <Preloader></Preloader> : null}
          <div className="recipefinder__recipecards">{returnedRecipes}</div>
        </div>
      </CSSTransition>
    </div>
  );
}

export default RecipeFinder;
