const detailContainer = document.querySelector("#js-results");
const searchEl = document.querySelector("#js-search");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

console.log(detailContainer);

const id = params.get("id");

const url = `https://mikaelajoelsen.flywheelsites.com//wp-json/wp/v2/posts/${id}`;

console.log(id);

async function fetchPosts() {
  try {
    detailContainer.innerHTML = `<div class="loader"></div>`;

    const response = await fetch(url);
    const results = await response.json();
    console.log("results", results);

    detailContainer.innerHTML = `
      <div class="card-details">
        <div class="container">
          <h2>${results.title.rendered}</h2>
          <p>${results.content.rendered}</p>
        </div>
      </div>
    `;
  } catch (error) {
    console.log("error message", error);
    return null;
  }
}

fetchPosts();
