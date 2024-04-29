
import {applyInputRangeStyle} from "./inputRange.js";
import { butonSelect } from "./buttons.js";
import { albumList } from "./albumsDatabase.js";
import { renderCard } from "./createElements.js";
import { criaEvento } from "./theme.js";
import { filterPrice } from "./filterPrice.js";
import { apiMusicas } from "./api.js";

 async function routine(){
   applyInputRangeStyle();
   butonSelect();
   renderCard(await apiMusicas());
   criaEvento();
   filterPrice( renderCard, await apiMusicas());
 }

 routine();
