/***********************
 *	Project		: ArcGisWebDev
 *	Author		: Todd Mullen
 *	Document	: theQueryTask.js
 *	Created		: Nov 11, 2017, 11:26:17 PM
 *	Description	:
 *      Controls
 ***********************/

require([
	"dojo/dom"
	,"dojo/on"
	,"dojo/_base/array"
	,"dojo/_base/Color"
	,"esri/map"
	,"esri/tasks/query"
	,"esri/tasks/QueryTask"
	,"esri/symbols/SimpleMarkerSymbol"
], setupQueryTaskMap );

function setupQueryTaskMap(
	dom, on, array, Color
	,Map, Query, QueryTask, SimpleMarkerSymbol
){console.log("setupQueryTaskMap()");
	var map = new Map("divMap", {
		basemap: "streets"
		,autoResize: true
		,center: [-118.2095, 34.0866]
		,zoom: 10
	})
	,uri = "http://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/la_county_labor_centroid/FeatureServer/0"
	,markerSymbol	= new SimpleMarkerSymbol( SimpleMarkerSymbol.STYLE_SQUARE, 10, null, new Color([50,50,255]) )

	;

	function onQuerySuccess( featureSet) {
		console.log("onQuerySuccess()", featureSet );
		map.graphics.clear();
		//set the marker / symbol for each datum & add it to the map
		array.forEach( featureSet.features, function(feat){
			feat.setSymbol(markerSymbol);
			map.graphics.add( feat );
		});
	}//onQuerySuccess()

	function onQueryError(err){
		console.error("An error has occured: ", err );
	}

	on( dom.byId("selPopulation"), "change", function makeQuery(e){
		var pop = e.target.value;
		if( pop.length > 0 ){
			var queryTask	= new QueryTask(uri)
			,query			= new Query()
			;
			query.where = "TOTAL_POP > " + pop
			query.returnGeometry	= true;
			queryTask.execute( query ).then( onQuerySuccess, onQueryError );
		}
	})//on(change)

	console.log("setupQueryTaskMap()");
}//setupQueryTaskMap()


