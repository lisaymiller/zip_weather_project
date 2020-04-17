let request = require('request');

let apiKEY = '8f37b106985fdb90c5024a634d4ca05f';
let zipcode = '28216';
let url = 'api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}';

request(url, function (err, response, body) {
  if(err){
    console.log('error:', err);
  } else {
    console.log('body:', body);
  }
});





