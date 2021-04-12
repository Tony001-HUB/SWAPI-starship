import {getData} from "../services/getData.js";
import {renderCard} from "./renderCard.js"


function workWithPagination() {
    document.querySelectorAll('.pagination-item').forEach((activeItem, index) => {
        activeItem.addEventListener('click', event => {
            event.preventDefault();
            document.querySelector(".card__container").innerHTML = "";
            getData(`https://swapi.dev/api/starships/?search=&page=${activeItem.textContent}`)
            .then(starshipItem => starshipItem.results.forEach(element => {
                renderCard(document.querySelector(".card__container"), element);
            }))
        })
    })
}

export {workWithPagination}

