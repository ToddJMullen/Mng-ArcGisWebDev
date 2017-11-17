/***********************
 *	Project		: ArcGisWebDev
 *	Author		: Todd Mullen
 *	Document	: symbolUtil.js
 *	Created		: Nov 16, 2017, 9:38:49 PM
 *	Description	:
 *      Controls the rendering of map layers
 ***********************/

define([
	"esri/Color"
	,"esri/symbols/SimpleFillSymbol"
	,"esri/symbols/SimpleLineSymbol"
], function( Color, SimpleFillSymbol, SimpleLineSymbol ){
	return {
		renderSymbol: function(){
			return new SimpleFillSymbol(
				SimpleFillSymbol.STYLE_SOLID
				,new SimpleLineSymbol(
					SimpleLineSymbol.STYLE_SOLID
					,new Color([255,55,55])
					,1
				)
				,new Color([128,128,128,0.5])
			);
		}
	};
});





