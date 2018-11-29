
// A - anatomy of event listener (pop alert)
//-------------------------------------------
//(1) select dom element that receives event (the listening element)
var popWindow = document.querySelector('.pop-alert');

//(2) declare what will happen (the event-handler function)
var popAlert = function(){
   // it all happens here...
   alert("This a test for Alert");
}

//(3) add the event listener to the element that will receive the event,
popWindow.addEventListener('click',popAlert);

