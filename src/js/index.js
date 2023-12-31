import { animation } from "./modules/animation";
import { autoCompleteFunc } from "./modules/autoComplete";
import { datePicker } from "./modules/datePicker";
import { mobileNav } from "./modules/mobile-nav";
import { slider } from "./modules/slider";
import { sliderTestimonials } from "./modules/sliderTestimonials";

const init = () => {
  mobileNav();
  autoCompleteFunc();
  datePicker();
  slider();
  sliderTestimonials();
  animation();

}

init();