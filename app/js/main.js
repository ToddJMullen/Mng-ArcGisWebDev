/*global require*/
/*jshint laxcomma:true*/
require([
	"esri/config",
  'controllers/appcontroller',
  'services/mapservices',
  'dojo/domReady!'
], function (
	esriConfig
	, appCtrl
	, mapServices
) {
  console.debug('DEBUG - Starting application');

//  esriConfig.defaults.io.proxyUrl = "/PHP/proxy.php";
//  esriConfig.defaults.io.alwaysUseProxy = true;

  appCtrl.init({
//    elem: 'map-div',
    elem: 'divMap',
    mapOptions: {
      basemap: 'gray',
      center: [-118.241,34.0542],
      zoom: 12
    },
    layers: mapServices.loadServices()
  });

});

