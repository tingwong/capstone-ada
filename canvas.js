
$(document).ready( function() {
  var canvas = new fabric.Canvas('myCanvas',{
    isDrawingMode: true
  });

  var canvasEl = document.getElementById('myCanvas');
  var clearEl = document.getElementById('clearCanvas');
  var processEl = document.getElementById('processCanvas');

  clearEl.onclick = function(){ canvas.clear() };

  processEl.onclick = function(){
    
  };
});
