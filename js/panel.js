function Panel(id, position){
	console.log("here");

	this.id = id;
	this.topLeftGraph = position.topLeft;
	this.bottomRightGraph = position.bottomRight;

	this.containerWidth = $('#' + id).parent().width();//document.getElementById(this.id).parent()[0].offsetWidth;
	this.containerHeight =  $('#' + id).parent().height();

	console.log(this.containerWidth);

	this.stepSize = this.containerWidth / 12;

	this.topLeft = [Math.floor(this.topLeftGraph[0]*this.stepSize), Math.floor(this.topLeftGraph[1]*this.stepSize)];
	this.bottomRight = [Math.floor(this.bottomRightGraph[0]*this.stepSize), Math.floor(this.bottomRightGraph[1]*this.stepSize)];

	this.width = this.bottomRight[0] - this.topLeft[0];
	this.height = this.bottomRight[1] - this.topLeft[1];

	$('#' + id).css("left", this.topLeft[0] + 'px');
	$('#' + id).css("top", this.topLeft[1] + 'px');

	$('#' + id).css("width", this.width + 'px');
	$('#' + id).css("height", this.height + 'px');
}