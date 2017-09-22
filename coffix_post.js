var map;
var infowindow;

function initMap() {
  var lat;
  var lng;

  navigator.geolocation.getCurrentPosition(function (position) {
      lat = position.coords.latitude;
      lng = position.coords.longitude;

      //console.log(lat, lng);

      var newYork = { lat: lat, lng: lng };

      map = new google.maps.Map(document.getElementById('mapGoesHere'), {
        center: newYork,
        zoom: 13,
        disableDefaultUI: true,
        scrollwheel: true,
        draggable: true,
      });

      infowindow = new google.maps.InfoWindow();

      var service = new google.maps.places.PlacesService(map);

      service.nearbySearch({
              location: newYork,
              radius: 6000,
              type: ['cafe'],
            }, callback);
    });

  function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
        console.log(results);
      }
    }
  }

  function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
      });

    google.maps.event.addListener(marker, 'click', function () {
              infowindow.setContent(place.name + '<br>' + 'Address: ' + place.vicinity + '<br>' + 'User Rating: ' + place.rating);
              infowindow.open(map, this);
            }
          );
  }

}

$.get('https://newsapi.org/v1/articles?source=nfl-news&sortBy=top&apiKey=d3c7138c3b3b4fbfa75ea4c537b2a552', function (data) {
    console.log(data.articles);
    for (var i = 0; i < data.articles.length; i++) {
      var newCard = '<div class="card"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' + data.articles[i].urlToImage + '"></div><div class="card-content"><span class="card-title activator grey-text text-darken-4">' + data.articles[i].title + '<i class="material-icons right">more_vert</i></span><p><a href="' + data.articles[i].url + '">Read More</a></p></div><div class="card-reveal"><span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span><p>' + data.articles[i].description + '</p></div></div>';

      $('#second').append(newCard);
    }
  });

$.get('https://newsapi.org/v1/articles?source=usa-today&sortBy=top&apiKey=d3c7138c3b3b4fbfa75ea4c537b2a552', function (data) {
      console.log(data.articles);
      for (var i = 0; i < data.articles.length; i++) {
        var newCard = '<div class="card"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' + data.articles[i].urlToImage + '"></div><div class="card-content"><span class="card-title activator grey-text text-darken-4">' + data.articles[i].title + '<i class="material-icons right">more_vert</i></span><p><a href="' + data.articles[i].url + '">Read More</a></p></div><div class="card-reveal"><span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span><p>' + data.articles[i].description + '</p></div></div>';

        $('#first').append(newCard);

      }
    });

$.get('https://newsapi.org/v1/articles?source=buzzfeed&sortBy=top&apiKey=d3c7138c3b3b4fbfa75ea4c537b2a552', function (data) {
  console.log(data.articles);
  for (var i = 0; i < data.articles.length; i++) {
    for (var i = 0; i < data.articles.length; i++) {
      var newCard = '<div class="card"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' + data.articles[i].urlToImage + '"></div><div class="card-content"><span class="card-title activator grey-text text-darken-4">' + data.articles[i].title + '<i class="material-icons right">more_vert</i></span><p><a href="' + data.articles[i].url + '">Read More</a></p></div><div class="card-reveal"><span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span><p>' + data.articles[i].description + '</p></div></div>';

      $('#third').append(newCard);
    }
  }
});

var d = new Date();
var n = d.toUTCString();
//console.log(n.length)
var sliced = n.slice(0, 17);
document.getElementById('date').innerHTML = sliced;

//document.getElementById("date").innerHTML = Date();
$(document).ready(function () {
    $('.collapsible').collapsible();
    $('.button-collapse').sideNav();
  });
