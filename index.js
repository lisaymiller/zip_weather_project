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
  // $("#city").text('city replacement');
  // $("#weather").text('weather replacement');
  // $("#dateTime").text('date replacement');
  $("#city").text($("inputBox"));
  return 
}



//Function when user presses enter key
$('input').on('keyup', function (e) {                
                if(e.which === 13){
                 	let modalFunc = function() {
              		modal.style.display = "block";
                  $("#city").text($("inputBox"));
                  // $("#weather").text('weather replacement');
                  // $("#dateTime").text('date replacement');
            		}
                	return modalFunc();
                }
            });
    
    // Form will get the user's zipcode when submitted


function currentWeather(zipcode) {
    // OpenWeather API key
    var key = "8f37b106985fdb90c5024a634d4ca05f";
    // created a variable that stores unique url depending on what user input I decide to use to call API
    var zipcodeURL = "https://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + "&appid=" + key;

    // Make API call to OpenWeather
    $.ajax({ url: zipcodeURL, method: "GET"})
        .then(function(weather){

        // Add weather objects
        $("#city").text("City: " + weather.name);
        $("#weather").text("Description: " + weather.weather[0].description);

        // moment is now working! - working on having it display the user's local timezone using getTimezoneOffset()
        let timeZone = weather.timeZone;
        let time = moment.tz(timeZone).utcOffset('-0400').format('dddd') + ', ' + moment.tz(timeZone).utcOffset('-0400').format('hh:mm a');
        $(".dateTime").text("Time: " + time);

        // Meters to Miles - this is for the wind speed display
        function milesConvert(meters){
            // calculate meters to miles and display it as a whole number
            var miles = meters * (25 / 11);
            $(".wind").text("Wind: " + Math.round(meters) + "mph");
        };

        // Kelvin to Fahrenheit
        function fahrenheitConvert(kelvin) {
            // calculate kelvin to fahrenheit and display it as a whole number
            var fahrenheit = (kelvin - 273.15) * 1.80 + 32;
            $(".temperature").text("Temperature: " + Math.round(fahrenheit) + "°F");
        };


        // couldn't get moment to work - it kept throwing my alert box up.. attempting to fix
        // var moment = require('moment');
        // function currentTime(time){
        //     var time = new Moment();
        //     var timeZone = weather.timezone;
        //     return moment().tz(timeZone).format('hh:mm a');
        // }

        // conversion functions
        milesConvert(weather.wind.speed); 
        fahrenheitConvert(weather.main.temp); 
        wayTheWindBlows(weather.wind.deg);
        // currentTime(moment);

        $("#current-conditions").show(2000);
        console.log(weather);

    }).catch(function(){
        alert("Please enter a valid zip code.")
        console.log("User needs to enter a zip code.")
    });
}