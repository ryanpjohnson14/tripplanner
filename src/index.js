const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = 'pk.eyJ1IjoicnlhbnBqb2huc29uMTQiLCJhIjoiY2prazZkbm9zMGkzdTN3cDh3aWV2MjgzbSJ9.ZKdtw6_oe-NfmNCPlHKnfQ'

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705],
  zoom: 12,
  style: "mapbox://styles/mapbox/streets-v10"
})

let markerCheck = new mapboxgl.Marker();

const buildMarker = (domEl, activity, coordArr) => new mapboxgl.Marker(domEl).setLngLat(coordArr).addTo(map);

//finished building marker constructor; figure out howt to add activity property
let firstMarker = buildMarker(null,'biking', [-74.009151, 40.705086]);
firstMarker.addTo(map);

console.log(firstMarker, 'test+++++++++++++++++++');

module.exports = {
  map,
  markerCheck
}
