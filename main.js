
  // C A R O S E L L O

  $(document).ready(function() {


        // CLICK MOUSE
// 1. Pesco gli elementi per andare avanti/indietro...le Arrows
$('.next').click( function() {
  // console.log('next');
  nextPrevImage('next');
});

$('.prev').click( function() {
  // console.log('prev');
nextPrevImage('prev');
});

// CLICK KEYBOARD

$(document).keydown(function(event){

  if( event.keyCode == 37) {
    // sinistra
    nextPrevImage('prev');
  }
  else if( event.keyCode == 39){
    // destra
    nextPrevImage('next');
  }

  });

}); // End doc ready

// Function AVANTI/INDIETRO per le Immagini
function nextPrevImage(direction) {
  // console.log(direction);
// variabili IMMAGINE e PALLINO generici
var activeImage = $('.images img.active');
var activeCircle = $('.nav i.active');
// Condizione

// resettiamo la prima immagine attiva
activeImage.removeClass('active');
activeCircle.removeClass('active');

// NEXT
if(direction === 'next'){
// creiamo una condizione dentro la condizione per breakkare il
// lo sfoglio delle foto
        if(activeImage.hasClass('last') === true ) {
          $('.images img.first').addClass('active');
          $('.nav i.first').addClass('active');
        }else{

activeImage.next('img').addClass('active');
activeCircle.next('i').addClass('active');

        }
    }

if(direction === 'prev'){
// creiamo una condizione dentro la condizione per breakkare il
// lo sfoglio delle foto
          if(activeImage.hasClass('first') === true ) {
            $('.images img.last').addClass('active');
            $('.nav i.last').addClass('active');
          }else{

    activeImage.next('img').addClass('active');
    activeCircle.next('i').addClass('active');

          }
        }

}
