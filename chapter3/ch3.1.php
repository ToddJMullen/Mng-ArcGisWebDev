<!doctype html>
<html>
  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>ArcGIS Web Development</title>
	<link rel="stylesheet" href="http://js.arcgis.com/3.11/dijit/themes/claro/claro.css">
    <link rel="stylesheet" href="http://js.arcgis.com/3.11/esri/css/esri.css">
	<link rel="stylesheet" href='http://js.arcgis.com/3.11/esri/dijit/css/Popup.css'/>
	<link rel="stylesheet" href="../css/app.css"/>
	<style>
		html, body { height: 100%; width: 100%; margin: 0; padding: 0; }
		#map { position: absolute; top:230px; bottom:0; left:0; right:0; z-index: -10000; }
		p{clear: left; padding0
		  : 10px;}
	</style>

  </head>
  <body class="claro">
	  <?php require '../menu.php'; ?>
	  <p>I saw little value in trying to figure out what the author was doing in Chapter 3 because it was not their
	  intent fo readers to build it and the snippets mentioned don't details what's really happening. Or, supposed to be,
	  happening; because of a CORS service denial from ArcGIS.</p>
    <button id="drawPoint">Point</button>
    <div id="map"></div>
    <script type="text/javascript"
      src="http://js.arcgis.com/3.11/"></script>
    <script src="ch3.1.js"></script>
  </body>
</html>
