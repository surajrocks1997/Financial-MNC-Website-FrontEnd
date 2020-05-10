function initMap() {
  const loc = { lat: 20.59, lng: 78.96 };
  const map = new google.maps.Map(document.getElementById("map"), {
    center: loc,
    zoom: 14,
  });
  const marker = new google.maps.Marker({ position: loc, map: map });
}
