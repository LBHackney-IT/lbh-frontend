(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{143:function(t,n,l){"use strict";var e=l(0);n.a=function(t){var n=t.children;return Object(e.useEffect)((function(){"undefined"!=typeof window&&l(144).initAll()}),[]),n}},144:function(t,n,l){"use strict";l.r(n),l.d(n,"initAll",(function(){return N})),l.d(n,"Accordion",(function(){return i})),l.d(n,"BackToTop",(function(){return h})),l.d(n,"Button",(function(){return r})),l.d(n,"CharacterCount",(function(){return m})),l.d(n,"Checkboxes",(function(){return u})),l.d(n,"CookieBanner",(function(){return C})),l.d(n,"Details",(function(){return f})),l.d(n,"ErrorSummary",(function(){return j})),l.d(n,"Map",(function(){return A})),l.d(n,"Radios",(function(){return Z})),l.d(n,"Tabs",(function(){return E})),l.d(n,"Collapsible",(function(){return z}));var e=l(151),a=l.n(e),c=l(152),i=l.n(c).a,o=l(160);function s(t){this.$module=t}s.prototype.checkScrollPosition=function(t){var n=window.innerHeight,l=n>480?480:n;window.scrollY>l?t.classList.add("lbh-back-to-top--visible"):t.classList.remove("lbh-back-to-top--visible")},s.prototype.init=function(){if(this.$module){var t=Object(o.a)(this.checkScrollPosition,200),n=this.$module;window.addEventListener("scroll",(function(){t(n)}))}};var h=s,b=l(153),r=l.n(b).a,d=l(154),m=l.n(d).a,_=l(155),u=l.n(_).a,p="seen_cookie_message",k=void 0===window.dropCookie||window.dropCookie;function g(t){this.$module=t,this.$button=this.$module.querySelector('[data-behavior="lbh-cookie-close"]')}g.prototype.checkCookies=function(){for(var t=p+"=",n=document.cookie.split(";"),l=0;l<n.length;l++){for(var e=n[l];" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(t))return e.substring(t.length,e.length)}return null},g.prototype.showCookieBanner=function(){this.$module.style.display="block",this.bindAcceptButton()},g.prototype.bindAcceptButton=function(){var t=this.$module;this.$button.addEventListener("click",(function(){var n=new Date;n.setTime(n.getTime()+31536e6);var l="; expires="+n.toGMTString();k&&(document.cookie=p+"=true"+l+"; path=/"),t.style.display="none"}))},g.prototype.init=function(){return!!this.$module&&("true"!==this.checkCookies()&&void this.showCookieBanner())};var C=g,v=l(156),f=l.n(v).a,w=l(157),j=l.n(w).a;if(window.L=window.L||{},L!=={})var O=L.map,y=L.control,x=L.tileLayer,F=L.icon,M=L.marker;function T(t){this.$module=t,this.moduleId=this.$module.getAttribute("id"),this.accessToken=this.$module.getAttribute("data-access-token"),this.map=null,this.markerLat=this.$module.getAttribute("data-marker-lat")||null,this.markerLng=this.$module.getAttribute("data-marker-lng")||null,this.centreLat=this.$module.getAttribute("data-centre-lat")||this.markerLat||51.549,this.centreLng=this.$module.getAttribute("data-centre-lng")||this.markerLng||-.077928,this.maxZoom=this.$module.getAttribute("data-max-zoom")||19,this.minZoom=this.$module.getAttribute("data-min-zoom")||12,this.initialZoom=this.$module.getAttribute("data-initial-zoom")||15,this.showZoomControl=this.$module.getAttribute("data-show-zoom-control")||!0,this.minLat=this.$module.getAttribute("data-min-lat")||51.491112,this.minLng=this.$module.getAttribute("data-min-lng")||-.275464,this.maxLat=this.$module.getAttribute("data-max-lat")||51.607351,this.maxLng=this.$module.getAttribute("data-max-lng")||.096129}T.prototype.initLeaflet=function(){this.map=O(this.moduleId,{zoomControl:!1,maxZoom:this.maxZoom,minZoom:this.minZoom,center:[this.centreLat,this.centreLng],zoom:this.initialZoom}),this.showZoomControl&&y.zoom({position:"topright"}).addTo(this.map)},T.prototype.setBounds=function(){this.map.setMaxBounds([[this.minLat,this.minLng],[this.maxLat,this.maxLng]])},T.prototype.initMapboxTiles=function(){var t=x("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",{fadeAnimation:!1,opacity:1,attribution:'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery \xa9 <a href="https://mapbox.com">Mapbox</a>',maxZoom:this.maxZoom,id:"mapbox.streets",accessToken:this.accessToken});this.map.addLayer(t)},T.prototype.addMarker=function(){if(null!==this.markerLat&&null!==this.markerLng){var t=F({iconUrl:"../../../assets/images/contact/map-marker.svg",iconSize:[48,48],iconAnchor:[24,48]});M([this.markerLat,this.markerLng],{icon:t}).addTo(this.map)}},T.prototype.init=function(){this.$module&&L!={}&&(this.initLeaflet(),this.setBounds(),this.initMapboxTiles(),this.addMarker())};var A=T,S=l(158),Z=l.n(S).a,$=l(159),E=l.n($).a;function I(t){this.$module=t}I.prototype.init=function(){var t=this.$module.querySelector('[data-behavior="lbh-collapsible-toggle"]'),n=this.$module.querySelector('[data-behavior="lbh-collapsible-content"]');t.addEventListener("click",(function(){return function(t,n){n.hasAttribute("hidden")?(n.removeAttribute("hidden"),t.setAttribute("aria-expanded",!0)):(n.setAttribute("hidden",""),t.setAttribute("aria-expanded",!1))}(t,n)}))};var z=I;function B(t,n){if(window.NodeList.prototype.forEach)return t.forEach(n);for(var l=0;l<t.length;l++)n.call(window,t[l],l,t)}function N(t){t=void 0!==t?t:{},a.a.initAll();var n=void 0!==t.scope?t.scope:document,l=n.querySelector('[data-module="lbh-cookie-banner"]');l&&new C(l).init(),B(n.querySelectorAll('[data-module="lbh-map"]'),(function(t){new A(t).init()}));var e=n.querySelector('[data-module="lbh-back-to-top"]');e&&new h(e).init(),B(n.querySelectorAll('[data-module="lbh-collapsible"]'),(function(t){new z(t).init()}))}},81:function(t,n,l){"use strict";l.r(n),l.d(n,"frontMatter",(function(){return o})),l.d(n,"metadata",(function(){return s})),l.d(n,"toc",(function(){return h})),l.d(n,"default",(function(){return r}));var e=l(3),a=l(7),c=(l(0),l(138)),i=l(143),o={title:"Contact block"},s={unversionedId:"components/contacts-block",id:"components/contacts-block",isDocsHomePage:!1,title:"Contact block",description:"With a map",source:"@site/docs/components/contacts-block.md",slug:"/components/contacts-block",permalink:"/components/contacts-block",editUrl:"https://github.com/LBHackney-IT/lbh-frontend/edit/main/docs/components/contacts-block.md",version:"current",sidebar:"someSidebar",previous:{title:"Button",permalink:"/components/button"},next:{title:"Conversation",permalink:"/components/conversation"}},h=[{value:"With a map",id:"with-a-map",children:[{value:"Include Leaflet Sass and JS",id:"include-leaflet-sass-and-js",children:[]},{value:"HTML",id:"html",children:[]}]},{value:"Without a map",id:"without-a-map",children:[{value:"HTML",id:"html-1",children:[]}]}],b={toc:h};function r(t){var n=t.components,l=Object(a.a)(t,["components"]);return Object(c.b)("wrapper",Object(e.a)({},b,l,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"with-a-map"},"With a map"),Object(c.b)(i.a,{mdxType:"InitAll"},Object(c.b)("section",{class:"lbh-contact"},Object(c.b)("h2",{class:"lbh-heading-large-light lbh-contact__title"},"Service Name Centre"),Object(c.b)("div",{class:"lbh-contact__social"},Object(c.b)("h4",{class:"lbh-heading-h4 lbh-contact__social-title"},"Follow us on:"),Object(c.b)("a",{class:"lbh-contact__social-link lbh-contact__social-link--twitter",href:"https://twitter.com/hackneycouncil?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",title:"Follow us on Twitter",target:"_blank"},Object(c.b)("span",{class:"lbh-contact__social-link-text"},"Twitter"),Object(c.b)("span",{class:"lbh-contact__social-link-icon"},Object(c.b)("svg",{width:"30px",height:"30px",viewBox:"0 0 30 30",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},Object(c.b)("title",null,"Twitter"),Object(c.b)("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},Object(c.b)("rect",{class:"lbh-contact__fill",x:"0",y:"0",width:"30",height:"30",rx:"4"}),Object(c.b)("path",{d:"M25,8.9372028 C24.25625,9.26573427 23.46375,9.4834965 22.6375,9.58923077 C23.4875,9.07818182 24.13625,8.2751049 24.44125,7.30713287 C23.64875,7.78293706 22.77375,8.11902098 21.84125,8.30657343 C21.08875,7.49972028 20.01625,7 18.84625,7 C16.57625,7 14.74875,8.85538462 14.74875,11.1299301 C14.74875,11.4572028 14.77625,11.7718881 14.84375,12.0714685 C11.435,11.9040559 8.41875,10.2588811 6.3925,7.75272727 C6.03875,8.37076923 5.83125,9.07818182 5.83125,9.83972028 C5.83125,11.2696503 6.5625,12.5372028 7.6525,13.271049 C6.99375,13.2584615 6.3475,13.0658741 5.8,12.7625175 C5.8,12.7751049 5.8,12.7914685 5.8,12.8078322 C5.8,14.8142657 7.22125,16.4808392 9.085,16.8647552 C8.75125,16.9566434 8.3875,17.0006993 8.01,17.0006993 C7.7475,17.0006993 7.4825,16.9855944 7.23375,16.9302098 C7.765,18.5653147 9.2725,19.7674126 11.065,19.8064336 C9.67,20.9053147 7.89875,21.5674126 5.98125,21.5674126 C5.645,21.5674126 5.3225,21.5523077 5,21.5107692 C6.81625,22.6902098 8.96875,23.3636364 11.29,23.3636364 C18.835,23.3636364 22.96,17.0699301 22.96,11.6145455 C22.96,11.432028 22.95375,11.2558042 22.945,11.0808392 C23.75875,10.4993007 24.4425,9.77300699 25,8.9372028 Z",fill:"#FFFFFF","fill-rule":"nonzero"}))))),Object(c.b)("a",{class:"lbh-contact__social-link lbh-contact__social-link--facebook",href:"https://en-gb.facebook.com/hackneycouncil/",title:"Follow us on Facebook",target:"_blank"},Object(c.b)("span",{class:"lbh-contact__social-link-text"},"Facebook"),Object(c.b)("span",{class:"lbh-contact__social-link-icon"},Object(c.b)("svg",{width:"30px",height:"30px",viewBox:"0 0 30 30",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},Object(c.b)("title",null,"Facebook"),Object(c.b)("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},Object(c.b)("rect",{class:"lbh-contact__fill",x:"0",y:"0",width:"30",height:"30",rx:"4"}),Object(c.b)("path",{d:"M20.554729,5.00416133 L17.9240664,5 C14.9686072,5 13.0586597,6.93189975 13.0586597,9.92202699 L13.0586597,12.191411 L10.4136461,12.191411 C10.1850855,12.191411 10,12.3740936 10,12.5994299 L10,15.8875087 C10,16.112845 10.1852966,16.2953195 10.4136461,16.2953195 L13.0586597,16.2953195 L13.0586597,24.5921892 C13.0586597,24.8175255 13.2437452,25 13.4723058,25 L16.9232961,25 C17.1518567,25 17.3369422,24.8173174 17.3369422,24.5921892 L17.3369422,16.2953195 L19.9310462,16.2953195 C20.1596068,16.2953195 20.3446923,16.112845 20.3446923,15.8875087 L20.8444923,12.5994299 C20.8444923,12.4912352 20.8008062,12.3876179 20.7233531,12.3110494 C20.6458999,12.2344808 20.540378,12.191411 20.4306351,12.191411 L17.3369422,12.191411 L17.3369422,10.2676259 C17.3369422,9.34297723 17.5604377,8.87357864 18.782171,8.87357864 L20.5543069,8.87295444 C20.7826564,8.87295444 20.9677419,8.69027184 20.9677419,8.46514362 L20.9677419,5.41197216 C20.9677419,5.18705201 20.7828675,5.00457747 20.554729,5.00416133 Z",fill:"#FFFFFF","fill-rule":"nonzero"}))))),Object(c.b)("a",{class:"lbh-contact__social-link lbh-contact__social-link--youtube",href:"https://www.youtube.com/user/hackneycouncil",title:"Follow us on YouTube",target:"_blank"},Object(c.b)("span",{class:"lbh-contact__social-link-text"},"YouTube"),Object(c.b)("span",{class:"lbh-contact__social-link-icon"},Object(c.b)("svg",{width:"30px",height:"30px",viewBox:"0 0 30 30",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},Object(c.b)("title",null,"Youtube"),Object(c.b)("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},Object(c.b)("path",{class:"lbh-contact__fill",d:"M12.5089286,11.390625 L18.8839286,15.0133929 L12.5089286,18.6361607 L12.5089286,11.390625 Z M30,3.21428571 L30,26.7857143 C30,28.5602679 28.5602679,30 26.7857143,30 L3.21428571,30 C1.43973214,30 0,28.5602679 0,26.7857143 L0,3.21428571 C0,1.43973214 1.43973214,0 3.21428571,0 L26.7857143,0 C28.5602679,0 30,1.43973214 30,3.21428571 Z M27.1875,15.0200893 C27.1875,15.0200893 27.1875,11.0290179 26.6785714,9.11383929 C26.3973214,8.05580357 25.5736607,7.22544643 24.5223214,6.94419643 C22.6272321,6.42857143 15,6.42857143 15,6.42857143 C15,6.42857143 7.37276786,6.42857143 5.47767857,6.94419643 C4.42633929,7.22544643 3.60267857,8.05580357 3.32142857,9.11383929 C2.8125,11.0223214 2.8125,15.0200893 2.8125,15.0200893 C2.8125,15.0200893 2.8125,19.0111607 3.32142857,20.9263393 C3.60267857,21.984375 4.42633929,22.78125 5.47767857,23.0625 C7.37276786,23.5714286 15,23.5714286 15,23.5714286 C15,23.5714286 22.6272321,23.5714286 24.5223214,23.0558036 C25.5736607,22.7745536 26.3973214,21.9776786 26.6785714,20.9196429 C27.1875,19.0111607 27.1875,15.0200893 27.1875,15.0200893 L27.1875,15.0200893 Z","fill-rule":"nonzero"}))))),Object(c.b)("a",{class:"lbh-contact__social-link lbh-contact__social-link--instagram",href:"https://www.instagram.com/hackneycouncil/?hl=en",title:"Follow us on Instagram",target:"_blank"},Object(c.b)("span",{class:"lbh-contact__social-link-text"},"Instagram"),Object(c.b)("span",{class:"lbh-contact__social-link-icon"},Object(c.b)("svg",{width:"30px",height:"30px",viewBox:"0 0 30 30",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},Object(c.b)("title",null,"Instagram"),Object(c.b)("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},Object(c.b)("rect",{class:"lbh-contact__fill",x:"0",y:"0",width:"30",height:"30",rx:"4"}),Object(c.b)("path",{d:"M19.0418922,5 L10.9581078,5 C7.67279333,5 5,7.67279333 5,10.9581078 L5,19.0418922 C5,22.3272067 7.67279333,25 10.9581078,25 L19.0418922,25 C22.3272067,25 25,22.3272067 25,19.0418922 L25,10.9581078 C25,7.67279333 22.3271704,5 19.0418922,5 Z M22.9880007,19.0418922 C22.9880007,21.2212495 21.2212495,22.9880007 19.0418922,22.9880007 L10.9581078,22.9880007 C8.77875049,22.9880007 7.01199926,21.2212495 7.01199926,19.0418922 L7.01199926,10.9581078 C7.01199926,8.7787142 8.77875049,7.01199926 10.9581078,7.01199926 L19.0418922,7.01199926 C21.2212495,7.01199926 22.9880007,8.7787142 22.9880007,10.9581078 L22.9880007,19.0418922 L22.9880007,19.0418922 Z M15,9.84848485 C12.15945,9.84848485 9.84848485,12.1594581 9.84848485,14.9999819 C9.84848485,17.8405058 12.15945,20.1515152 15,20.1515152 C17.84055,20.1515152 20.1515152,17.8405419 20.1515152,14.9999819 C20.1515152,12.1594219 17.84055,9.84848485 15,9.84848485 Z M15,18.1477897 C13.2615258,18.1477897 11.8522394,16.7384983 11.8522394,15.0000181 C11.8522394,13.2615378 13.261562,11.8522465 15,11.8522465 C16.7384742,11.8522465 18.1477606,13.2615378 18.1477606,15.0000181 C18.1477606,16.7384622 16.738438,18.1477897 15,18.1477897 Z M20.1515152,11.6666667 C19.4820791,11.6666667 18.9393939,11.1239815 18.9393939,10.4545455 C18.9393939,9.78510939 19.4820791,9.24242424 20.1515152,9.24242424 C20.8209512,9.24242424 21.3636364,9.78510939 21.3636364,10.4545455 C21.3636364,11.1239815 20.8209512,11.6666667 20.1515152,11.6666667 Z",fill:"#FFFFFF","fill-rule":"nonzero"})))))),Object(c.b)("div",{class:"lbh-contact__details"},Object(c.b)("div",{class:"lbh-contact__block"},Object(c.b)("h4",{class:"lbh-heading-h4 lbh-contact__block-title lbh-contact__block-title--address"},"Address"),Object(c.b)("div",{class:"lbh-contact__address"},Object(c.b)("span",null,"Service Centre"),Object(c.b)("span",null,"1 Hillman Street"),Object(c.b)("span",null,"E8 1DY"))),Object(c.b)("div",{class:"lbh-contact__block"},Object(c.b)("h4",{class:"lbh-heading-h4 lbh-contact__block-title lbh-contact__block-title--telephone"},"Telephone"),Object(c.b)("ul",{class:"lbh-contact__list"},Object(c.b)("li",{class:"lbh-contact__list-item"},Object(c.b)("a",{href:"tel:020 8356 3000",class:"lbh-contact__telephone",title:"Call us on 020 8356 3000"},"020 8356 3000")),Object(c.b)("li",{class:"lbh-contact__list-item"},Object(c.b)("a",{href:"tel:020 8356 3736",class:"lbh-contact__telephone",title:"Call us on 020 8356 3736"},"020 8356 3736")))),Object(c.b)("div",{class:"lbh-contact__block"},Object(c.b)("h4",{class:"lbh-heading-h4 lbh-contact__block-title lbh-contact__block-title--email"},"Email"),Object(c.b)("ul",{class:"lbh-contact__list"},Object(c.b)("li",{class:"lbh-contact__list-item"},Object(c.b)("a",{href:"mailto:iamanemail@hackney.gov.uk",class:"lbh-contact__email",title:"Email us on iamanemail@hackney.gov.uk"},"iamanemail@hackney.gov.uk")),Object(c.b)("li",{class:"lbh-contact__list-item"},Object(c.b)("a",{href:"mailto:iamanemail@hackney.gov.uk",class:"lbh-contact__email",title:"Email us on iamanemail@hackney.gov.uk"},"iamanemail@hackney.gov.uk")))),Object(c.b)("div",{class:"lbh-contact__block"},Object(c.b)("h4",{class:"lbh-heading-h4 lbh-contact__block-title lbh-contact__block-title--opening-times"},"Opening times"),Object(c.b)("ul",{class:"lbh-contact__list"},Object(c.b)("li",{class:"lbh-contact__list-item"},"Monday: Closed"),Object(c.b)("li",{class:"lbh-contact__list-item"},"Tuesday: 9:30am - 5:30pm"),Object(c.b)("li",{class:"lbh-contact__list-item"},"Wednesday: 9:30am - 5:30pm"),Object(c.b)("li",{class:"lbh-contact__list-item"},"Thursday: 9:30am - 8:00pm"),Object(c.b)("li",{class:"lbh-contact__list-item"},"Friday: 9:30am - 5:30pm"),Object(c.b)("li",{class:"lbh-contact__list-item"},"Saturday: 10:00am - 5:30pm"),Object(c.b)("li",{class:"lbh-contact__list-item"},"Sunday: Closed"))),Object(c.b)("div",{class:"lbh-contact__block"},Object(c.b)("h4",{class:"lbh-heading-h4 lbh-contact__block-title lbh-contact__block-title--notes"},"Notes"),Object(c.b)("ul",{class:"lbh-contact__list"},Object(c.b)("li",{class:"lbh-contact__list-item"},"Visitor centre open daily 10am-3pm except public holidays.")))),Object(c.b)("div",{class:"lbh-contact__map-container"},Object(c.b)("div",{class:"lbh-contact__map",id:"map","data-module":"lbh-map","data-access-token":"pk.eyJ1IjoibGJoZWxld2lzIiwiYSI6ImNqeXJkN25uNjA5M3Uzb251bWVyejJ3YW8ifQ.uzO8I54w64U6QkNknW32FA","data-marker-lat":"51.545386","data-marker-lng":"-0.057069"}),Object(c.b)("div",{class:"lbh-contact__directions"},Object(c.b)("a",{href:"https://goo.gl/maps/YHtCx2nqP2o57BZi6",class:"lbh-link",rel:"external",title:"View directions on Google Maps"},"Get directions"))))),Object(c.b)("h3",{id:"include-leaflet-sass-and-js"},"Include Leaflet Sass and JS"),Object(c.b)("p",null,"Maps in the contact block require ",Object(c.b)("a",{parentName:"p",href:"https://leafletjs.com"},"Leaflet"),", which you can install with ",Object(c.b)("inlineCode",{parentName:"p"},"npm leaflet")," and then add the Sass and JavaScript to your app:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'import L from "leaflet"\n')),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-scss"},'@import "../node_modules/leaflet/dist/leaflet.css";\n')),Object(c.b)("h3",{id:"html"},"HTML"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-html"},'<section class="lbh-contact">\n  <h2 class="lbh-heading-large-light lbh-contact__title">\n    Service Name Centre\n  </h2>\n  <div class="lbh-contact__social">\n    <h4 class="lbh-heading-h4 lbh-contact__social-title">Follow us on:</h4>\n    <a\n      class="lbh-contact__social-link lbh-contact__social-link--twitter"\n      href="https://twitter.com/hackneycouncil?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"\n      title="Follow us on Twitter"\n      target="_blank"\n    >\n      <span class="lbh-contact__social-link-text">Twitter</span>\n      <span class="lbh-contact__social-link-icon">\n        <svg\n          width="30px"\n          height="30px"\n          viewBox="0 0 30 30"\n          version="1.1"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <title>Twitter</title>\n          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n            <rect\n              class="lbh-contact__fill"\n              x="0"\n              y="0"\n              width="30"\n              height="30"\n              rx="4"\n            ></rect>\n            <path\n              d="M25,8.9372028 C24.25625,9.26573427 23.46375,9.4834965 22.6375,9.58923077 C23.4875,9.07818182 24.13625,8.2751049 24.44125,7.30713287 C23.64875,7.78293706 22.77375,8.11902098 21.84125,8.30657343 C21.08875,7.49972028 20.01625,7 18.84625,7 C16.57625,7 14.74875,8.85538462 14.74875,11.1299301 C14.74875,11.4572028 14.77625,11.7718881 14.84375,12.0714685 C11.435,11.9040559 8.41875,10.2588811 6.3925,7.75272727 C6.03875,8.37076923 5.83125,9.07818182 5.83125,9.83972028 C5.83125,11.2696503 6.5625,12.5372028 7.6525,13.271049 C6.99375,13.2584615 6.3475,13.0658741 5.8,12.7625175 C5.8,12.7751049 5.8,12.7914685 5.8,12.8078322 C5.8,14.8142657 7.22125,16.4808392 9.085,16.8647552 C8.75125,16.9566434 8.3875,17.0006993 8.01,17.0006993 C7.7475,17.0006993 7.4825,16.9855944 7.23375,16.9302098 C7.765,18.5653147 9.2725,19.7674126 11.065,19.8064336 C9.67,20.9053147 7.89875,21.5674126 5.98125,21.5674126 C5.645,21.5674126 5.3225,21.5523077 5,21.5107692 C6.81625,22.6902098 8.96875,23.3636364 11.29,23.3636364 C18.835,23.3636364 22.96,17.0699301 22.96,11.6145455 C22.96,11.432028 22.95375,11.2558042 22.945,11.0808392 C23.75875,10.4993007 24.4425,9.77300699 25,8.9372028 Z"\n              fill="#FFFFFF"\n              fill-rule="nonzero"\n            ></path>\n          </g>\n        </svg>\n      </span>\n    </a>\n    <a\n      class="lbh-contact__social-link lbh-contact__social-link--facebook"\n      href="https://en-gb.facebook.com/hackneycouncil/"\n      title="Follow us on Facebook"\n      target="_blank"\n    >\n      <span class="lbh-contact__social-link-text">Facebook</span>\n      <span class="lbh-contact__social-link-icon">\n        <svg\n          width="30px"\n          height="30px"\n          viewBox="0 0 30 30"\n          version="1.1"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <title>Facebook</title>\n          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n            <rect\n              class="lbh-contact__fill"\n              x="0"\n              y="0"\n              width="30"\n              height="30"\n              rx="4"\n            ></rect>\n            <path\n              d="M20.554729,5.00416133 L17.9240664,5 C14.9686072,5 13.0586597,6.93189975 13.0586597,9.92202699 L13.0586597,12.191411 L10.4136461,12.191411 C10.1850855,12.191411 10,12.3740936 10,12.5994299 L10,15.8875087 C10,16.112845 10.1852966,16.2953195 10.4136461,16.2953195 L13.0586597,16.2953195 L13.0586597,24.5921892 C13.0586597,24.8175255 13.2437452,25 13.4723058,25 L16.9232961,25 C17.1518567,25 17.3369422,24.8173174 17.3369422,24.5921892 L17.3369422,16.2953195 L19.9310462,16.2953195 C20.1596068,16.2953195 20.3446923,16.112845 20.3446923,15.8875087 L20.8444923,12.5994299 C20.8444923,12.4912352 20.8008062,12.3876179 20.7233531,12.3110494 C20.6458999,12.2344808 20.540378,12.191411 20.4306351,12.191411 L17.3369422,12.191411 L17.3369422,10.2676259 C17.3369422,9.34297723 17.5604377,8.87357864 18.782171,8.87357864 L20.5543069,8.87295444 C20.7826564,8.87295444 20.9677419,8.69027184 20.9677419,8.46514362 L20.9677419,5.41197216 C20.9677419,5.18705201 20.7828675,5.00457747 20.554729,5.00416133 Z"\n              fill="#FFFFFF"\n              fill-rule="nonzero"\n            ></path>\n          </g>\n        </svg>\n      </span>\n    </a>\n    <a\n      class="lbh-contact__social-link lbh-contact__social-link--youtube"\n      href="https://www.youtube.com/user/hackneycouncil"\n      title="Follow us on YouTube"\n      target="_blank"\n    >\n      <span class="lbh-contact__social-link-text">YouTube</span>\n      <span class="lbh-contact__social-link-icon">\n        <svg\n          width="30px"\n          height="30px"\n          viewBox="0 0 30 30"\n          version="1.1"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <title>Youtube</title>\n          <g stroke="none" stroke-width="1" fill-rule="evenodd">\n            <path\n              class="lbh-contact__fill"\n              d="M12.5089286,11.390625 L18.8839286,15.0133929 L12.5089286,18.6361607 L12.5089286,11.390625 Z M30,3.21428571 L30,26.7857143 C30,28.5602679 28.5602679,30 26.7857143,30 L3.21428571,30 C1.43973214,30 0,28.5602679 0,26.7857143 L0,3.21428571 C0,1.43973214 1.43973214,0 3.21428571,0 L26.7857143,0 C28.5602679,0 30,1.43973214 30,3.21428571 Z M27.1875,15.0200893 C27.1875,15.0200893 27.1875,11.0290179 26.6785714,9.11383929 C26.3973214,8.05580357 25.5736607,7.22544643 24.5223214,6.94419643 C22.6272321,6.42857143 15,6.42857143 15,6.42857143 C15,6.42857143 7.37276786,6.42857143 5.47767857,6.94419643 C4.42633929,7.22544643 3.60267857,8.05580357 3.32142857,9.11383929 C2.8125,11.0223214 2.8125,15.0200893 2.8125,15.0200893 C2.8125,15.0200893 2.8125,19.0111607 3.32142857,20.9263393 C3.60267857,21.984375 4.42633929,22.78125 5.47767857,23.0625 C7.37276786,23.5714286 15,23.5714286 15,23.5714286 C15,23.5714286 22.6272321,23.5714286 24.5223214,23.0558036 C25.5736607,22.7745536 26.3973214,21.9776786 26.6785714,20.9196429 C27.1875,19.0111607 27.1875,15.0200893 27.1875,15.0200893 L27.1875,15.0200893 Z"\n              fill-rule="nonzero"\n            ></path>\n          </g>\n        </svg>\n      </span>\n    </a>\n    <a\n      class="lbh-contact__social-link lbh-contact__social-link--instagram"\n      href="https://www.instagram.com/hackneycouncil/?hl=en"\n      title="Follow us on Instagram"\n      target="_blank"\n    >\n      <span class="lbh-contact__social-link-text">Instagram</span>\n      <span class="lbh-contact__social-link-icon">\n        <svg\n          width="30px"\n          height="30px"\n          viewBox="0 0 30 30"\n          version="1.1"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <title>Instagram</title>\n          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n            <rect\n              class="lbh-contact__fill"\n              x="0"\n              y="0"\n              width="30"\n              height="30"\n              rx="4"\n            ></rect>\n            <path\n              d="M19.0418922,5 L10.9581078,5 C7.67279333,5 5,7.67279333 5,10.9581078 L5,19.0418922 C5,22.3272067 7.67279333,25 10.9581078,25 L19.0418922,25 C22.3272067,25 25,22.3272067 25,19.0418922 L25,10.9581078 C25,7.67279333 22.3271704,5 19.0418922,5 Z M22.9880007,19.0418922 C22.9880007,21.2212495 21.2212495,22.9880007 19.0418922,22.9880007 L10.9581078,22.9880007 C8.77875049,22.9880007 7.01199926,21.2212495 7.01199926,19.0418922 L7.01199926,10.9581078 C7.01199926,8.7787142 8.77875049,7.01199926 10.9581078,7.01199926 L19.0418922,7.01199926 C21.2212495,7.01199926 22.9880007,8.7787142 22.9880007,10.9581078 L22.9880007,19.0418922 L22.9880007,19.0418922 Z M15,9.84848485 C12.15945,9.84848485 9.84848485,12.1594581 9.84848485,14.9999819 C9.84848485,17.8405058 12.15945,20.1515152 15,20.1515152 C17.84055,20.1515152 20.1515152,17.8405419 20.1515152,14.9999819 C20.1515152,12.1594219 17.84055,9.84848485 15,9.84848485 Z M15,18.1477897 C13.2615258,18.1477897 11.8522394,16.7384983 11.8522394,15.0000181 C11.8522394,13.2615378 13.261562,11.8522465 15,11.8522465 C16.7384742,11.8522465 18.1477606,13.2615378 18.1477606,15.0000181 C18.1477606,16.7384622 16.738438,18.1477897 15,18.1477897 Z M20.1515152,11.6666667 C19.4820791,11.6666667 18.9393939,11.1239815 18.9393939,10.4545455 C18.9393939,9.78510939 19.4820791,9.24242424 20.1515152,9.24242424 C20.8209512,9.24242424 21.3636364,9.78510939 21.3636364,10.4545455 C21.3636364,11.1239815 20.8209512,11.6666667 20.1515152,11.6666667 Z"\n              fill="#FFFFFF"\n              fill-rule="nonzero"\n            ></path>\n          </g>\n        </svg>\n      </span>\n    </a>\n  </div>\n  <div class="lbh-contact__details">\n    <div class="lbh-contact__block">\n      <h4\n        class="lbh-heading-h4 lbh-contact__block-title lbh-contact__block-title--address"\n      >\n        Address\n      </h4>\n      <div class="lbh-contact__address">\n        <span>Service Centre</span><span>1 Hillman Street</span\n        ><span>E8 1DY</span>\n      </div>\n    </div>\n    <div class="lbh-contact__block">\n      <h4\n        class="lbh-heading-h4 lbh-contact__block-title lbh-contact__block-title--telephone"\n      >\n        Telephone\n      </h4>\n      <ul class="lbh-contact__list">\n        <li class="lbh-contact__list-item">\n          <a\n            href="tel:020 8356 3000"\n            class="lbh-contact__telephone"\n            title="Call us on 020 8356 3000"\n            >020 8356 3000</a\n          >\n        </li>\n        <li class="lbh-contact__list-item">\n          <a\n            href="tel:020 8356 3736"\n            class="lbh-contact__telephone"\n            title="Call us on 020 8356 3736"\n            >020 8356 3736</a\n          >\n        </li>\n      </ul>\n    </div>\n    <div class="lbh-contact__block">\n      <h4\n        class="lbh-heading-h4 lbh-contact__block-title lbh-contact__block-title--email"\n      >\n        Email\n      </h4>\n      <ul class="lbh-contact__list">\n        <li class="lbh-contact__list-item">\n          <a\n            href="mailto:iamanemail@hackney.gov.uk"\n            class="lbh-contact__email"\n            title="Email us on iamanemail@hackney.gov.uk"\n            >iamanemail@hackney.gov.uk</a\n          >\n        </li>\n        <li class="lbh-contact__list-item">\n          <a\n            href="mailto:iamanemail@hackney.gov.uk"\n            class="lbh-contact__email"\n            title="Email us on iamanemail@hackney.gov.uk"\n            >iamanemail@hackney.gov.uk</a\n          >\n        </li>\n      </ul>\n    </div>\n    <div class="lbh-contact__block">\n      <h4\n        class="lbh-heading-h4 lbh-contact__block-title lbh-contact__block-title--opening-times"\n      >\n        Opening times\n      </h4>\n      <ul class="lbh-contact__list">\n        <li class="lbh-contact__list-item">Monday: Closed</li>\n        <li class="lbh-contact__list-item">Tuesday: 9:30am - 5:30pm</li>\n        <li class="lbh-contact__list-item">Wednesday: 9:30am - 5:30pm</li>\n        <li class="lbh-contact__list-item">Thursday: 9:30am - 8:00pm</li>\n        <li class="lbh-contact__list-item">Friday: 9:30am - 5:30pm</li>\n        <li class="lbh-contact__list-item">Saturday: 10:00am - 5:30pm</li>\n        <li class="lbh-contact__list-item">Sunday: Closed</li>\n      </ul>\n    </div>\n    <div class="lbh-contact__block">\n      <h4\n        class="lbh-heading-h4 lbh-contact__block-title lbh-contact__block-title--notes"\n      >\n        Notes\n      </h4>\n      <ul class="lbh-contact__list">\n        <li class="lbh-contact__list-item">\n          Visitor centre open daily 10am-3pm except public holidays.\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class="lbh-contact__map-container">\n    <div\n      class="lbh-contact__map"\n      id="map"\n      data-module="lbh-map"\n      data-access-token="pk.eyJ1IjoibGJoZWxld2lzIiwiYSI6ImNqeXJkN25uNjA5M3Uzb251bWVyejJ3YW8ifQ.uzO8I54w64U6QkNknW32FA"\n      data-marker-lat="51.545386"\n      data-marker-lng="-0.057069"\n    ></div>\n    <div class="lbh-contact__directions">\n      <a\n        href="https://goo.gl/maps/YHtCx2nqP2o57BZi6"\n        class="lbh-link"\n        rel="external"\n        title="View directions on Google Maps"\n        >Get directions</a\n      >\n    </div>\n  </div>\n</section>\n')),Object(c.b)("h2",{id:"without-a-map"},"Without a map"),Object(c.b)("section",{class:"lbh-contact"},Object(c.b)("h2",{class:"lbh-heading-large-light lbh-contact__title"},"Service Centre"),Object(c.b)("div",{class:"lbh-contact__details"},Object(c.b)("div",{class:"lbh-contact__block"},Object(c.b)("h4",{class:"lbh-heading-h4 lbh-contact__block-title lbh-contact__block-title--telephone"},"Telephone"),Object(c.b)("a",{href:"tel:",class:"lbh-contact__telephone",title:"Call us on"})),Object(c.b)("div",{class:"lbh-contact__block"},Object(c.b)("h4",{class:"lbh-heading-h4 lbh-contact__block-title lbh-contact__block-title--email"},"Email"),Object(c.b)("a",{href:"mailto:RepairsRCC@hackney.gov.uk",class:"lbh-contact__email",title:"Email us on RepairsRCC@hackney.gov.uk"},"RepairsRCC@hackney.gov.uk")),Object(c.b)("div",{class:"lbh-contact__block"},Object(c.b)("h4",{class:"lbh-heading-h4 lbh-contact__block-title lbh-contact__block-title--opening-times"},"Opening times"),Object(c.b)("ul",{class:"lbh-contact__list"},Object(c.b)("li",{class:"lbh-contact__list-item"},"Mon to Fri 8am - 7pm"),Object(c.b)("li",{class:"lbh-contact__list-item"},"Sat 9am - 1pm"))))),Object(c.b)("h3",{id:"html-1"},"HTML"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-html"},'<section class="lbh-contact">\n  <h2 class="lbh-heading-large-light lbh-contact__title">Service Centre</h2>\n  <div class="lbh-contact__details">\n    <div class="lbh-contact__block">\n      <h4\n        class="lbh-heading-h4 lbh-contact__block-title lbh-contact__block-title--telephone"\n      >\n        Telephone\n      </h4>\n      <a href="tel:" class="lbh-contact__telephone" title="Call us on"></a>\n    </div>\n    <div class="lbh-contact__block">\n      <h4\n        class="lbh-heading-h4 lbh-contact__block-title lbh-contact__block-title--email"\n      >\n        Email\n      </h4>\n      <a\n        href="mailto:RepairsRCC@hackney.gov.uk"\n        class="lbh-contact__email"\n        title="Email us on RepairsRCC@hackney.gov.uk"\n        >RepairsRCC@hackney.gov.uk</a\n      >\n    </div>\n    <div class="lbh-contact__block">\n      <h4\n        class="lbh-heading-h4 lbh-contact__block-title lbh-contact__block-title--opening-times"\n      >\n        Opening times\n      </h4>\n      <ul class="lbh-contact__list">\n        <li class="lbh-contact__list-item">Mon to Fri 8am - 7pm</li>\n        <li class="lbh-contact__list-item">Sat 9am - 1pm</li>\n      </ul>\n    </div>\n  </div>\n</section>\n``\n')))}r.isMDXComponent=!0}}]);