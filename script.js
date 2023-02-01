require(
  ["esri/views/MapView", "esri/WebMap"],
  function(MapView, WebMap) {
    var webmap = new WebMap({
      portalItem: {
        id: "cdcb061e7b8f4735b1e0769cead0a345"
      }
    });
 var view = new MapView({
      map: webmap,
      container: "viewDiv"
    });
});

