var lat = document.getElementById("inputLatitude");
var long = document.getElementById("inputLongitude");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    lat.value = "Latitude: " + position.coords.latitude;
    long.value = "Longitude: " + position.coords.longitude;
}