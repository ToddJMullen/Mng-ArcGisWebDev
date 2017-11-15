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
	,"esri/toolbars/draw"
	,"esri/tasks/query"
], buildFeatureLayerMap );

function buildFeatureLayerMap(
	dom, on, Map, FeatureLayer, Draw, Query
){
	console.log("buildFeatureLayerMap()");
	var theMap = new Map("divMap", {
		basemap		: "streets"
		,autoResize	: true
		,center		: [-118.2095, 34.0866]
		,zoom		: 10
	})
	,selPopulation	= dom.byId("selPopulation")
	,drawPolygon	= dom.byId("drawPolygon")
	,drawToolbar	= new Draw( theMap )
	,featureLayer	= new FeatureLayer(
		'http://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/la_county_labor_centroid/FeatureServer/0',{
		mode: FeatureLayer.MODE_SELECTION
	})
	;

	drawToolbar.on("draw-end", function(e){
		drawToolbar.deactivate();
		var query = new Query();
		query.geometry = e.geometry;
		featureLayer.selectFeatures( query );
	});

	theMap.addLayer( featureLayer );

	on( selPopulation, "change", filterFeatureLayerWithDefExpr );

	on( drawPolygon, "click", startDrawing );


	function startDrawing(){
		console.log("startDrawing(), activating Draw.POLYGON", Draw.POLYGON );
		drawToolbar.activate( Draw.POLYGON );
	}//startDrawing()

	function filterFeatureLayerWithDefExpr(e){
		console.log("filterFeatureLayer()");

		var pop		= e.target.value
		,filterExpr	= "TOTAL_POP > " + pop;
		featureLayer.setDefinitionExpression( filterExpr );

	}//filterFeatureLayer()



}//buildFeatureLayerMap()





