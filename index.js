const API_KEY = "848a7bb3a9a84ff0933a75290e892e50";
        const recipeListEl = document.getElementById("recipe-list");

        function displayRecipes(recipes){
            recipeListEl.innerHTML="";
            recipes.forEach((recipe)=>{
                const recipeItemEl=document.createElement("li");
                recipeItemEl.classList.add("recipe-item");
                const recipeImageEl=document.createElement("img");
                recipeImageEl.src=recipe.image;
                recipeImageEl.alt= "recipe image";

                const recipeTitleEl=document.createElement("h2");
                recipeTitleEl.innerText = recipe.title;

                const recipeIngredientsEl=document.createElement("p");
                recipeIngredientsEl.innerHTML=`<strong>Ingredients:</strong> ${recipe.extendedIngredients.map((ingredient)=>ingredient.original).join(", ")}`;

                const  recipeLinkEl=document.createElement("a");
                recipeLinkEl.href=recipe.sourceUrl;
                recipeLinkEl.innerText="View Recipe";

                const saveButton=document.createElement("button");
                saveButton.innerText="save Recipe";
                saveButton.addEventListener("click",()=> {
                    saveRecipe(recipe);
                });
                

                recipeItemEl.appendChild(recipeImageEl);
                recipeItemEl.appendChild(recipeTitleEl);
                recipeItemEl.appendChild(recipeIngredientsEl);
                recipeItemEl.appendChild(recipeLinkEl);
                recipeListEl.appendChild(recipeItemEl);

                return recipeItemEl;
            });
        }

        async function getRecipes() {
            const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);
            const data = await response.json();
            return data.recipes;
        }

        async function init(){
            const recipes = await getRecipes();
            displayRecipes(recipes);
        }

        init();

// Function to save recipe (You can replace this with actual saving logic)
    function saveRecipe(recipe) {
     console.log("Recipe saved:", recipe.title);
}

// Search functionality (You need to implement this)
    const searchForm = document.getElementById("search-form");
    searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const searchQuery = document.getElementById("search-input").value;
    const recipes = await searchRecipes(searchQuery);
    displayRecipes(recipes);
});

// Function to search recipes (You need to implement this)
    async function searchRecipes(query) {
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=10&apiKey=${API_KEY}`);
    const data = await response.json();
    return data.results;
}