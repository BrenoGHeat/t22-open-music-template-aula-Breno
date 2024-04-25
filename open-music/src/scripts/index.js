
import {applyInputRangeStyle} from "./inputRange.js";
import { butonSelect } from "./buttons.js";
import { albumList } from "./albumsDatabase.js";
import { renderCard } from "./createElements.js";
import { criaEvento } from "./theme.js";


 function routine(){
   applyInputRangeStyle();
   butonSelect();
   renderCard(albumList);
   criaEvento();
  
 }

 routine();
