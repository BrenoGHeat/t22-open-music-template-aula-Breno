
import {applyInputRangeStyle} from "./inputRange.js";
import { albumList } from "./albumsDatabase.js";
import { renderCard } from "./createElements.js";
import { criaEvento } from "./theme.js";
import { butonSelect } from "./buttons.js";

 function routine(){
   applyInputRangeStyle();
   renderCard(albumList);
   criaEvento();
   butonSelect();


 }

 routine();
