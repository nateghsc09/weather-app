
$(document).ready(function () {
    var searhHistoryContainer = $('#past-searches');
    var searchForm = $('#search-form');
    var apiKey = 'e7ef451762216c94d54aba8f75ac1dd2';
    var baseUrl = 'api.openweathermap.org/data/2.5/weather?';

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
        var fullUrl = baseUrl + "q=" + city ;
        console.log(city);
    }
});
