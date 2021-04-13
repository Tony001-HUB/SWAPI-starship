import {getData} from "../services/getData.js";
import openModal from "./openModal.js";
import {createCard} from "./renderCard.js";
import {createPagination} from "./renderCard.js";
import {workWithPagination} from "./workWithPagination.js";
import {addPaginationActivity} from "./addPaginationActivity.js";

function search() {
    document.querySelector(".btn").addEventListener("click", event => {
        const inputData = document.querySelector(".search__container-input").value;
        document.querySelector(".card__container").innerHTML = "";
        document.querySelector(".card__pagination-link").innerHTML = "";
        getData(`https://swapi.dev/api/starships/?search=${inputData}`)
        .then(searchData => searchData.results.forEach(item => {
            document.querySelector(".card__container").insertAdjacentHTML('beforeend',`
            <div class="row">
                <div class="col s12 m7">
                <div class="card">
                    <div class="card-image">
                    <img src="https://pw.artfile.me/wallpaper/20-03-2017/650x407/kosmos-kosmicheskie-korabli--kosmicheski-1143277.jpg">
                    <span class="card-title">Name: ${item.name}</span>
                    </div>
                    <div class="card-content">
                    <p>Manufacturer: ${item.manufacturer}</p>
                    </div>
                    <div class="card-action">
                    <a href="#" class="more-details">More details</a>
                    </div>
                </div>
                </div>
                <div class="more-details-modal">
                    <p>model: ${item.model}</p><br>
                    <p>cost_in_credits: ${item.cost_in_credits}</p><br>
                    <p>length: ${item.length}</p><br>
                    <p>max_atmosphering_speed: ${item.max_atmosphering_speed}</p><br>
                    <p>crew: ${item.crew}</p><br>
                    <p>cargo_capacity: ${item.cargo_capacity}</p><br>
                    <p>consumables: ${item.consumables}</p><br>
                    <p>hyperdrive_rating: ${item.hyperdrive_rating}</p><br>
                    <p>starship_class: ${item.starship_class}</p><br>
              </div>
            </div>
            `);
        }))
        .then(document.querySelector(".search__container-input").value = "")
        .then(setTimeout(openModal, 1000))
    })
}

function resetSearch() {
    document.querySelector(".reset-search").addEventListener("click", event => {
        document.querySelector(".card__container").innerHTML = "";
        document.querySelector(".card__pagination-link").innerHTML = "";
        createCard();
        createPagination();
        setTimeout(workWithPagination, 2000);
        setTimeout(addPaginationActivity, 2000);
    })
}
resetSearch();

export {search};