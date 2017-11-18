/***********************
 *	Project		: ArcGisWebDev
 *	Author		: Todd Mullen
 *	Document	: MapServices.js
 *	Created		: Nov 16, 2017, 9:05:31 PM
 *	Description	:
 *      Controls
 ***********************/

/* global uris */

define([
	"esri/layers/FeatureLayer"
	,"esri/renderers/SimpleRenderer"
	,"utils/symbolUtil"
	,"utils/uris"//imports the uris object
], function( FeatureLayer, SimpleRenderer, symbolUtil ){
	console.log("MapServices()", uris );

	return {
		loadServices: _loadServices
	};

	function _loadServices( config ){
		var layers = []
		,censusLayer = new FeatureLayer( uris.censusLayer(), {
			id: "Census"
		})
		,requestLayer = new FeatureLayer( uris.requestLayer(), {
			id: "Requests"
			,mode: FeatureLayer.MODE_ONDEMAND
			,outfields: ["*"]
		})
		,renderer = new SimpleRenderer( symbolUtil.renderSymbol() )
		;

		censusLayer.setRenderer( renderer );

		layers.push( censusLayer );
		layers.push( requestLayer );

		return layers;
	};

});




