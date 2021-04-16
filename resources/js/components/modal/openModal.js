import {HTMLModalRender} from "./htmlModal.js";
import {getData} from "../../services/getData.js";
import closeModal from "./closeModal.js";

export default function openModal() {
    document.querySelectorAll(".more-details").forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();
            let moreDetailsDOMElement = event.target.parentElement.parentElement.parentElement;
            let url = moreDetailsDOMElement.querySelector('.more-details').getAttribute('url');
            getData(`${url.substr(0, 4) + 's' + url.substr(4, url.length)}`)
            .then(data => HTMLModalRender(data))
            .then(HTML => document.querySelector('.card__container').insertAdjacentHTML('beforeend', HTML), setTimeout(closeModal, 2000))
        })
    })
} 