import {getData} from "../services/getData.js";
import openModal from "../components/modal/openModal.js";
import {createPagination} from "./workWithPagination.js"

function createCard() {
    getData(`https://swapi.dev/api/starships/`)
    .then(data => {data.results.forEach(starshipItem => {
      renderCard(document.querySelector(".card__container"), starshipItem);
    }), createPagination(data.count)})
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
              <a href="#" class="more-details" url="${data.url}">More details</a>
              </div>
          </div>
      </div>
    `);
}

export { createCard, renderCard };