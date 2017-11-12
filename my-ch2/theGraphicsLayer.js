/***********************
 *	Project		: ArcGisWebDev
 *	Author		: Todd Mullen
 *	Document	: theGraphicsLayer.js
 *	Created		: Nov 11, 2017, 8:28:37 PM
 *	Description	:
 *      Controls the map content in TheGraphicsLayer.html
 ***********************/

/* global  */
require([
	"esri/map"
	,"esri/graphic"
	,"esri/symbols/SimpleMarkerSymbol"
	,"esri/symbols/SimpleLineSymbol"
	,"dojo/_base/Color"
], createMap );


function createMap( Map, Graphic, SimpleMarkerSymbol, SimpleLineSymbol, Color ){
	console.log("mapInit()");;

	//create a map with the given element ID (#divMap)
	var theMap = new Map("divMap"//target DOM ID
	, {//map options
		basemap: "streets"
		,autoresize: false
		,center: [-82.4594, 27.9806]
		,zoom: 10
	});

	//attach a click handler
	theMap.on( "click", drawSymbol );

	function drawSymbol(e){
		var point = e.mapPoint
		,size		= 24
		,lineColor	= new Color([255,0,0])
		,fillColor	= new Color([255,255,0,0.5])
		,outline	= new SimpleLineSymbol( SimpleLineSymbol.STYLE_SOLID, lineColor, 3 )
		,marker		= new SimpleMarkerSymbol( SimpleMarkerSymbol.STYLE_CIRCLE, size, outline, fillColor )
		,graphic	= new Graphic( point, marker );

		;
		theMap.graphics.add( graphic );
		console.log("drawSymbol()", graphic );

	}//drawSymbol()

}//mapInit()



