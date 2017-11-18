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
		loadServices: loadServices
	};

	function loadServices( config ){
		var layers = []
		,censusLayer
		,renderer
		;
		censusLayer = new FeatureLayer(
//			"http://services.arcgis.com/V6ZHFr6zdgNZuVG0/"
//			+ "arcgis/rest/services/"
//			+ "CensusLaborDemo/FeatureServer/1"
			uris.censusLayer()
		);
		renderer	= new SimpleRenderer( symbolUtil.renderSymbol() );
		censusLayer.setRenderer( renderer );

		layers.push( censusLayer );
		return layers;
	};

});




