import {getData} from "../services/getData.js";
import {renderCard} from "./renderCard.js";
import {modal} from "./modal.js";


function workWithPagination() {
    document.querySelectorAll('.pagination-item').forEach((activeItem, index) => {
        activeItem.addEventListener('click', event => {
            event.preventDefault();
            document.querySelector(".card__container").innerHTML = "";
            getData(`https://swapi.dev/api/starships/?page=${activeItem.textContent}`)
            .then(starshipItem => starshipItem.results.forEach(element => {
                renderCard(document.querySelector(".card__container"), element);
            }))
            .then(setTimeout(modal, 1000))
        })
    })
}

function createPagination() {
    getData(`https://swapi.dev/api/starships/`)
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

export {workWithPagination, createPagination, renderPagination}

//google-site-verification=geNKiCG6WFM1Kdokqh9sQ2iv669qyqR_Cw01Fa4CKIA