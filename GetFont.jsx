var prj = app.project;
var layer = prj.activeItem.selectedLayers[0];
alert(layer.name);
var font = layer.property("Source Text").value.font;
alert(font);