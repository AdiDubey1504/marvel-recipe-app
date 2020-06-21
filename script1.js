// let search = document.querySelector(".text-search");
// let signupbtn = document.querySelector(".signup-btn");
// console.log("se", search);
// search.addEventListener("input", (e) => {
//   console.log("sdsds", e.target.value);
// })
// signupbtn.addEventListener("click", () => {
//   alert("Clicked");
// })

async function fetchResponseFromAPIAndSetPage() {
  let recipes = await fetch("http://my-json-server.typicode.com/AdiDubey1504/marvel-recipe-app/posts");
  recipes = await recipes.json();
  console.log("recipes", recipes[0]);
  let items = document.getElementById("items");
  let allrecipes = "";

  for(let i = 0; i < recipes.length; i++) {
    let recipecard = `<div class="col-md-6">
    <div class="card flex-md-row mb-4 box-shadow h-md-250">
      <div class="card-body d-flex flex-column align-items-start">
        <strong class="d-inline-block mb-2 text-success">${recipes[i].cuisine}</strong>
        <h3 class="mb-0">
          <a class="text-dark" href="#">${recipes[i].recipe_name}</a>
        </h3>
        <div class="mb-1 text-muted">${recipes[i].date_added}</div>
        <p class="card-text mb-auto">${recipes[i].recipe_description}</p>
        <a href="index1.html">Continue reading</a>
      </div>
      <img class="card-img-right flex-auto d-none d-md-block" src=${recipes[i].recipe_image} alt="Card image cap">
    </div>
    </div>`;
    allrecipes += recipecard;
  }
  
  items.innerHTML = allrecipes;
}

fetchResponseFromAPIAndSetPage();






























/*

1. Get the data - Done -> 9 recipes' data
2. For each recipe, i want a card on the page showing the details of that recipe


DOM APIs for working with nodes
1. Access/get/retrieve whatever is inside that html element
2. Put/Add/Create/Change whatever is inside that html element
3. Delete/remove whatever is inside that html element

DOM -> Document object model

*/

// ==============================================================================


// let recipes = fetch("http://my-json-server.typicode.com/AdiDubey1504/marvel-recipe-app/posts");

// let successCallback = function(response) {
//   console.log(1, response);
//   return response.json();
// }

// let success = function(response) {
//   console.log(2, response);
// }

// recipes.then(successCallback).then(success);