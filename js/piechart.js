function Piechart(id, data){
	this.id = id;
	this.data = data;
	this.div = document.getElementById(this.id);
	this.chart = "";
	this.chartContext = "";
	
	this.initializeChart();
	this.setData(this.data);
}

Piechart.prototype.constructor = Piechart;

Piechart.prototype.initializeChart = function(){
	this.div.innerHTML = this.div.innerHTML + '<canvas id="geocharter-' + this.id + '"></canvas>';
	this.chartContext = document.getElementById("geocharter-" + this.id).getContext("2d");
};

Piechart.prototype.setData = function(data){
	this.chart = new Chart(this.chartContext).Pie(data);
};