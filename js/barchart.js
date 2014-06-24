function Barchart(id, data){
	//calls the parent constructor
	Chart.call(this, id);

	this.id = id;
	this.data = data;
	
	this.initializeChart();
	this.setData(this.data);
}

//handle some more inheritance stuff
Barchart.prototype = Object.create(Chart.prototype);
Barchart.prototype.constructor = Barchart;

Barchart.prototype.initializeChart = function(){

};

Barchart.prototype.setData = function(data){

};