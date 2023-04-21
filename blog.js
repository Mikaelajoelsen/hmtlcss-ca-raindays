const detailContainer = document.querySelector("#js-results");

const url = "https://courseassingment.local/wp-json/wp/v2/posts";

async function fetchresults() {
  try {
    const response = await fetch(url);
    const results = await response.json();

    console.log(results);

    makeCards(results);
  } catch (error) {
    console.log(error);
    detailContainer.innerHTML = message("error", error);
  }
}

fetchresults();

function makeCards(postsArray) {
  const cardContainer = document.querySelector("#card-container");
  console.log(postsArray);
  postsArray.forEach((post) => {
    cardContainer.innerHTML += `
      <a href="details.html?id=${post.id}" class="container">
        <h2>${post.title.rendered}</h2>
        <p class="Tilte">${post.excerpt.rendered}</p>
      </a>
    `;
  });
}
