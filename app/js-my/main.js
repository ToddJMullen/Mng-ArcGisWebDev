/***********************
 *	Project		: ArcGisWebDev
 *	Author		: Todd Mullen
 *	Document	: main.js
 *	Created		: Nov 15, 2017, 5:52:39 PM
 *	Description	:
 *      Controls
 ***********************/

require([
	"controllers/AppController"
	,"services/MapServices"
	,"dojo/domReady!"
], function initApp( appCtrl, mapServices ){//on domReady, receives appcontroller as appCtrl
	appCtrl.init({
		elem: "divMap"
		,mapOptions: {
			basemap: "gray"
			,center: [-118.241,34.0542]
			,zoom: 12
		}
		,layers: mapServices.loadServices()
	});
});



