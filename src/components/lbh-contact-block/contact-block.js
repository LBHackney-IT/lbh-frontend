import { Map as LeafletMap } from 'leaflet'
import { TileLayer } from 'leaflet/src/layer/tile'

function Map ($module) {
  this.$module = $module
  this.moduleId = this.$module.getAttribute('id')
  this.accessToken = $module.data('accessToken')
  this.map = null
  this.centreLat = $module.data('centreLat') || 51.5490
  this.centreLng = $module.data('centreLng') || -0.077928
  this.maxZoom = $module.data('maxZoom') || 19
  this.minZoom = $module.data('minZoom') || 12
  this.initialZoom = $module.data('initialZoom') || 13
  this.showZoomControl = $module.data('showZoomControl') || true
}

Map.prototype.initLeaflet = function () {
  this.map = LeafletMap(this.moduleId, {
    zoomControl: this.zoomControl,
    maxZoom: this.maxZoom,
    minZoom: this.minZoom,
    center: [this.centreLat, this.centreLng],
    zoom: this.initialZoom
  })

  // Limit the view to the extend of the map
  this.map.setMaxBounds([[51.491112, -0.275464], [51.607351, 0.096129]]);
}

Map.prototype.initMapboxTiles = function () {
  var osmStreet = TileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    fadeAnimation: false,
    opacity: 1,
    attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://mapbox.com">Mapbox</a>',
    maxZoom: this.maxZoom,
    id: 'mapbox.streets',
    accessToken: this.accessToken
  })
  this.map.addLayer(osmStreet)
}

Map.prototype.init = function () {
  // Check for module
  if (!this.$module) {
    return
  }

  this.initLeaflet()
  this.initMapboxTiles()
}

export default Map
