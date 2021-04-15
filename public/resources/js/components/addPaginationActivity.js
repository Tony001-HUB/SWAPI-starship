function addPaginationActivity() {
    document.querySelectorAll(".pagination-item").forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();
            document.querySelector(".active").classList.remove("active");
            item.classList.add("active");
        })
    })

}

function addPaginationSearchActivity() {
    document.querySelectorAll(".search-pagination-item").forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();
            document.querySelector(".active").classList.remove("active");
            item.classList.add("active");
        })
    })

}

export {addPaginationActivity, addPaginationSearchActivity}