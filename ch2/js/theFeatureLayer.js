/***********************
 *	Project		: ArcGisWebDev
 *	Author		: Todd Mullen
 *	Document	: theFeatureLayer.js
 *	Created		: Nov 12, 2017, 7:37:04 PM
 *	Description	:
 *      Controls
 ***********************/

require([
	"dojo/dom"
	,"dojo/on"
	,"esri/map"
	,"esri/layers/FeatureLayer"
], buildFeatureLayerMap );

function buildFeatureLayerMap(
	dom, on, Map, FeatureLayer
){
	console.log("buildFeatureLayerMap()");
	var theMap = new Map("divMap", {
		basemap		: "streets"
		,autoResize	: true
		,center		: [-118.2095, 34.0866]
		,zoom		: 10
	})
	,selPopulation	= dom.byId("selPopulation")
	,featureLayer	= new FeatureLayer('http://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/la_county_labor_centroid/FeatureServer/0')
	;

	theMap.addLayer( featureLayer );

	on( selPopulation, "change", filterFeatureLayer );

	function filterFeatureLayer(e){
		console.log("filterFeatureLayer()");

		var pop		= e.target.valueOf()
		,filterExpr	= "TOTAL_POP > " + pop;
		featureLayer.setDefinitionExpression( filterExpr );

	}//filterFeatureLayer()



}//buildFeatureLayerMap()





