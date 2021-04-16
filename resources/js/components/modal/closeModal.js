export default function closeModal() {
    document.querySelector(".close").addEventListener('click', event => {
        document.querySelector(".myModal").remove();
    })
}