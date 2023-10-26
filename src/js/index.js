// import mobileNav from './modules/mobile-nav.js';
import { animation } from "./modules/animation";
import { autoCompleteFunc } from "./modules/autoComplete";
import { datePicker } from "./modules/datePicker";
import { slider } from "./modules/slider";

const init = () => {
  // mobileNav();

  autoCompleteFunc();
  datePicker();
  slider();
  animation();

}

init();