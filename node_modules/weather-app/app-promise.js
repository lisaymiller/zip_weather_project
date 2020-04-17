#!/usr/bin/env node
const yargs = require("yargs");
const axios = require("axios");

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "Address to fetch weather for",
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;

const encodedAddress = encodeURIComponent(argv.address);
const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios
  .get(geocodeUrl)
  .then(response => {
    if (response.data.status === "ZERO_RESULTS") {
      throw new Error("Unable to find that address.");
    }

    const lat = response.data.results[0].geometry.location.lat;
    const lng = response.data.results[0].geometry.location.lng;
    const weatherUrl = `https://api.darksky.net/forecast/95618842dbb84355fd8abaf9b47ff3d8/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
  })
  .then(response => {
    const temperature = ((response.data.currently.temperature - 32) *
      (5 / 9)).toFixed(2);
    const apparentTemperature = ((response.data.currently.apparentTemperature -
      32) *
      (5 / 9)).toFixed(2);
    const weatherSummary = response.data.currently.summary;
    console.log(
      `It's currently ${temperature} Celsius. It feels like ${apparentTemperature} Celsius. \nShort weather summary: ${weatherSummary}.`
    );
  })
  .catch(e => {
    if (e.code === "ENOTFOUND") {
      console.log("Unable to connect to API servers.");
    } else {
      console.log(e.message);
    }
  });
