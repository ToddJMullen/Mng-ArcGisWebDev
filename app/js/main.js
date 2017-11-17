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
	,"dojo/domReady!"
], function initApp(appCtrl){//on domReady, receives appcontroller as appCtrl
	appCtrl.init({
		elem: "divMap"
		,mapOptions: {
			basemap: "gray"
			,center: [-118.241,34.0542]
			,zoom: 12
		}
	});
});



