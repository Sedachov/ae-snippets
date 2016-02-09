var comp = app.project.activeItem;
var myShape = new Shape();

//long arrow
myShape.vertices = [
                                    [-314,2],
                                    [-314,-2],
                                    [274,-2],[274,-10],
                                    [314,0],
                                    [274,10],
                                    [274,2]
                                ];
                                
 myShape.closed = true;         
 
var layer = comp.layers.addShape();
layer.name = 'Arrow'; 
var group = layer.content.addProperty("ADBE Vector Group");   



var shapeGroup = group.content.addProperty("ADBE Vector Shape - Group");      
shapeGroup.name = "Arrow";
shapeGroup.path.setValue(myShape);

var fillProp = group.content.addProperty("ADBE Vector Graphic - Fill");  
fillProp.property("Color").setValue([44/255, 62/255, 80/255]);
fillProp.property("Opacity").setValue([100]);



 
