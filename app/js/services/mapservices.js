/*global define*/
/*jshint laxcomma:true*/
define([
  'esri/layers/FeatureLayer',
  'esri/renderers/SimpleRenderer',
  'utils/symbolUtil'
  ,"utils/uris"
], function(FeatureLayer, SimpleRenderer, symbolUtil) {


  function _loadServices(config) {
    var layers = []
    // census tract
	, censusLayer = new FeatureLayer( uris.censusLayer(), {
        id: 'Census'
		,outFields: ["*"]//causes all fields to load
      })
      , requestLayer = new FeatureLayer( uris.requestLayer(), {
        id: 'Requests',
        mode: FeatureLayer.MODE_ONDEMAND,
        outFields: ['*']
      })
      // feature renderer
      , renderer = new SimpleRenderer(symbolUtil.renderSymbol());

    censusLayer.setRenderer(renderer);

    layers.push(censusLayer);
    layers.push(requestLayer);

    return layers;
  }

  return {
    loadServices: _loadServices
  };

});

