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
	new Chapter("Home", [new Page("/index.php", "Home")])
	,new Chapter("Chapter 2", [
			new Page("/chapter2/TheGraphicsLayer.php", "The Graphics Layer")
			,new Page("/chapter2/TheQueryTask.php", "The Query Task")
			,new Page("/chapter2/TheFeatureLayer.php", "The Feature Layer")
		]
	)
	,new Chapter("Chapter 3", [
		new Page("/chapter3/ch3.1.php", "REST API Stuff")
	])
	,new Chapter("Chapter 4", [
		new Page("/chapter4/sdf.php","Somthing")
	])
];


?>
<nav>
	<ul>
		<?php
		$menu = "";
		foreach ( $chAry as $k => $ch ){
			$menu .= "<li class='ch'>$ch->label<ul>";
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

