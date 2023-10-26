// import mobileNav from './modules/mobile-nav.js';
import { autoCompleteFunc } from "./modules/autoComplete";
import { datePicker } from "./modules/datePicker";
import { slider } from "./modules/slider";

const init = () => {
  // mobileNav();

  autoCompleteFunc();
  datePicker();
  slider();

}

init();