function Barchart(id, data, position, title, options){
	this.id = id;
	this.data = data;
	this.panel = new Panel(id, position);
	this.div = document.getElementById(this.id);
	this.chart = "";
	this.chartContext = "";
	this.title = title;

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

Barchart.prototype.constructor = Barchart;

Barchart.prototype.initializeChart = function(){
	this.div.innerHTML = "<h3>" + this.title + "</h3>";
	var canvas = document.createElement('canvas');
	canvas.setAttribute("id", 'geocharter-' + this.id);
	canvas.width = this.div.clientWidth - window.getComputedStyle(this.div, null).getPropertyValue('padding-right').replace(/\D/g,'') - window.getComputedStyle(this.div, null).getPropertyValue('padding-left').replace(/\D/g,'');
	canvas.height = this.div.clientHeight - window.getComputedStyle(this.div, null).getPropertyValue('padding-bottom').replace(/\D/g,'') - window.getComputedStyle(this.div, null).getPropertyValue('padding-top').replace(/\D/g,'') - $("h3").css("fontSize").replace(/\D/g,'') - $("h3").css("margin-top").replace(/\D/g,'') - $("h3").css("margin-bottom").replace(/\D/g,'');

	this.div.innerHTML = this.div.innerHTML + canvas.outerHTML;
	this.chartContext = document.getElementById("geocharter-" + this.id).getContext("2d");
};

Barchart.prototype.setData = function(data){
	this.chart = new Chart(this.chartContext).Bar(data, this.options);
};