const parameter = ""
const apiKey = "89dd614867924aa8b387405137cca662"
const baseUrl = "https://api.spoonacular.com/recipes/complexSearch"

function recipeRequest(searchTerm){
    return fetch(`${baseUrl}?apiKey=${apiKey}&query=${searchTerm}&addRecipeInstructions=true&addRecipeInformation=true&number=10000`).then((res)=>{
        if(res.ok){
            console.log(res);
            return res.json();
            
        }
        else{
            return Promise.reject(`Error: ${res.error}`);
        }
    }).then((data)=>{
        console.log(data)
    })
}

export default recipeRequest;

// notes on setting up the API
// data.results is going to show an array of recipes
// using an index of results is going to show you a specific recipe
// .vegetarian, .vegan, .glutenFree and .dairyFree are dietary pointers
// .pr