// LAZY-LOADING 
// https://github.com/verlok/vanilla-lazyload
import lazyLoad from "vanilla-lazyload";

function initLazy(){
  if(document.querySelector('.lazy')){
    var lazyLoadInstance = new LazyLoad({
      elements_selector: ".lazy",
    });
  }
}

window.addEventListener('load', function(e){
  initLazy();
});