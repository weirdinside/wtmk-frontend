export function stringifyRecipe(recipe) {
  // this is a hard and fast regex solution that removes all links too.
  // maybe work on a future version that includes linked material
  return String(recipe.summary).replace(/<[^>]+>/g, "");
}
