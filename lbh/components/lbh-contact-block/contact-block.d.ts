class Map {
  $module: HTMLElement;
  moduleId: string;
  accessToken: string;
  markerLat: number | null;
  markerLng: number | null;
  centreLat: number;
  centreLng: number;
  maxZoom: number;
  minZoom: number;
  initialZoom: number;
  showZoomControl: boolean;
  minLat: number;
  maxLat: number;
  maxLng: number;

  constructor($module: HTMLElement);

  init(): void;
  initLeaflet(): void;
  setBounds(): void;
  initMapboxTiles(): void;
  addMarker(): void;
}

export default Map;
