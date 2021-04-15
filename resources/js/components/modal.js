function modal() {

    let btn = document.querySelectorAll(".more-details");
    let span = document.querySelector(".close");

    btn.forEach(item => {
        item.addEventListener('click', event => {
            const DOM = item.parentElement.parentElement.parentElement.parentElement
            DOM.querySelector(".modal").style.display = "block";

            DOM.querySelector(".close").addEventListener('click', event => {
                DOM.querySelector(".modal").style.display = "none";
            })

            window.onclick = function(event) {
                if (event.target == DOM.querySelector(".modal")) {
                    DOM.querySelector(".modal").style.display = "none";
                }
            }
        })
    })
}

export {modal};