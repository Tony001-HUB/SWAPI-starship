import {getData} from "../services/getData.js";
import {modal} from "./modal.js";
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
        .then(setTimeout(modal, 1000))
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

function HTMLCode(data) {
    return `
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
        <div id="myModal" class="modal">         
        <div class="modal-content">
            <div class="modal-header">
            <h2>More details about ${data.model}</h2>
            </div>
            <div class="modal-body">
            <p>cost_in_credits: ${data.cost_in_credits}</p>
            <p>length: ${data.length}</p>
            <p>max_atmosphering_speed: ${data.max_atmosphering_speed}</p>
            <p>crew: ${data.crew}</p>
            <p>cargo_capacity: ${data.cargo_capacity}</p>
            <p>consumables: ${data.consumables}</p>
            <p>hyperdrive_rating: ${data.hyperdrive_rating}</p>
            <p>starship_class: ${data.starship_class}</p>
            </div>
            <div class="modal-footer">
            <a class="waves-effect waves-light btn close">close</a>
            </div>
        </div>
        </div>
    `
}

export {search};

