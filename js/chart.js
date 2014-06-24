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