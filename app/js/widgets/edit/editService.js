/***********************
 *	Project		: ArcGisWebDev
 *	Author		: Todd Mullen
 *	Document	: editService.js
 *	Created		: Nov 30, 2017, 6:58:49 AM
 *	Description	:
 *      Controls adding requests.
 *      Specifically watches for failed attempts and stores them locally to be retried later.
 *
 ***********************/

define([
	"dojo/_base/declare"
	,"dojo/_base/lang"
	,"dojo/Deferred"
	,"dojo/json"
	,"esri/graphic"
], function( declare, lang, Deferred, dojoJson, Graphic ){
	return declare( null, {
		layer: null
		,hasSavedRequests: false
		,constructor: function(options){
			console.log("EditService(), Options: ", options );
			this.options	= options || {};
			this.layer		= options.layer;
			this._syncAry		= [];//holds failed request logs
			this.check();
		}
		//run a check to see if local storage has any stored requests
		,check: function(){
			console.log("EditService::check()");
			for (var name in localStorage) {
				if( name.indexOf("request") > -1 ){
					this.hasSavedRequests = true;
				}
			}
		}
		//make any outstanding requests in local storage
		,sync: function(){
			console.log("EditService::sync()");
			//assemble an array of requests stored locally
			var keys = [];
			for (var key in localStorage) {
				if( key.indexOf("request") > -1 ){
					keys.push(key);
					var item	= localStorage.getItem(key)
					,graphic	= new Graphic( dojoJson.parse(item) );
					this._syncAry.push(graphic);
				}
			}
			//if there are requests, apply them to the current map layer
			if( this._syncAry.length > 0 ){
				console.log("EditService::sync() has elements:", this._syncAry );
				this.layer
					.applyEdits(this._syncAry)
					.then(//remove the local storage requests & reset the flags
						lang.hitch(this, function onSuccess(){
//							this._syncAry.length = 0;
							for ( i = 0, key; (key = keys[i]); i++ ){
								localStorage.removeItem( key );
							}
							this.hasLocal = false;
							this._syncAry = [];
						})
						,lang.hitch(this, function onError(){
							this._syncAry.length = 0;
						})
					);

			}
		}//sync
		,add: function(adds){
			console.log("EditService::add()", adds );
			var deferred = new Deferred()
			,req
			;
			req = this.layer.applyEdits( adds );
			req.then(
				function onAddSuccess(){
					console.log("EditService::add.onAddSuccess()", adds );
					deferred.resolve();
				}
				,lang.hitch( this, function onAddFailed(){
					console.log("EditService::add.onAddFailed()", adds );
					for ( var i = 0, item; (item = adds[i]); i++ ){
						try{
							var id = Math.floor(1+ Math.random() * 1000)
							,key = "request-" + id
							,requestItem = localStorage.getItem( key );

							if( !requestItem ){
								localStorage.setItem( key, dojoJson.stringify(item.toJson()) );
							}
							this.check();
						} catch( error ){
							alert("There was a problem adding a request to local storage. It may be full.");
						}
					}//for(items)
					deferred.reject(adds);
				})//hitch(onAddFailed())
//				)
			)//req.then()
			return deferred.promise;
		}//add
	});
});




