var fop = document.querySelector('.bgimg-1');
var ac = document.querySelector('.topnav');
var fop1 = document.querySelector('#preload');
window.onload = function(){
fop.classList.add('ah');
window.scrollTo(0, 0);
setTimeout(
function(){
    fop1.style.opacity = "0";
    fop1.style.visibility = "hidden";
},1000)
}
window.addEventListener("scroll", function(){
    if(window.scrollY < 510){
        fop.classList.add('ah');
    } else {
        fop.classList.remove('ah');
    }
  });

window.addEventListener('scroll',()=>{
    
    let content = document.querySelector('.row');
    let contenty = content.getBoundingClientRect().top;
    let screen = window.innerHeight/2.5 ;
if (contenty < screen){
    content.classList.add('active');
}
});

window.addEventListener("scroll", function(){
    if(window.scrollY <= 25){
        ac.classList.remove('ac');
    } else {
        ac.classList.add('ac');
    }
  });
var killme = document.getElementById('fko');
var killyo = document.querySelector('.notr');
var killyo1 = document.getElementById('boom');
var killyo5 = document.getElementById('cross-close-left-panel');

killme.addEventListener( "click" , function () {
    killyo.classList.add('no');
killyo1.style.opacity = "1";
killyo1.style.visibility = "visible";

});
killyo5.addEventListener ( "click" , function () {
    killyo.classList.remove('no');
    killyo1.style.opacity = "0";
    killyo1.style.visibility = "hidden";
      
});
killyo1.addEventListener ( "click" , function () {
    killyo.classList.remove('no');
    killyo1.style.opacity = "0";
    killyo1.style.visibility = "hidden";
      
});
(function() {
    var quotes = $(".border");
    var quoteIndex = -1;
    function showNextQuote() {
          ++quoteIndex;
          quotes.eq(quoteIndex % quotes.length)
              .fadeIn(500)
              .delay(2500)
              .fadeOut(500, showNextQuote);
    }
    showNextQuote();
  })();
  
  (function() {
    var quotes = $(".texts span");
    var quoteIndex = -1;
    function showNextQuote() {
          ++quoteIndex;
          quotes.eq(quoteIndex % quotes.length)
              .fadeIn(500)
              .delay(2500)
              .fadeOut(500, showNextQuote);
    }
    showNextQuote();
  })();
  