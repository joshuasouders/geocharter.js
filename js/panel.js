function Panel(div, position){
	this.topLeftGraph = position.topLeft;
	this.bottomRightGraph = position.bottomRight;

	this.containerWidth = $(div).parent().width();//document.getElementById(this.id).parent()[0].offsetWidth;
	this.containerHeight =  $(div).parent().height();

	this.stepSize = this.containerWidth / 12;

	this.topLeft = [Math.floor(this.topLeftGraph[0]*this.stepSize), Math.floor(this.topLeftGraph[1]*this.stepSize)];
	this.bottomRight = [Math.floor(this.bottomRightGraph[0]*this.stepSize), Math.floor(this.bottomRightGraph[1]*this.stepSize)];

	this.width = this.bottomRight[0] - this.topLeft[0] - $(div).css("margin").replace(/\D/g,'');
	this.height = this.bottomRight[1] - this.topLeft[1] - $(div).css("margin").replace(/\D/g,'');

	$(div).css("left", this.topLeft[0] + 'px');
	$(div).css("top", this.topLeft[1] + 'px');

	$(div).css("width", this.width + 'px');
	$(div).css("height", this.height + 'px');
}