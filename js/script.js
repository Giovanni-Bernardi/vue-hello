
// REPO: vue-hello
// GOAL: stampare a schermo il contenuto di una variabile dentro un h1
// BONUS: utilizzare un data come nome del file immagine in un tag img


function vueTest() {
    new Vue({
  
      el: '#vueApp',
  
      data: {
        "hello" : "Spinning Parrot",
        image: 'img/spinning-parrot.gif'
      }
  
    });
  }
  
  function init() {
    vueTest();
  }
  
  
  document.addEventListener("DOMContentLoaded", init);