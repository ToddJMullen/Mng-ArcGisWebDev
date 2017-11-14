<?php

/* * *********************
 * 	Project		: ArcGisWebDev
 * 	Document	: Page.php
 * 	@author		: Todd Mullen
 * 	Created		: Nov 13, 2017, 5:35:52 PM
 * 	Description	:
 * 		Page
 * ********************* */

namespace imagi\models;


/**
 * Page
 */
class Page
{

/////Constants/////

	const NAME = "";

/////public vars/////

	public $path = "";
	public $label = "";
	public $title = "";

/////private vars/////
/////public methods/////



	/**
	 *
	 * @return void
	 * @access public
	 */
	public function __construct( $path, $label, $title = "" )
	{
		$this->path		= $path;
		$this->label	= $label;
		$this->title	= $title;
	}

	public function getLink(){
		$title = $this->title ? $this->title : "";
		$label = "title='" . $this->label ? $this->label : $this->path . "'";
		return "<a href='$this->path' $title>$label</a>";
	}


	/////private methods/////


}//End Page

