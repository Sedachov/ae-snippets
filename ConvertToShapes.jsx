var comp = app.project.activeItem;
var layers = comp.selectedLayers;
var n = layers.length;

for(var i = 0; i < n; i++)
{
    for(var j = 1; j <= comp.numLayers; j++)
        comp.layer(j).selected = false;
    layers[i].selected = true;   
    app.executeCommand(3973); 
    comp.layer(1).moveBefore(layers[i]);
    layers[i].remove();
}

