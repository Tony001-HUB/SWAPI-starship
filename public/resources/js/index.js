import {createCard} from "./components/renderCard.js";
import {createPagination} from "./components/workWithPagination.js";
import {workWithPagination} from "./components/workWithPagination.js";
import {addPaginationActivity} from "./components/addPaginationActivity.js";
import {search} from "./components/search.js";
import {modal} from "./components/modal.js";

createPagination();
createCard();
setTimeout(workWithPagination, 1000);
setTimeout(addPaginationActivity, 1000);
search();