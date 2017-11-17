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
	,"widgets/edit/editTools"
], function( MapController, EditTools ){
	function mapLoaded(map){
		console.debug("Map loaded: ", map );
		var editTools = new EditTools({
			map: map
		}, "divMapTools");
	}
	function init(config){
		var mapCtrl = new MapController(config);
		mapCtrl.load().then( mapLoaded );
	}
	return {
		init: init
	};
});



