const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = "https://api.spoonacular.com/recipes/complexSearch";

function recipeRequest({ cuisines, diets, allergies, time }) {
  return fetch(
    `${baseUrl}?apiKey=${apiKey}&cuisine=${String(cuisines)}&diet=${String(
      diets,
    )}&excludeIngredients=${String(
      allergies,
    )}&maxReadyTime=${time}&addRecipeInstructions=true&addRecipeInformation=true&number=100`,
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error: ${res.error}`);
      }
    })
}

export default recipeRequest;