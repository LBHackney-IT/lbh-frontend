/* global L */
window.L = window.L || {};

if (L !== {}) {
  var map = L.map;
  var control = L.control;
  var tileLayer = L.tileLayer;
  var icon = L.icon;
  var marker = L.marker;
}

function Map($module) {
  this.$module = $module;
  this.moduleId = this.$module.getAttribute("id");
  this.accessToken = this.$module.getAttribute("data-access-token");
  this.map = null;
  this.markerLat = this.$module.getAttribute("data-marker-lat") || null;
  this.markerLng = this.$module.getAttribute("data-marker-lng") || null;
  this.centreLat =
    this.$module.getAttribute("data-centre-lat") || this.markerLat || 51.549;
  this.centreLng =
    this.$module.getAttribute("data-centre-lng") || this.markerLng || -0.077928;
  this.maxZoom = this.$module.getAttribute("data-max-zoom") || 19;
  this.minZoom = this.$module.getAttribute("data-min-zoom") || 12;
  this.initialZoom = this.$module.getAttribute("data-initial-zoom") || 15;
  this.showZoomControl =
    this.$module.getAttribute("data-show-zoom-control") || true;
  this.minLat = this.$module.getAttribute("data-min-lat") || 51.491112;
  this.minLng = this.$module.getAttribute("data-min-lng") || -0.275464;
  this.maxLat = this.$module.getAttribute("data-max-lat") || 51.607351;
  this.maxLng = this.$module.getAttribute("data-max-lng") || 0.096129;
}

Map.prototype.initLeaflet = function() {
  this.map = map(this.moduleId, {
    zoomControl: false,
    maxZoom: this.maxZoom,
    minZoom: this.minZoom,
    center: [this.centreLat, this.centreLng],
    zoom: this.initialZoom
  });
  if (this.showZoomControl) {
    control.zoom({ position: "topright" }).addTo(this.map);
  }
};

Map.prototype.setBounds = function() {
  // Limit the view to the extend of the map
  this.map.setMaxBounds([
    [this.minLat, this.minLng],
    [this.maxLat, this.maxLng]
  ]);
};

Map.prototype.initMapboxTiles = function() {
  var osmStreet = tileLayer(
    "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
    {
      fadeAnimation: false,
      opacity: 1,
      attribution:
        'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://mapbox.com">Mapbox</a>',
      maxZoom: this.maxZoom,
      id: "mapbox.streets",
      accessToken: this.accessToken
    }
  );
  this.map.addLayer(osmStreet);
};

Map.prototype.addMarker = function() {
  if (this.markerLat !== null && this.markerLng !== null) {
    var mapIcon = icon({
      iconUrl: "../../../assets/images/contact/map-marker.svg",
      iconSize: [48, 48],
      iconAnchor: [24, 48]
    });
    marker([this.markerLat, this.markerLng], { icon: mapIcon }).addTo(this.map);
  }
};

Map.prototype.init = function() {
  // Check for module
  if (!this.$module || L == {}) {
    return;
  }

  this.initLeaflet();
  this.setBounds();
  this.initMapboxTiles();
  this.addMarker();
};

export default Map;
