app.beginUndoGroup("GenerateBase");
//------------------------------------------------------


var selectedShape = app.project.activeItem.selectedLayers[0];
var shapeCenter = CalculateShapeCenter(selectedShape);
var newNull = app.project.activeItem.layers.addNull();
newNull.transform.position.setValue(shapeCenter);

//------------------------------------------------------
app.endUndoGroup();

function CalculateShapeCenter(shapeLayer)
{
    var rect = shapeLayer.sourceRectAtTime(0,true);
    var pos = shapeLayer.transform.position.value;
    var anchor = shapeLayer.transform.anchorPoint.value;
    var scale = shapeLayer.transform.scale.value;
    var sx = scale[0]/100;
    var sy = scale[1]/100;
    
    var x = pos[0] + (rect.left + rect.width/2 - anchor[0])*sx;
    var y = pos[1] + (rect.top + rect.height/2 - anchor[1])*sy;
    return [x,y];
}