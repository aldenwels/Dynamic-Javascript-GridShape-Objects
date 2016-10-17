var mywindow = new JitterObject("jit.window","foo");
var myrender = new JitterObject("jit.gl.render","foo");
mywindow.depthbuffer = 0; 
// turn ON idlemousing... we want to listen for it:
mywindow.idlemouse = 1; 
myrender.erase_color = [0,0,0,1]; 
var myShapes = [ ];
var i = 0;

function shape(newShape){
		myShapes.push(new JitterObject("jit.gl.gridshape","foo"));
		i = myShapes.length - 1;
		myShapes[i].shape = newShape;
		myShapes[i].scale = [0.4,0.4,0.4];
}

function bang(){
		myrender.erase(); // erase the drawing context
		myrender.drawclients(); // draw the client objects
		myrender.swap(); // swap in the new drawing
}

function pickShape(index){
		i = index;
}

function scale(x,y,z){
	onShape.scale = [x,x,x];
}

function position(x,y,z){
	post(i);
	post(z);
	myShapes[i].position = [x,y,z];
}