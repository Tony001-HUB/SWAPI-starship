export default function openModal() {
    console.log(document.querySelectorAll(".more-details"))
    document.querySelectorAll(".more-details").forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();
            const domItem = item.parentElement.parentElement.parentElement.parentElement;
            domItem.querySelector(".more-details-modal").classList.remove("active-modal");    
        })
    })
}