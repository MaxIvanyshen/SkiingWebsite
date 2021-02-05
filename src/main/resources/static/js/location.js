function findLocation(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    $(".lat").html(lat);
    $(".lon").html(lon);

    $.getJSON("https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=" + lat + "&longitude=" + lon + "&localityLanguage=en", function(response) {
       $(".location").html(response.city + ", " + response.countryName);
    });

}

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(findLocation);
}