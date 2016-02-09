var img = new File("/setup.png"); 
img.open('r'); 
$.writeln(img);
img.encoding = 'BINARY'; 
var imgstr = img.read(); 
img.close(); 

$.writeln(imgstr.toSource());

