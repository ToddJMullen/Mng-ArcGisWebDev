/***********************
 *	Project		: ArcGisWebDev
 *	Author		: Todd Mullen
 *	Document	: AppController.js
 *	Created		: Nov 16, 2017, 5:47:42 PM
 *	Description	:
 *      Controls
 ***********************/

define([
	"dojo/_base/array"
	,"controllers/MapController"
	,"widgets/edit/editTools"
	,"esri/toolbars/edit"
	,"esri/dijit/editing/Editor"
	,"esri/dijit/editing/TemplatePicker"
	//DON'T INJECT
//	,"utils/uris"
	,"esri/IdentityManager"
], function( array, MapController
				,EditTools, Edit, Editor
				, TemplatePicker ){

	function mapLoaded(map){
		console.debug("Map loaded: ", map );
		var requestLayer
		,layerAry
		,templatePicker
		;

		requestLayer	= map.getLayer( "Requests" )// uris.ID_LAYER_REQUESTS );

		var layers = array.map( map.layerIds, function(layerId){
			console.log("Layer ID:", layerId );
			return map.getLayer( layerId );
		})


		if( layerAry ){
			layerAry.push( requestLayer );
		}

		templatePicker = new TemplatePicker({
			featureLayers: layerAry
			,rows: "auto"
			,columns: 1
		}, "divTemplate" );
		templatePicker.startup();

	}

	function init(config){
		var mapCtrl = new MapController(config);
		mapCtrl.load().then( function( map ){
//			setTimeout(
				mapLoaded( map );
//			, 1500 );
		});
	}

	return {
		init: init
	};
});



