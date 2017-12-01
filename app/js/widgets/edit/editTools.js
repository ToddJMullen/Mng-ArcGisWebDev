/*global define*/
/*jshint laxcomma:true*/
define([
  'dojo/_base/declare'
  ,'dojo/_base/lang'
  ,'dojo/_base/array'
  // Dijit stuff
  ,'dijit/_WidgetBase'
  ,'dijit/_TemplatedMixin'
  // dom stuff
  ,'dojo/dom-class'
  ,"dojo/dom-attr"
  ,"dojo/query"
  ,"dojo/on"
  ,"esri/graphic"
  // template
  ,'text!widgets/edit/editTools.tpl.html'
  //custom service
  ,"widgets/edit/editService"
], function(declare, lang, array, _WidgetBase, _TemplatedMixin, domClass, domAttr, query, on, Graphic, template, EditService ) {

  return declare([_WidgetBase, _TemplatedMixin], {

    declaredClass: 'widgets.edit.EditTools'
    ,templateString: template
    ,options: {}
    ,editing: false
    ,map: null
	,handler: null
	,requestLayer: null
	,requestType: null
	,editService: null
//	,domNode: null


    ,// lifecycle 1
    constructor: function(options) {
      // mix in settings and defaults
      this.options = options || {};
      this.map = this.options.map;
      this.requestLayer = this.map.getLayer('Requests');
	  this.editService = new EditService({
		  layer: this.requestLayer
	  });
	  console.log("EditTools(), this.map:", this.map );
    }

	,postCreate: function(){
		this.handler = on.pausable( this.map, "click", lang.hitch( this, "_addPoint" ) );
		this.handler.pause();
		this.own(
			on(
				this.domNode//I don't know if this is built-in or if its definition is part of the truncated code
				,".btn-edit:click"
				,lang.hitch( this, "_toggleEditButton" )
			)
			,on(
				this.domNode
				,".btn-sync:click"
				,lang.hitch( this, "_syncLocal" )
			)
		);
//		I disabled this binding because I think it is bound in the template & again here
//		which makes it fire twice (on => off) with one click
//  data-dojo-attach-event="onclick:_addRequest" <= from template
//		works with one or the other, not both
//
//		this.own( this.handler, on( this.editNode, "click", lang.hitch( this, "_addRequest") ) );
		//the signature above is different than edit shown in the book
	}

    ,// start widget
    startup: function() {
      this._init();
    }

    ,// cleanup
    destroy: function() {
      // default destroy
      this.inherited(arguments);
    }

    // public methods

    // widget methods
	,_syncLocal: function(){
		console.log("EditTools::_syncLocal()");
		if( this.editService.hasSavedRequests ){
			this.editService.sync();
		} else {
			console.log("EditTools::_syncLocal(), EditService does not have saved requests");
		}
	}


    ,_addRequest: function(e) {
		console.log("_addRequest()", e );
//		console.debug('editTools#_addRequest: start or stop adding a request.');
		this._toggleEditButton();
    }

	,_addPoint: function(e){
		console.log("_addPoint()", e );
		var ptMap	= e.mapPoint
		,ptCensus	= e.graphic
		,attributes	= {
			IssueType		: "New Request"
			,RequestDate	: new Date().getTime()
			,CensusTract	: ptCensus.attributes.NAME
			,description	: prompt("What's the haps here?")
		}
//		,graphic
		,graphic	= new Graphic( ptMap, null, attributes )
//		,description	= prompt("What's the haps here?")
		;
//		attributes.IssueType	= "New Request";
//		attributes.RequestDate	= new Date().getTime();
//		attributes.CensusTract	= ptCensus.attributes.NAME;
//		attributes.Description	= description;

		console.log("editTools::_addPoint() attributes:", attributes );
//		graphic = new Graphic( ptMap, null, attributes );

		console.log("editTools::_addPoint() submitting graphic:", graphic );
		this.editService.add( [graphic] );
		this._toggleEditButton();
		alert("Request Submitted");
		return;
//		this.requestLayer
//			.applyEdits( [graphic] )
//			.then(
//				lang.hitch( this, function( rsp ){
//					this._toggleEditButton();
//					alert("Request Submitted");
//					console.log("Request submitted response:", rsp );
//				})
//		);
	}//_addPoint()

    ,_init: function() {
		console.log("_init()");
    }

    ,_toggleEditButton: function(e) {
		this.editing		= !this.editing;
		this.requestType	= "";
		if( e ){
			this.requestType	= domAttr.get(e.target, "data-type" );
			domClass.toggle( e.target, "btn-primary btn-success" );
		}

		if( this.editing ){
			query(".btn-primary", this.domNode ).removeClass("btn-primary").attr("disabled","disabled");
			this.handler.resume();
		} else {
			query(".btn-edit", this.domNode ).removeClass("btn-success").addClass("btn-primary").removeAttr("disabled");
			this.handler.pause();
		}

//		if(this.editing) {
//			console.log("_toggleEditButton(), editing");
//			this.editNode.innerHTML = 'Adding Request';
//			this.handler.resume();//start watching/handling again
//		} else {
//			console.log("_toggleEditButton(), not editing");
//			this.editNode.innerHTML = 'Add Request';
//			this.handler.pause();//stop watching for add events
//		}
//		domClass.toggle(this.editNode, 'btn-primary btn-success');
    }

  });

});
