/***********************
 *	Project		: ArcGisWebDev
 *	Author		: Todd Mullen
 *	Document	: MapServices.js
 *	Created		: Nov 16, 2017, 9:05:31 PM
 *	Description	:
 *      Controls
 ***********************/

define([
	"esri/layers/FeatureLayer"
], function(FeatureLayer){

	return {
		loadServices: loadServices
	};

	function loadServices(){
		var layers = []
		,censusLayer
		;
		censusLayer = new FeatureLayer(
			"http://services.arcgis.com/V6ZHFr6zdgNZuVG0/"
			+ "arcgis/rest/services/"
			+ "CensusLaborDemo/FeatureServer/1"
		);

		layers.push( censusLayer );
		return layers;
	};

});




