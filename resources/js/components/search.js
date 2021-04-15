import {getData} from "../services/getData.js";
import openModal from "./openModal.js";
import {createCard} from "./renderCard.js";
import {createPagination} from "./workWithPagination.js";
import {workWithPagination} from "./workWithPagination.js";
import {addPaginationActivity} from "./addPaginationActivity.js";
import {addPaginationSearchActivity} from "./addPaginationActivity.js";

let inputData = '';
function search() {
    document.querySelector(".btn").addEventListener("click", event => {
        inputData = document.querySelector(".search__container-input").value;
        document.querySelector(".card__container").innerHTML = "";
        document.querySelector(".card__pagination-link").innerHTML = "";
        getData(`https://swapi.dev/api/starships/?search=${inputData}`)
        .then(searchData => createSearchPagination(searchData.count, searchData.results.forEach(item => {
            document.querySelector(".card__container").insertAdjacentHTML('beforeend', HTMLCode(item));
        })))
        .then(document.querySelector(".search__container-input").value = "")
        .then(setTimeout(openModal, 1000))
        .then(setTimeout(listenPaginationClickItem, 1000))
        .then(setTimeout(addPaginationSearchActivity, 1000))
       
    })
}

function resetSearch() {
    document.querySelector(".reset-search").addEventListener("click", event => {
        document.querySelector(".card__container").innerHTML = "";
        document.querySelector(".card__pagination-link").innerHTML = "";
        createCard();
        createPagination();
        setTimeout(workWithPagination, 1000);
        setTimeout(addPaginationActivity, 1000);
    })
}
resetSearch();

function createSearchPagination(countOfPaginationItem) {
    const afterCeilCount = Math.ceil(countOfPaginationItem / 10);

    for(let i = 1; i <= afterCeilCount; i++)
    if(i == 1){
         document.querySelector(".card__pagination-link").insertAdjacentHTML('beforeend',`
            <a href="#" id="${i}" class="search-pagination-item active">${i}</a>
        `)
    } else {
        document.querySelector(".card__pagination-link").insertAdjacentHTML('beforeend',`
            <a href="#" id="${i}" class="search-pagination-item">${i}</a>
        `)
    }
}

function listenPaginationClickItem() {
    document.querySelectorAll(".search-pagination-item").forEach(clickItem => {
        clickItem.addEventListener('click', event => {
            event.preventDefault();
            document.querySelector(".card__container").innerHTML = "";
            getData(`https://swapi.dev/api/starships/?search=${inputData}&page=${clickItem.id}`)
            .then(data => data.results.forEach(item => {
                document.querySelector(".card__container").insertAdjacentHTML('beforeend', HTMLCode(item));
            }))
        })
    })
}

function HTMLCode(item) {
    return `
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
            <p class="modal-text">model: ${item.model}</p><br>
            <p class="modal-text">cost_in_credits: ${item.cost_in_credits}</p><br>
            <p class="modal-text">length: ${item.length}</p><br>
            <p class="modal-text">max_atmosphering_speed: ${item.max_atmosphering_speed}</p><br>
            <p class="modal-text">crew: ${item.crew}</p><br>
            <p class="modal-text">cargo_capacity: ${item.cargo_capacity}</p><br>
            <p class="modal-text">consumables: ${item.consumables}</p><br>
            <p class="modal-text">hyperdrive_rating: ${item.hyperdrive_rating}</p><br>
            <p class="modal-text">starship_class: ${item.starship_class}</p><br>
      </div>
    </div>
    `
}

export {search};

