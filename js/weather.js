$(document).ready(function () {
    var temp;
    var mmTemp;
    var icon;


    var api = 'http://api.openweathermap.org/data/2.5/forecast/daily?zip=85282,us&appid=da78bbd6891eb712f93e7bd93a1e395b';
    var apicurrent = 'http://api.openweathermap.org/data/2.5/weather?zip=85282,us&appid=da78bbd6891eb712f93e7bd93a1e395b';




    $.getJSON(api, function (data) { //pulling from openweathermap
        var kelvin = data.list[0].temp.day;
        var city = data.city.name;
        var iconCode = data.list[0].weather[0].icon;
        var tempMax = data.list[0].temp.max;
        var tempMin = data.list[0].temp.min;
        var info = data.list[0].weather[0].description;

        switch (iconCode) //Matching with icons
        {
            case "01d":
                icon = '<img src="icons/weather-clear.png">';
                break;
            case "01n":
                icon = '<img src="icons/weather-clear-night.png">';
                break;
            case "02d":
                icon = '<img src="icons/weather-few-clouds.png">';
                break;
            case "02n":
                icon = '<img src="icons/weather-few-clouds-night.png">';
                break;
            case "03d":
                icon = '<img src="icons/weather-clouds.png">';
                break;
            case "03n":
                icon = '<img src="icons/weather-clouds-night.png">';
                break;
            case "04d":
                icon = '<img src="icons/weather-few-clouds.png">';
                break;
            case "04n":
                icon = '<img src="icons/weather-clouds-night.png">';
                break;
            case "09d":
                icon = '<img src="icons/weather-showers-day.png">';
                break;
            case "09n":
                icon = '<img src="icons/weather-showers-night.png">';
                break;
            case "10d":
                icon = '<img src="icons/weather-rain-day.png">';
                break;
            case "10n":
                icon = '<img src="icons/weather-rain-night.png">';
                break;
            case "11d":
                icon = '<img src="icons/weather-storm.png">';
                break;
            case "11n":
                icon = '<img src="icons/weather-storm.png">';
                break;
            case "13d":
                icon = '<img src="icons/weather-snow.png">';
                break;
            case "13n":
                icon = '<img src="icons/weather-snow.png">';
                break;
            case "50d":
                icon = '<img src="icons/weather-mist.png">';
                break;
            case "50n":
                icon = '<img src="icons/weather-mist.png">';
                break;

        }

        //Conversion from kelving to F
        temp = parseInt(kelvin * (9 / 5) - 459.67);
        var maxTemp = parseInt(tempMax * (9 / 5) - 459.67);
        var minTemp = parseInt(tempMin * (9 / 5) - 459.67);
        temp = temp.toString();

        if (temp > 95) {
            temp.fontcolor("red");
        }

        //Adding to html doc
        $('#location').html(city);
        $('#temp').html(temp);
        $('#mmTemp').html(maxTemp + " - " + minTemp);
        $('#info').html(info);
        $("#icon").html(icon);

        var t = setTimeout('function(data)', 6000000); //Calls main function to refresh every 10 min



    });

});
