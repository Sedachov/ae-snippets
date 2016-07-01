var layers = app.project.activeItem.selectedLayers;

for(var j = 0; j < layers.length; j++)
    if(layers[j] instanceof ShapeLayer) RoundStrokes(layers[j].property("ADBE Root Vectors Group"));    

function RoundStrokes(vectorGroup){
    for(var i = 1; i <= vectorGroup.numProperties; i++){
        if(vectorGroup.property(i).matchName == "ADBE Vector Stroke Line Cap")vectorGroup.property(i).setValue(2); 
        if(vectorGroup.property(i).matchName == "ADBE Vector Stroke Line Join")vectorGroup.property(i).setValue(2);
        else if(vectorGroup.property(i) instanceof PropertyGroup) RoundStrokes(vectorGroup.property(i));      
    }
}
