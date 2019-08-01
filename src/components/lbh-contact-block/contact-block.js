import * as L from 'leaflet'

function Map ($module) {
  this.$module = $module
  this.moduleId = this.$module.getAttribute('id')
  this.accessToken = this.$module.dataset.accessToken
  this.map = null
  this.markerLat = this.$module.dataset.markerLat || null
  this.markerLng = this.$module.dataset.markerLng || null
  this.centreLat = this.$module.dataset.centreLat || this.markerLat || 51.5490
  this.centreLng = this.$module.dataset.centreLng || this.markerLng || -0.077928
  this.maxZoom = this.$module.dataset.maxZoom || 19
  this.minZoom = this.$module.dataset.minZoom || 12
  this.initialZoom = this.$module.dataset.initialZoom || 15
  this.showZoomControl = this.$module.dataset.showZoomControl || true
  this.minLat = this.$module.dataset.minLat || 51.491112
  this.minLng = this.$module.dataset.minLng || -0.275464
  this.maxLat = this.$module.dataset.maxLat || 51.607351
  this.maxLng = this.$module.dataset.maxLng || 0.096129
}

Map.prototype.initLeaflet = function () {
  console.log(this.initialZoom)
  this.map = L.map(this.moduleId, {
    zoomControl: false,
    maxZoom: this.maxZoom,
    minZoom: this.minZoom,
    center: [this.centreLat, this.centreLng],
    zoom: this.initialZoom
  })
  if (this.showZoomControl) {
    L.control.zoom({ position: 'topright' }).addTo(this.map)
  }
}

Map.prototype.setBounds = function () {
  // Limit the view to the extend of the map
  this.map.setMaxBounds([[this.minLat, this.minLng], [this.maxLat, this.maxLng]])
}

Map.prototype.initMapboxTiles = function () {
  var osmStreet = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    fadeAnimation: false,
    opacity: 1,
    attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://mapbox.com">Mapbox</a>',
    maxZoom: this.maxZoom,
    id: 'mapbox.streets',
    accessToken: this.accessToken
  })
  this.map.addLayer(osmStreet)
}

Map.prototype.addMarker = function () {
  if (this.markerLat !== null && this.markerLng !== null) {
    var icon = L.icon({
      iconUrl: '../../assets/images/contact/map-marker.svg',
      iconSize: [48, 48],
      iconAnchor: [24, 48]
    })
    L.marker([this.markerLat, this.markerLng], { icon: icon }).addTo(this.map)
  }
}

Map.prototype.init = function () {
  // Check for module
  if (!this.$module) {
    return
  }

  this.initLeaflet()
  this.setBounds()
  this.initMapboxTiles()
  this.addMarker()
}

export default Map
