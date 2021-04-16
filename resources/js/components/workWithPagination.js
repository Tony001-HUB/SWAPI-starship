import {getData} from "../services/getData.js";
import {renderCard} from "./renderCard.js";
import openModal from "./modal/openModal.js";


function workWithPagination() {
    document.querySelectorAll('.pagination-item').forEach((activeItem, index) => {
        activeItem.addEventListener('click', event => {
            event.preventDefault();
            document.querySelector(".card__container").innerHTML = "";
            getData(`https://swapi.dev/api/starships/?page=${activeItem.textContent}`)
            .then(starshipItem => starshipItem.results.forEach(element => {
                renderCard(document.querySelector(".card__container"), element);
            }))
            .then(setTimeout(openModal, 1000))
        })
    })
}

  function createPagination(APIData) {
    renderPagination(Math.ceil(APIData / 10));
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

