/***********************
 *	Project		: ArcGisWebDev
 *	Author		: Todd Mullen
 *	Document	: AppController.js
 *	Created		: Nov 16, 2017, 5:47:42 PM
 *	Description	:
 *      Controls
 ***********************/

define([
	"controllers/MapController"
], function( MapController ){
	function mapLoaded(map){
		console.debug("Map loaded: ", map );

	}
	function init(config){
		var mapCtrl = new MapController(config);
		mapCtrl.load().then( mapLoaded );
	}
	return {
		init: init
	};
});



