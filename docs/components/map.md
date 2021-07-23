---
title: Map
---

import InitAll from "../../src/InitAll"

<InitAll>

<section class="lbh-map">
<div class="lbh-map__map-container_full_width">
<div class="lbh-map__map" data-module="lbh-map" data-marker-lat="51.545386" data-marker-lng="-0.057069" uprn="100023014187"></div>
<div class="lbh-map__directions">
<a href="https://goo.gl/maps/YHtCx2nqP2o57BZi6" class="lbh-link" rel="external" title="View directions on Google Maps">Get directions</a>
</div>
</div>
</section>
</InitAll>

### Include Leaflet Sass and JS

Maps in the contact block require [Leaflet](https://leafletjs.com), which you can install with `npm leaflet` and then add the Sass and JavaScript to your app:

```js
import L from "leaflet"
```

```scss
@import "../node_modules/leaflet/dist/leaflet.css";
```
Please email us at gis@hackney.gov.uk to get the OS basemap token and the addresses proxy url for your project. 

### HTML

```html
<section class="lbh-map"> 
  <div class="lbh-map__map-container_full_width">
    <div
      class="lbh-map__map"
      id="map"
      data-module="lbh-map"
      data-marker-lat="51.545386"
      data-marker-lng="-0.057069"
      uprn="100023014187"
    ></div>
    <div class="lbh-map__directions">
      <a
        href="https://goo.gl/maps/YHtCx2nqP2o57BZi6"
        class="lbh-link"
        rel="external"
        title="View directions on Google Maps"
        >Get directions</a
      >
    </div>
  </div>
</section>
```

