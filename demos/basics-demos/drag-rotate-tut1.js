ZdogDocs.dragRotateTut1 = function( elem ) {

  var illo = new Zdog.Illustration({
    canvas: elem,
    zoom: 4,
    dragRotate: true,
  });

  // circle
  new Zdog.Ellipse({
    addTo: illo,
    diameter: 20,
    translate: { z: 10 },
    stroke: 5,
    color: '#636',
  });

  // square
  new Zdog.Rect({
    addTo: illo,
    width: 20,
    height: 20,
    translate: { z: -10 },
    stroke: 3,
    color: '#E62',
    fill: true,
  });

  function animate() {
    illo.updateGraph();
    illo.renderGraph();
    requestAnimationFrame( animate );
  }

  animate();
};