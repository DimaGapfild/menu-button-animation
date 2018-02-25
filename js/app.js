;
(function(){

 const topArrowLine = document.querySelector('.navicon:before'),
         bottomArrowLine = document.querySelector('.navicon:after'),
         menuButton = document.querySelector('button');
 function menuButtonTrigger() {
   document.body.classList.toggle('action');
 } 

menuButton.addEventListener('click' , menuButtonTrigger)

})()
