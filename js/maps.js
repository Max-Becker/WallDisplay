$(document).ready(function () {
    var trafficTime;
    var color;
    var duration;

    var api = "https://dev.virtualearth.net/REST/V1/Routes/Driving?wp.0=33.417144,%20-111.927318&wp.1=33.388321,%20-111.917446&key=AjFzSCri4WiTXJOeutW0qcUY1ki0PImUx01GiCDNwD9WHYbjhme35wqKHH9-IqDr";

    $.getJSON(api, function (data) { //pulling from Bing maps
        var travelDurationTraffic = data.resourceSets[0].resources[0].travelDurationTraffic;
        var traffic = data.resourceSets[0].resources[0].trafficCongestion;

        travelDurationTraffic = Math.ceil(travelDurationTraffic / 60); //Converting to minutes

        travelDurationTraffic = travelDurationTraffic.toString();
        duration = travelDurationTraffic + " min";
        switch (traffic) //Color coding traffic levels
        {
            case "Mild":
                color = "green";
                break;
            case "Moderate":
                color = "yellow";
                break;
            case "High":
                color = "red";
                break;
        }

        $('#duration').html(duration.fontcolor(color)); //Sending traffic levels to html
       
        var t = setTimeout('function(data)', 6000000); //Calls main function to refresh every 10 min

    });

});
