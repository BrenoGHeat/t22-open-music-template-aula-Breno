
import {applyInputRangeStyle} from "./inputRange.js";
import { albumList } from "./albumsDatabase.js";
import { renderCard } from "./createElements.js";

 function routine(){
   applyInputRangeStyle();
   renderCard(albumList);

 }

 routine();
