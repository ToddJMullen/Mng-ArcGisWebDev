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
	console.log("MapServices()" );


//	var URI_REQUEST = "https://services8.arcgis.com/2DOAwaw9Q8PTaNsT/arcgis/rest/services/tjm_arcgis_web_dev/FeatureServer/0"
//	,URI_CENSUS		= "http://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/CensusLaborDemo/FeatureServer/1"
//	;

	function _loadServices( config ){
		var layers = []
		,censusLayer = new FeatureLayer( uris.censusLayer(), {
			id: "Census"
//				uris.ID_LAYER_CENSUS
		})
		,requestLayer = new FeatureLayer( uris.requestLayer(), {
			id: "Requests"
//				uris.ID_LAYER_REQUESTS
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

	return {
		loadServices: _loadServices
	};

});




