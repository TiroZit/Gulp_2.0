function initBurger(){
  const burger = document.querySelector('.burger')
  if(burger){
    const menu = document.querySelector('.menu')
    burger.addEventListener('click', function(){
      this.classList.toggle('active');
      menu.classList.toggle('open');
      document.body.classList.toggle('lock');
    })
  }
}

window.addEventListener('load', function(e){
  initBurger();
});