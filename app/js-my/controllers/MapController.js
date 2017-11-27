/***********************
 *	Project		: ArcGisWebDev
 *	Author		: Todd Mullen
 *	Document	: MapController.js
 *	Created		: Nov 16, 2017, 6:04:47 PM
 *	Description	:
 *      Controls
 ***********************/

define([
	"dojo/_base/declare"//Dojo class building helper
	,"dojo/_base/lang"//Dojo utility methods
	,"dojo/on"//Dojo event listener
	,"dojo/Deferred"//Dojo Promise util
	,"esri/map"
], function ( declare, lang, on, Deferred, Map ){
	return declare( null, {
		map: null
		,options: {}
		,constructor: function( options ){
			this.options = declare.safeMixin( this.options, options );
		}
		,load: function(){
			var deferred = new Deferred()
//			,mapLoaded = lang.hitch( this, function(){//the map services changes the event/method name that is fired when ready
			,layersAdded = lang.hitch( this, function( layers ){//mapLoaded() => layersAdded()
				console.log("layersAdded(), this.map.graphicsLayerIds:", this.map.graphicsLayerIds );
				deferred.resolve( this.map );
			});

			this.map = new Map( this.options.elem, this.options.mapOptions );

//			on.once( this.map, 'load', mapLoaded );//event "load" changes also
			on.once( this.map, 'layers-add-result', function onLayersAddResult( e ){
				console.log("onLayersAddResult()", e );
				setTimeout( layersAdded, 1000 );
			});

			//not we have a layer(s) to add
			setTimeout( function delayLayerAdd(){
				this.map.addLayers( this.options.layers );
			}, 1000 );

			return deferred.promise;
		}
	});
});



