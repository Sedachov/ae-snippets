var fadeLength = 10;
var comp = app.project.activeItem;
var layers = comp.selectedLayers;
var n = layers.length;
var fps = comp.frameRate;
var t1 = comp.time;
var t2 = t1 + (1.0/fps)*fadeLength;

for (var i = 0; i < n; i++){
    layers[i].inPoint = t1;
    layers[i].transform.opacity.setValueAtTime(t1, 0);
    layers[i].transform.opacity.setValueAtTime(t2, 100);
}
