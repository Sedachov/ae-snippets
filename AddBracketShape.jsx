﻿var comp = app.project.activeItem;
var myShape = new Shape();

/* //READ PATH
var path = comp.selectedLayers[0].property("Contents").property("Arrow").property("Path").value;

var v_count = path.vertices.length;
$.writeln("vertices: " + v_count);
$.write("[");
for(var i = 0; i < v_count; i++)
    $.writeln("[" + path.vertices[i][0] + "," + path.vertices[i][1] + "],"); 
$.write("]");
$.writeln("");
$.writeln("");

var it_count = path.inTangents.length;
$.writeln("inTan: " + it_count);
$.write("[");
for(var i = 0; i < it_count; i++)
    $.writeln("[" + path.inTangents[i][0] + "," + path.inTangents[i][1] + "],");   
$.write("]");
$.writeln("");
$.writeln("");

var ot_count = path.outTangents.length;
$.writeln("inTan: " + ot_count);
$.write("[");
for(var i = 0; i < ot_count; i++)
    $.writeln("[" + path.outTangents[i][0] + "," + path.outTangents[i][1] + "],");  
$.write("]");
$.writeln("");
$.writeln("");
*/

    
myShape.vertices = [
    [2.81243896484375,-197.075134277344],
    [7.1015625,-203.4560546875],
    [15.5038452148438,-207.463836669922],
    [15.5038452148438,-209.0810546875],
    [2.42578125,-203.1396484375],
    [-1.72265625,-188.795837402344],
    [-1.68756103515625,-21.5156555175781],
    [-4.8515625,-7.76956176757813],
    [-15.50390625,-1.37103271484375],
    [-15.50390625,1.30078125],
    [-4.8515625,7.66404724121094],
    [-1.68756103515625,21.41015625],
    [-1.72265625,188.795837402344],
    [2.42578125,203.1572265625],
    [15.5038452148438,209.0810546875],
    [15.5038452148438,207.4638671875],
    [8.841796875,204.774475097656],
    [4.41204833984375,200.432678222656],
    [2.23248291015625,194.1572265625],
    [1.68743896484375,185.174865722656],
    [1.72265625,20.671875],
    [0.86138916015625,12.1640625],
    [-1.828125,6.29296875],
    [-6.486328125,2.42579650878906],
    [-12.9218139648438,-0.03515625],
    [-6.71484375,-2.443359375],
    [-2.232421875,-5.9765625],
    [0.66796875,-11.9531555175781],
    [1.72265625,-20.84765625],
    [1.68743896484375,-185.174835205078]];

myShape.inTangents = [
    [-0.75048828125,2.40277099609375],
    [-2.109375,1.85159301757813],
    [-3.4925537109375,0.82080078125],
    [0,0],
    [2.76519775390625,-3.18701171875],
    [0,-6.375],
    [0,0],
    [2.10931396484375,-2.88278198242188],
    [4.9921875,-1.3829345703125],
    [0,0],
    [-2.109375,-2.88279724121094],
    [0,-6.28118896484375],
    [0,0],
    [-2.765625,-3.17578125],
    [-5.95355224609375,-0.77337646484375],
    [0,0],
    [1.86328125,1.20697021484375],
    [1.08990478515625,1.6875],
    [0.3631591796875,2.49615478515625],
    [0,3.4920654296875],
    [0,0],
    [0.57415771484375,2.3203125],
    [1.21826171875,1.59381103515625],
    [1.88616943359375,0.98435974121094],
    [3.07025146484375,0.65620422363281],
    [-1.64208984375,0.97021484375],
    [-1.23052978515625,1.453125],
    [-0.703125,2.53131103515625],
    [0,3.39840698242188],
    [0,0],];

myShapeoutTangents = [
    [0.75,-2.40240478515625],
    [2.109375,-1.85110473632813],
    [0,0],
    [-5.95355224609375,0.77340698242188],
    [-2.765625,3.1875],
    [0,0],
    [0,6.28131103515625],
    [-2.109375,2.88284301757813],
    [0,0],
    [4.9921875,1.359375],
    [2.10931396484375,2.88284301757813],
    [0,0],
    [0,6.39849853515625],
    [2.76519775390625,3.17584228515625],
    [0,0],
    [-2.57855224609375,-0.5859375],
    [-1.86334228515625,-1.2071533203125],
    [-1.08978271484375,-1.6875],
    [-0.36383056640625,-2.49609375],
    [0,0],
    [0,-3.35150146484375],
    [-0.57470703125,-2.3203125],
    [-1.21868896484375,-1.59370422363281],
    [-1.88671875,-0.98431396484375],
    [3.0462646484375,-0.70306396484375],
    [1.70123291015625,-1.0048828125],
    [1.23046875,-1.45309448242188],
    [0.703125,-2.53118896484375],
    [0,0],
    [0,-5.53121948242188],];
                                
 myShape.closed = true;         
 
 var layer = comp.layers.addShape();
 layer.name = 'Bracket';
var group = layer.content.addProperty("ADBE Vector Group");   

var shapeGroup = group.content.addProperty("ADBE Vector Shape - Group");      
shapeGroup.name = "Bracket";
shapeGroup.path.setValue(myShape);

var fillProp = group.content.addProperty("ADBE Vector Graphic - Fill");  
fillProp.property("Color").setValue([44/255, 62/255, 80/255]);
fillProp.property("Opacity").setValue([100]);





 