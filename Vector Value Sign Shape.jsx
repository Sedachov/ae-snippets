var xOffset = 5;
var yOffset = -10;

app.beginUndoGroup("Make Vector Signs");
    var comp = app.project.activeItem;
    if(comp.selectedLayers.length > 0)
    {
        var layers = comp.selectedLayers;
        for(var i = 0; i < layers.length; i++){
            if(layers[i] instanceof TextLayer)
            {
                    var bb = layers[i].sourceRectAtTime(layers[i].inPoint, true);
                    var pos = layers[i].transform.position.value;
                    var anc = layers[i].transform.anchorPoint.value;                
                    var newPos = [pos[0] + (bb.left + bb.width/2) + xOffset - anc[0], pos[1] + bb.top + yOffset - anc[1]];
                    var newLayer = createArrow(comp);
                    newLayer.transform.position.setValue(newPos);
                    newLayer.moveBefore(layers[i]);
                    newLayer.startTime = layers[i].startTime;
                    newLayer.inPoint = layers[i].inPoint;
                    newLayer.outPoint = layers[i].outPoint;
                    newLayer.enabled = layers[i].enabled;
                    newLayer.name = layers[i].name[0] + ' - ' + newLayer.name;
                    newLayer.parent = layers[i].parent;
                    newLayer.shy = layers[i].shy;           
            }        
        }
    }
    else
        var newLayer = createArrow(comp);
app.endUndoGroup();


function createArrow(comp){
    var newLayer = comp.layers.addShape();
    newLayer.name = 'Vector Value Sign';
    
    var myShape = new Shape();
    myShape.vertices = [
        [-138.25,-17.609375],
        [-138.25,-21.234375],
        [-112,-21.234375],
        [-112,-25.25],
        [-93.5,-19.3264465332031],
        [-112,-13.5],
        [-112,-17.609375]];                                
    myShape.closed = true; 

    var shapeGroup = newLayer.content.addProperty("ADBE Vector Shape - Group");      
        shapeGroup.name = "Top Sign";
        shapeGroup.path.setValue(myShape);
        
    var fillProp = newLayer.content.addProperty("ADBE Vector Graphic - Fill");  
        fillProp.property("Color").setValue([44/255, 62/255, 80/255]);
        fillProp.property("Opacity").setValue([100]);
        
    var bb = newLayer.sourceRectAtTime(0, true);
    newLayer.transform.anchorPoint.setValue([bb.left + bb.width/2, bb.top + bb.height/2]);
    newLayer.transform.position.setValue([comp.width/2, comp.height/2]);
    
    return newLayer;
 }

