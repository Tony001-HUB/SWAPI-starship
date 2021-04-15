import {createCard} from "./components/renderCard.js";
import {createPagination} from "./components/workWithPagination.js";
import {workWithPagination} from "./components/workWithPagination.js";
import {addPaginationActivity} from "./components/addPaginationActivity.js";
import {search} from "./components/search.js"

createPagination();
createCard();
setTimeout(workWithPagination, 2000);
setTimeout(addPaginationActivity, 2000);
search();
