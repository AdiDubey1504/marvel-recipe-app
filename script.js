const data = [
  {
    "cuisine": "Indian",
    "recipe_name": "Biryani",
    "date_added": "Nov 12",
    "recipe_description": "A flavorful Indian-style main dish, inspired by the Cajun style cuisine.",
    "recipe_image": "assets/recipe2.jpg"
  },
  {
    "cuisine": "Thai",
    "recipe_name": "Thai Curry",
    "date_added": "Nov 12",
    "recipe_description": "A flavorful Indian-style main dish, inspired by the Cajun style cuisine.",
    "recipe_image": "assets/recipe3.jpg"
  },
  {
    "cuisine": "Italian",
    "recipe_name": "Pasta",
    "date_added": "Nov 12",
    "recipe_description": "A flavorful Indian-style main dish, inspired by the Cajun style cuisine.",
    "recipe_image": "assets/recipe4.jpg"
  },
  {
    "cuisine": "Indian",
    "recipe_name": "Biryani",
    "date_added": "Nov 12",
    "recipe_description": "A flavorful Indian-style main dish, inspired by the Cajun style cuisine.",
    "recipe_image": "assets/recipe2.jpg"
  },
  {
    "cuisine": "Thai",
    "recipe_name": "Thai Curry",
    "date_added": "Nov 12",
    "recipe_description": "A flavorful Indian-style main dish, inspired by the Cajun style cuisine.",
    "recipe_image": "assets/recipe3.jpg"
  },
  {
    "cuisine": "Italian",
    "recipe_name": "Pasta",
    "date_added": "Nov 12",
    "recipe_description": "A flavorful Indian-style main dish, inspired by the Cajun style cuisine.",
    "recipe_image": "assets/recipe4.jpg"
  },
  {
    "cuisine": "Indian",
    "recipe_name": "Biryani",
    "date_added": "Nov 12",
    "recipe_description": "A flavorful Indian-style main dish, inspired by the Cajun style cuisine.",
    "recipe_image": "assets/recipe2.jpg"
  },
  {
    "cuisine": "Thai",
    "recipe_name": "Thai Curry",
    "date_added": "Nov 12",
    "recipe_description": "A flavorful Indian-style main dish, inspired by the Cajun style cuisine.",
    "recipe_image": "assets/recipe3.jpg"
  },
  {
    "cuisine": "Italian",
    "recipe_name": "Pasta",
    "date_added": "Nov 12",
    "recipe_description": "A flavorful Indian-style main dish, inspired by the Cajun style cuisine.",
    "recipe_image": "assets/recipe4.jpg"
  }
]

async function create_recipe_item() {
  let data = await fetch("http://my-json-server.typicode.com/AdiDubey1504/marvel-recipe-app/posts")
  data = await data.json();
  console.log("da", data);
  let recipe_items = "";
  for(let i = 0; i < data.length; i++) {
    const recipe_item = `
      <div class="col-md-6">
        <div class="card flex-md-row mb-4 box-shadow h-md-250">
          <div class="card-body d-flex flex-column align-items-start">
            <strong class="d-inline-block mb-2 text-success">${data[i].cuisine}</strong>
            <h3 class="mb-0">
              <a class="text-dark" href="#">${data[i].recipe_name}</a>
            </h3>
            <div class="mb-1 text-muted">Nov 11</div>
            <p class="card-text mb-auto">${data[i].recipe_description}</p>
            <a href="#">Continue reading</a>
          </div>
          <img class="card-img-right flex-auto d-none d-md-block" src=${data[i].recipe_image} alt="Card image cap">
        </div>
      </div>
    `;
    recipe_items += recipe_item;
  }
  let items = document.getElementById("items");
  items.innerHTML = recipe_items;
}

create_recipe_item();