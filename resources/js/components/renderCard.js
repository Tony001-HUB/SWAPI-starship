import {getData} from "../services/getData.js";
import openModal from "./openModal.js";

function createCard() {
    getData(`https://swapi.dev/api/starships`)
    .then(data => data.results.forEach(starshipItem => {
      renderCard(document.querySelector(".card__container"), starshipItem);
    }))
    .then(setTimeout(openModal, 1000))
}

function renderCard(HTMLContainer, data) {
  HTMLContainer.insertAdjacentHTML('beforeend',`
    <div class="row">
          <div class="col s12 m7">
          <div class="card">
              <div class="card-image">
              <img src="https://pw.artfile.me/wallpaper/20-03-2017/650x407/kosmos-kosmicheskie-korabli--kosmicheski-1143277.jpg">
              <span class="card-title">Name: ${data.name}</span>
              </div>
              <div class="card-content">
              <p>Manufacturer: ${data.manufacturer}</p>
              </div>
              <div class="card-action">
              <a href="#" class="more-details">More details</a>
              </div>
          </div>
          </div>
        <div class="more-details-modal">
            <p>model: ${data.model}</p><br>
            <p>cost_in_credits: ${data.cost_in_credits}</p><br>
            <p>length: ${data.length}</p><br>
            <p>max_atmosphering_speed: ${data.max_atmosphering_speed}</p><br>
            <p>crew: ${data.crew}</p><br>
            <p>cargo_capacity: ${data.cargo_capacity}</p><br>
            <p>consumables: ${data.consumables}</p><br>
            <p>hyperdrive_rating: ${data.hyperdrive_rating}</p><br>
            <p>starship_class: ${data.starship_class}</p><br>
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