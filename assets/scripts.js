
$(document).ready(function () {
    var searhHistoryContainer = $('#past-searches');
    var searchForm = $('#search-form');
    var currentWeatherContainer = $('#current-weather');
    var apiKey = 'e7ef451762216c94d54aba8f75ac1dd2';
    var baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';

    searchForm.submit(function (event) {
        event.preventDefault();
        console.log(event);

        var formValues = $(this).serializeArray();
        var city = formValues[0].value;

        var searchTermDiv = $('<div class="past-search-term">');
        searchTermDiv.text(city);
        searhHistoryContainer.append(searchTermDiv);
        console.log(formValues, city);

        searchFormCityWeather(city);

    });
    function searchFormCityWeather(city) {
        var fullUrl = baseUrl + "q=" + city +"&appid=" + apiKey ;
        console.log(fullUrl);
        fetch(fullUrl).then(function(response) {
            return response.json();

        })
        .then(function (data) {
            console.log(data);
            var cityName = data.name;
            var temp = data.main.temp;
            var humidity = data.main.humidity;
            var weather = data.weather;
            var wind = data.wind;
            var cityNameDiv = $("<div class='city-name'>");
            var tempDiv = $("<div class='temp-name'>");
            var humidityDiv = $("<div class='humidity-name'>");
            var weatherDiv = $("<div class='icon-name'>");
            var windDiv = $("<div class='wind-name'>");
            cityNameDiv.text(cityName);
            tempDiv.text("Temperature: " + temp);
            humidityDiv.text(" Humidity: " + humidity + " %" );
            windDiv.text("Wind Speed: " + wind.speed + " MPH");

            currentWeatherContainer.append(cityNameDiv);
            currentWeatherContainer.append(tempDiv);
            currentWeatherContainer.append(humidityDiv);
            currentWeatherContainer.append(windDiv);
            currentWeatherContainer.append(weatherDiv);
           

    
            //currentWeatherContainer
        });

    }
    function searchForFiveDayForcastWeather(city){

    }
});
