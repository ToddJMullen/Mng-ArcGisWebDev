/***********************
 *	Project		: ArcGisWebDev
 *	Author		: Todd Mullen
 *	Document	: editTools.js
 *	Created		: Nov 17, 2017, 7:49:52 AM
 *	Description	:
 *      Controls
 ***********************/

define([
	"dojo/_base/declare"//class building util
	,"dojo/_base/lang"//general util
	,"dojo/on"//event listener
	,"dijit/_WidgetBase"//Base for custom widgets
	,"dijit/_TemplatedMixin"
	,"dojo/dom-class"
	,"text!widgets/edit/editTools.tmpl.html"
], function createEditToolsWidget(
	declare, lang, on
	,_WidgetBase, _TemplatedMixin
	,domClass, template
){
	return declare(
		[_WidgetBase, _TemplatedMixin]
		,{
			templateString: template
			,options: {}
			,editing: false
			,map: null

			,constructor: function name( options ) {
				console.log("editTools::constructor()", options );
				this.options = options || {};
				this.map = this.options.map;
			}//constructor()

			,postCreate: function postCreate() {
				console.log("editTools::postCreate()");
				this.own(
					on( this.editNode, "click", lang.hitch(this, "_addRequest") )
				);
			}//postCreate()


	//private methods

			,_addRequest: function _addRequest() {
				console.log("editTools::_addRequest()");
				this._editing = !this._editing;
				this._toggleEditButton();
			}//_addRequest()


			,_toggleEditButton: function(){
				console.log("editTools::_toggleEditButton()");
				if( this._editing ){
					this.editNode.innerHTML = "Adding Request";
				} else {
					this.editNode.innerHTML = "Add Request";
				}
				domClass.toggle( this.editNode, "btn-primary btn-success" );
			}//_toggleEditButton()
		}
	);
});



