
// B - using the event-handler function and e.target to *dynamically select* 
//and then modify the element where the event happened
//--------------------------------------------
var writeBtn = document.querySelector('.write-btn');
var writeSomething = function(e){
   // it all happens here...
   var el = e.target;
   el.innerHTML = '<h3>This appeared from clicking <code>button.write-btn</code> elsewhere</h3>';
}
writeBtn.addEventListener('click', writeSomething);


