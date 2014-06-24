function Barchart(id, data){
	this.id = id;
	this.data = data;
	this.div = document.getElementById(this.id);
	this.chart = "";
	this.chartContext = "";
	
	this.initializeChart();
	this.setData(this.data);
}

Barchart.prototype.constructor = Barchart;

Barchart.prototype.initializeChart = function(){
	this.div.innerHTML = this.div.innerHTML + '<canvas id="geocharter-' + this.id + '"></canvas>';
	this.chartContext = document.getElementById("geocharter-" + this.id).getContext("2d");
};

Barchart.prototype.setData = function(data){
	this.chart = new Chart(this.chartContext).Bar(data);
};