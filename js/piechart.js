function Piechart(id, data){
	//calls the parent constructor
	Chart.call(this, id);

	this.id = id;
	this.data = data;
	
	this.initializeChart();
	this.setData(this.data);
}

//handle some more inheritance stuff
Piechart.prototype = Object.create(Chart.prototype);
Piechart.prototype.constructor = Piechart;

Piechart.prototype.initializeChart = function(){

};

Piechart.prototype.setData = function(data){

};