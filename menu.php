<?php

/***********************
 * Project	: ArcGisWebDev
 * File		: menu.php
 * Created	: Nov 12, 2017, 7:39:16 PM
 * @author	: Todd Mullen
 * Description : menu.php
 ***********************/

require 'models/Chapter.php';
require 'models/Page.php';
use imagi\models\Chapter;
use imagi\models\Page;

$chAry = [
	new Chapter("Ch2", [
			new Page("/ch2/TheGraphicsLayer.php", "The Graphics Layer")
			,new Page("/ch2/TheQueryTask.php", "The Query Task")
			,new Page("/ch2/TheFeatureLayer.php", "The Feature Layer")
		]
	)
	,new Chapter("Ch3", [
		new Page("/ch3/somthing.php", "sd", "sdf")
		,new Page("/ch3/somthing.php", "sd", "sdf")
	])
];


?>
<nav>
	<ul>
		<?php
		$menu = "";
		foreach ( $chAry as $k => $ch ){
			$menu .= "<li class='ch'>$ch->label<br /><ul>";
			foreach( $ch->pageAry as $k => $page ){
				$menu .= "<li>{$page->getLink()}</li>";
			}
			$menu .= "</ul></li>";
		}
		echo $menu
//		?>

<!--		<li class="ch">Ch 2<br />
			<ul>
				<li><a href="/ch2/TheGraphicsLayer.php">The Graphics Layer</a></li>
				<li><a href="/ch2/TheQueryTask.php">The Query Task</a></li>
				<li><a href="/ch2/TheFeatureLayer.php">The Feature Layer</a></li>
			</ul>
		</li>-->
	</ul>
</nav>

