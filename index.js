// Get the modal
let modal = $("#myModal")[0];

// Get the button that opens the modal
let btn = $("#myBtn")[0];

// Get the <span> element that closes the modal
let span = $(".close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//function on enter key press
$('input').on('keyup', function (e) {
    if(e.which === 13){
     	let modalFunc = function() {
  		modal.style.display = "block";
		}
    	return modalFunc();
    }
});



