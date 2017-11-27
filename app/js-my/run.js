/***********************
 *	Project		: ArcGisWebDev
 *	Author		: Todd Mullen
 *	Document	: run.js
 *	Created		: Nov 15, 2017, 5:52:52 PM
 *	Description	:
 *      Controls
 ***********************/

/* global define, require, location */
/* jshint laxcomma:true */
(function(){
	"use strict";

	var pathRegEx	= new RegExp(/\/[^\/]+$/)
	//define var with adjusted location of app source files
	,locationPath	= location.pathname.replace( pathRegEx, "/" )
	;

	require({
		async: true
		//define name shortcuts for imports(requires)
		,aliases: [
			["text", "dojo/text"]
		]
		//define/import custom sources
		,packages: [{
				name: "controllers"
				,location: locationPath + "js/controllers"
			},{
				name: "services"
				,location: locationPath + "js/services"
			},{
				name: "utils"
				,location: locationPath + "js/utils"
			},{
				name: "widgets"
				,location: locationPath + "js/widgets"
			},{
				name: "app"
				,location: locationPath + "js"
				,main: "main"
			}
		]
	}, ["app"]);

})();




