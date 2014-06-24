function Panel(id){
	this.id = id;
}
function Chart(id){
	//calls the parent constructor
	Panel.call(this, id);

	this.id = id;
}

//handle some more inheritance stuff
Chart.prototype = Object.create(Panel.prototype);
Chart.prototype.constructor = Chart;

Piechart.prototype.initializeChart = function(){};

Piechart.prototype.setData = function(data){};
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