<!DOCTYPE html>
<html>
	<head>
		<title>ArcGIS Web Development | The Query Task</title>
		<?php require_once '../headContent.php'; ?>
		<style>
			#selPopulation{
				clear: left;
				margin: 10px;
				display: block;
			}
		</style>
	</head>
	<body>
		<h1>The Query Task</h1>
		<?php require_once '../menu.php'; ?>

		<select id="selPopulation" name="population">
			<option value="" selected="selected" >Select Population</option>
			<option value="100">100</option>
			<option value="500">500</option>
			<option value="1500">1,500</option>
			<option value="2500">2,500</option>
			<option value="5000">5,000</option>
			<option value="7500">7,500</option>
		</select>

		<div id="divMap" class=".map"></div>

		<script src="http://js.arcgis.com/3.11/"></script>
		<script src="js/theQueryTask.js" type="text/javascript"></script>


	</body>
</html>
