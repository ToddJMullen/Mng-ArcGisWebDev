<?php

/* * *********************
 * 	Project		: ArcGisWebDev
 * 	Document	: Chapter.php
 * 	@author		: Todd Mullen
 * 	Created		: Nov 13, 2017, 5:53:07 PM
 * 	Description	:
 * 		Chapter
 * ********************* */

namespace imagi\models;


/**
 * Chapter
 */
class Chapter
{

/////Constants/////

	const NAME = "";

/////public vars/////

	public $label;
	public $pageAry;

/////private vars/////
/////public methods/////



	/**
	 *
	 * @return void
	 * @access public
	 */
	public function __construct( $label, $pageAry )
	{
		$this->label = $label;
		$this->pageAry = $pageAry;
	}
/////private methods/////


}


//End Chapter

