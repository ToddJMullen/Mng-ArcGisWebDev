<!DOCTYPE html>
<html>
	<head>
		<title>ArcGIS Web Development</title>
		<link rel="stylesheet"
			  href="http://js.arcgis.com/3.11/esri/css/esri.css">
    <link href="/css/app.css" rel="stylesheet">
	</head>
	<body>
		<select id="selPopulation" name="population">
			<option value="" selected="selected" >Select Population</option>
			<option value="2500">2,500</option>
			<option value="5000">5,000</option>
			<option value="7500">7,500</option>
		</select>

		<div id="divMap" class=".map"></div>

		<script src="http://js.arcgis.com/3.11/"></script>
		<script type="text/javascript" src="./theQueryTask.js"></script>


	</body>
</html>
