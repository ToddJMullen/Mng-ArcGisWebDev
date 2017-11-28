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
  ,"dojo/on"
  ,"esri/graphic"
  // template
  ,'text!widgets/edit/editTools.tpl.html'
], function(declare, lang, array, _WidgetBase, _TemplatedMixin, domClass, on, Graphic, template) {

  return declare([_WidgetBase, _TemplatedMixin], {

    declaredClass: 'widgets.edit.EditTools'
    ,templateString: template
    ,options: {}
    ,editing: false
    ,map: null
	,handler: null
	,requestLayer: null


    ,// lifecycle 1
    constructor: function(options) {
      // mix in settings and defaults
      this.options = options || {};
      this.map = this.options.map;
      this.requestLayer = this.map.getLayer('Requests');
	  console.log("editTools::constructor(), this.map:", this.map );
    }

	,postCreate: function(){
		this.handler = on.pausable( this.map, "click", lang.hitch( this, "_addPoint" ) );
		this.handler.pause();
//		I disabled this binding because I think it is bound in the template & again here
//		which makes it fire twice (on => off) with one click
//  data-dojo-attach-event="onclick:_addRequest" <= from template
//		works with one or the other, not both
		this.own( this.handler, on( this.editNode, "click", lang.hitch( this, "_addRequest") ) );
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
//			IssueType		: "New Request"
//			,RequestDate	:  new Date().getTime()
//			,CensusTract	: ptCensus.attributes.NAME
		}
		,graphic
//		,graphic	= new Graphic( ptMap, null, attributes )
		;
		attributes.IssueType	= "New Request";
		attributes.RequestDate	= new Date().getTime();
		attributes.CensusTract	= ptCensus.attributes.NAME;

		graphic = new Graphic( ptMap, null, attributes );

		this.requestLayer
			.applyEdits( [graphic] )
			.then(
				lang.hitch( this, function(){
					this._toggleEditButton();
					alert("Request Submitted");
					console.log("Request submitted graphics:", graphic );
				})
		);


	}

    ,// private functions
    _init: function() {
		console.log("_init()");
    }

    ,_toggleEditButton: function() {
		this.editing = !this.editing;
		if(this.editing) {
			console.log("_toggleEditButton(), editing");
			this.editNode.innerHTML = 'Adding Request';
			this.handler.resume();//start watching/handling again
		} else {
			console.log("_toggleEditButton(), not editing");
			this.editNode.innerHTML = 'Add Request';
			this.handler.pause();//stop watching for add events
		}
		domClass.toggle(this.editNode, 'btn-primary btn-success');
    }

  });

});
