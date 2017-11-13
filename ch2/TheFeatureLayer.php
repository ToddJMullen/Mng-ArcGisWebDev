<!DOCTYPE html>
<html>
	<head>
		<title>ArcGIS Web Development | The Feature Layer</title>
		<?php require_once '../headContent.php'; ?>
		<style>
			#drawPolygon{
				float: right;
			}
		</style>
	</head>
	<body>
		<h1>The Feature Layer</h1>
		<?php require_once '../menu.php'; ?>
		<!--doesn't work when in select mode-->
<!--		<select id="selPopulation" name="population">
			<option value="" selected="selected" >Select Population</option>
			<option value="100">100</option>
			<option value="500">500</option>
			<option value="1500">1,500</option>
			<option value="2500">2,500</option>
			<option value="5000">5,000</option>
			<option value="7500">7,500</option>
		</select>-->
		<button id="drawPolygon" value="Draw">Select Map Region</button>

		<div id="divMap" class=".map"></div>

		<script src="http://js.arcgis.com/3.11/"></script>
		<script src="js/theFeatureLayer.js" type="text/javascript"></script>


	</body>
</html>
