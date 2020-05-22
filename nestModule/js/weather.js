"use strict";

var weather;
var forecast;

function getWeatherData(zip){
	var url =  'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/e0eac92bfcf41ca2ac3d1d787c238be0/37.3688,-122.0363?exclude=currently,minutely,daily,alerts,flags';
	$.ajax({
	  type: "GET",
	  contentType: 'application/json',
	  dataType: "json",
	  url: url,
	  data: null,
	  success: function(obj){
	  	weather = obj.hourly.data;
	  	app.main.init();
	  },
	  error: function(){
	  	weather = null;
	  	console.log('could not get weather data');
	  	app.main.init();
	  }
	});
}