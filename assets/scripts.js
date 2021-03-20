
$(document).ready(function () {
    var searhHistoryContainer = $('#past-searches');
    var searchForm = $('#search-form');
    var currentWeatherContainer = $('#current-weather');
    var searchForFiveDayForecastWeather = $('#five-day-forecast');
    var apiKey = 'e7ef451762216c94d54aba8f75ac1dd2';
    var baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';
    var baseUrl2 = 'http://api.openweathermap.org/data/2.5/forecast?';


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
        var fullUrl = baseUrl + "q=" + city + "&appid=" + apiKey;
        console.log(fullUrl);
        fetch(fullUrl).then(function (response) {
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
                humidityDiv.text(" Humidity: " + humidity + " %");
                windDiv.text("Wind Speed: " + wind.speed + " MPH");

                currentWeatherContainer.append(cityNameDiv);
                currentWeatherContainer.append(tempDiv);
                currentWeatherContainer.append(humidityDiv);
                currentWeatherContainer.append(windDiv);
                currentWeatherContainer.append(weatherDiv);



                //currentWeatherContainer
            });

    }
    function searchForFiveDayForecastWeather(city) {
        var forecastUrl = baseUrl2 + "q=" + city + "appid=" + apiKey;
        fetch(forecastUrl).then(function (responseFromOpenWeatherMapUnProcessed) {
            return responseFromOpenWeatherMapUnProcessed.json()
        }).then(function (data) {
            console.log('Five Day Forecast', data);
            for (var i = 0; i < data.list.length; i++) {
                var isThreeOClock = data.list[i].dt_text.search('15:00:00');

                var cityName = data.city.name;
                if (isThreeOClock > -1) {
                    var forecast = data.list[i];
                    var temp = forcast.main.temp;
                    var humidity = forecast.main.humidity;
                    var weather = forecast.weather;
                    var wind = forecast.wind;
                    var day = moment(forecast.dt_text).format('dddd, MMMM Do');

                    console.log(forecast, temp, humidity, weather, wind, cityName);
                    var dayDiv = $("<div class='day-name'>");
                    var tempDiv = $("<div class='temp-name'>");
                    var humidityDiv = $("<div class='humidity-name'>");
                    var weatherDiv = $("<div class='icon-name'>");
                    var windDiv = $("<div class='wind-name'>");
                    dayDiv.text(day);
                    tempDiv.text("Temperature: " + temp);
                    humidityDiv.text(" Humidity: " + humidity + " %");
                    windDiv.text("Wind Speed: " + wind.speed + " MPH");
                    FiveDayForecastContainer.append(dayDiv);
                    FiveDayForecastContainer.append(tempDiv);
                    FiveDayForecastContainer.append(humidityDiv);
                    FiveDayForecastContainer.append(windDiv);
                }
            


            }
        });

                  
    }      
       
});
