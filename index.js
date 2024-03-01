const API_KEY ="b53f5a6a49e9464591a6b1b9c294cdab";
const recipeListEl = document.getElementById("recipe-list")

function displayRecipes(recipes){
recipeListEl.innerHTML=""
recipes.forEach((recipe)=>{
    const recipeItemE1=document.createElement("li");
    recipeItemE1.classList.add("recipe-item");
    recipeImageE1=document.createElement("img");
    recipeImageE1.src=recipe.image;
    recipeImageE1.alt= "recipe image";

    recipeTitleE1=document.createElement("h2")
    recipeTitleE1.innerText = recipe.title;

    recipeItemE1.appendChild(recipeImageE1);
    recipeItemE1.appendChild(recipeTitleE1);
    recipeListEl.appendChild(recipeItemE1);
});
}

async function getRecipes() {
    const response = await fetch(`http://api.spoonacular.com/recipes/random?number=10&apikey=${API_KEY}`)

    const data = await response.json()

    return data.recipes
}


 async function ini(){
    const recipes = await getRecipes()
   displayRecipes(recipes)
   console.log(recipes)
}

init()