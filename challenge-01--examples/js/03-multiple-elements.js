
//C - call event 'e' that has properties,
//'target' is the objective where the listener was applied.
// Event listener on multiple-elements + using the 'e' object to capture
/// where an event happened
//----------------------------------------------------------

var buttons = document.querySelectorAll('button');

buttons.forEach(function(button){
	button.addEventListener('click', function(e){
		console.log(e.target.innerText);
	})
})

