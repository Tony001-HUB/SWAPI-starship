import {getData} from "../services/getData.js";
import openModal from "./openModal.js";

function createCard() {
    getData(`https://swapi.dev/api/starships/`)
    .then(data => data.results.forEach(starshipItem => {
      renderCard(document.querySelector(".card__container"), starshipItem);
    }))
    .then(setTimeout(openModal, 15000))
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
          <div class="more-details-modal active-modal">
            <p>model: ${data.model}</p>
            <p>cost_in_credits: ${data.cost_in_credits}</p>
            <p>length: ${data.length}</p>
            <p>max_atmosphering_speed: ${data.max_atmosphering_speed}</p>
            <p>crew: ${data.crew}</p>
            <p>cargo_capacity: ${data.cargo_capacity}</p>
            <p>consumables: ${data.consumables}</p>
            <p>hyperdrive_rating: ${data.hyperdrive_rating}</p>
            <p>starship_class: ${data.starship_class}</p>
            <button class="modal-close">close</button>
          </div>
    `);
}

export { createCard, renderCard };