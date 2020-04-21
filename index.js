// Get the modal
let modal = $("#myModal")[0];

// Get the button that opens the modal
let btn = $("#myBtn")[0];

// Get the <span> element that closes the modal
let span = $(".close")[0];

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

function userEntry() {

var formInput = $("#target").val();
    currentWeather(formInput);
    // test with console.log
    console.log(formInput);
}

  
// Function when user clicks button 
btn.onclick = function() {
  modal.style.display = "block";
  let userInput = $("#inputBox").val();
  return currentWeather(userInput);
}

//Function when user presses enter key
$('input').on('keyup', function (e) {                
                if(e.which === 13){
                 	let modalFunc = function() {
                  modal.style.display = "block";
                  let userInput = $("#inputBox").val();
                  // $("#city").text();
                  // $("#weather").text();
                  // $("#dateTime").text();
                  return currentWeather(userInput);
            		}
                	return modalFunc();
                }
            });
    

function currentWeather(zipcode) {
    // OpenWeather API key
    var key = "8f37b106985fdb90c5024a634d4ca05f";
    // created a variable that stores unique url depending on what user input I decide to use to call API
    var zipcodeURL = "https://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + "&appid=" + key;

    // Make API call to OpenWeather
    $.ajax({ url: zipcodeURL, method: "GET"})
        .then(function(weather){

        // Add weather objects
        $("#city").text(weather.name);
        $("#weather").text("looking like " + weather.weather[0].description + ' for right now');

        // Moment -- date and time
        let timeZone = weather.timeZone;
        let time = moment.tz(timeZone).utcOffset('-0400').format('dddd') + ', ' + moment.tz(timeZone).utcOffset('-0400').format('hh:mm a');
        $("#dateTime").text(time);

    }).catch(function(){
        if (($("#inputBox").val()) === '')
        alert("Please enter a zip code to get started.")
        return false;
    });
}