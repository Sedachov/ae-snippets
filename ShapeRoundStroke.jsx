(function StrokeRounder(thisObj)
{
    var StrokeRounderData = new Object();
    StrokeRounderData.scriptName = "Stroke Rounder";
    StrokeRounderData.scriptVersion = "v.1";
    StrokeRounderData.description = "Round strokes in selected shapes";
    StrokeRounderData.image_MainButton = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x0F\x00\x00\x00\x0F\b\x06\x00\x00\x01L\u00D1\u00A5\u00DC\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x00\u00F2IDATx\u00DAb`\x00\u0082\u00FF@\u00C0\u00C4\x00\x01\x0B\x00\x02\u0088\x01*R\x00\"\x04@R\x00\x01\x04\x13i`\u0080\x01\u00A8\u008C\x00\u008C\x0F\x10@0A\x05\u0098r\u0098i\x01\u008C@\x00\x12d\u0081\n\u00F4C\x15(2\u00C0M\u0086\x02\u0080\x00B7\u00EB?\u00CC\x02 \u00FD\x1E\u00EC\x1E$\u00C9\x04 \u009E\u008F\u00E6\u009A\u00FF(\x1C(\u009D\u0080\u00E2n\u0098\x02\\\u00D6\x02\x04\x10\u00BA\u00C2\u00F9P\u0093\u00EE#\u00FB\t$q\x1ED\u0083\u00FC\x06\u00A4\x12Q|\u0082\u00EE-\u0098b\\\u0092\u00F0\u0080\x07\u0081\rP\u00FB\x02\u00A0v~`B2B\x01\u0088\x05\u0081\u00D8\x00\u0088\x0B\u0081V\x0B\u0082%P\u00CC'\x16\x00\x04\x18.\u00FF\x1A@\u00C3\u00FA?\u0094\u00DE\x0F\u00B5\x01\x06\u00E6\u00E3\u00D2\x18\u0080\x1CPX\u00E4\x1Dp\u00CA\u0083\u00E2\x07\u00E6k<.\u00DB\u008F5\u00B9@#\x19\u00E6\u00E4\x04<Q8\x1F\u009BF\u0098\u00DF\u00D6#\x19\u0082\f@\u00F2\x06\u00B84\u009D'6%\u00C1\u00D3>\u0094\x16\x04F\u00DE\x07bc\x05\x00\u00A5[9\u00A0\u00EF\u00DE\u00F2`\x00\x00\x00\x00IEND\u00AEB`\u0082";

    function StrokeRounder_Main(layer)
    {
        alert(layer.name);
    }
    
    function StrokeRounder_BuildUI(thisObj)
    {
        var boundsExist = (app.settings.haveSetting('StrokeRounder', 'StrokeRounder_PanelBounds')&&!(thisObj instanceof Panel));
        if(boundsExist)
        {
            var bounds = new Array();
            bounds = app.settings.getSetting('StrokeRounder', 'StrokeRounder_PanelBounds').split(',');
            for(i in bounds)
                bounds[i] = parseInt(bounds[i], 10);
        }
        else var bounds = undefined;
        
        var w = (thisObj instanceof Panel) ? thisObj : new Window('palette', StrokeRounderData.scriptName, bounds, {resizeable:true});
        w.margins = [2,2,2,2];
        
        var mainGroup = w.add('group', undefined, 'mainGroup');
        mainGroup.spacing = 1;
        mainGroup.orientation = 'column';
        mainGroup.alignment = ['fill', 'fill'];
        
        var mainButton = mainGroup.add('image', undefined, StrokeRounderData.image_MainButton, 'image_MainButton');
        mainButton.alignment = ['center', 'center'];

        var mouseEvent_RoundStroke = function(ev)
        {
            var activeLayer = app.project.activeItem.selectedLayers[0];
            StrokeRounder_Main(activeLayer);
        }
    
        mainButton.addEventListener('click', mouseEvent_RoundStroke);
        
        w.layout.layout(true);
        w.layout.resize();
        w.onResizing = w.onResize = function () {this.layout.resize();}       
        return w;
    }
    
    var sf = StrokeRounder_BuildUI(thisObj);
    if(sf !== null)
    {           
        sf.onClose = function()
        {
            if(!(sf instanceof Panel))
                app.settings.saveSetting("StrokeRounder", "StrokeRounder_PanelBounds", sf.frameBounds.toString());
        }
        
        if(sf instanceof Window)
        {
            sf.show();
        }
        else
            sf.layout.layout(true);
    }
    
})(this);
