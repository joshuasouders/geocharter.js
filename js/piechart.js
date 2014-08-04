function Piechart(id, data, position, title, options){
	this.id = id;
	this.data = data;
	this.div = document.getElementById(this.id);
	this.containerDiv = document.createElement("div");	
	this.position = position;
	this.title = title;	
	this.chart = "";
	this.chartContext = "";
	this.options = [];

	var i;
	for(i in options){
		var argKey = i;
		var argVal = options[i];
		
		var x;
		for(x in this.options){
			var key = x;

			if(argKey == key){
				this.options[x] = argVal;
			}
		}
	}
	
	this.initializeChart();
	this.setData(this.data);
}

Piechart.prototype.constructor = Piechart;

Piechart.prototype.initializeChart = function(){
	this.containerDiv.setAttribute("class", "dasher-panel");
	this.div.appendChild(this.containerDiv);

	this.panel = new Panel(this.containerDiv, this.position);

	this.containerDiv.innerHTML = "<h3>" + this.title + "</h3>";
	var canvas = document.createElement('canvas');
	canvas.width = this.containerDiv.clientWidth - window.getComputedStyle(this.containerDiv, null).getPropertyValue('padding-right').replace(/\D/g,'') - window.getComputedStyle(this.containerDiv, null).getPropertyValue('padding-left').replace(/\D/g,'');
	canvas.height = this.containerDiv.clientHeight - window.getComputedStyle(this.containerDiv, null).getPropertyValue('padding-bottom').replace(/\D/g,'') - window.getComputedStyle(this.containerDiv, null).getPropertyValue('padding-top').replace(/\D/g,'') - $("h3").css("fontSize").replace(/\D/g,'') - $("h3").css("margin-top").replace(/\D/g,'') - $("h3").css("margin-bottom").replace(/\D/g,'');

	this.containerDiv.appendChild(canvas);

	this.chartContext = canvas.getContext("2d");
};

Piechart.prototype.setData = function(data){
	this.chart = new Chart(this.chartContext).Pie(data);
};