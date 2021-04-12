import {getData} from "../services/getData.js";


function createCard() {
    getData(`https://swapi.dev/api/starships`)
    .then(data => data.results.forEach(starshipItem => {
      renderCard(document.querySelector(".card__container"), starshipItem);
    }));
}

function renderCard(HTMLContainer, data) {
  HTMLContainer.insertAdjacentHTML('beforeend',`
    <div class="row">
          <div class="col s12 m7">
          <div class="card">
              <div class="card-image">
              <img src="https://files.hightech.plus/photos/article-b4eea472-b296-4d90-a66e-1b8289550cbb/13392faf-084a-4728-984d-a91d6bf05ef3.jpeg">
              <span class="card-title">Name: ${data.name}</span>
              </div>
              <div class="card-content">
              <p>Manufacturer: ${data.manufacturer}</p>
              </div>
              <div class="card-action">
              <a href="#">More details</a>
              </div>
          </div>
          </div>
      </div>
    `);
}

function createPagination() {
  getData(`https://swapi.dev/api/starships`)
  .then(allStarship => Math.ceil(allStarship.count / 10))
  .then(countItem => renderPagination(countItem))
}

function renderPagination(countOfPaginationItem) {
  for(let i = 1; i <= countOfPaginationItem; i++)
  if(i == 1){
    document.querySelector(".card__pagination-link").insertAdjacentHTML('beforeend',`
    <a href="#" id="${i}" class="pagination-item active">${i}</a>
  `)
  } else {
    document.querySelector(".card__pagination-link").insertAdjacentHTML('beforeend',`
    <a href="#" id="${i}" class="pagination-item">${i}</a>
  `)
  }

}

export { createCard, renderCard, createPagination };