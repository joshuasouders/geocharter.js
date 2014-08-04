function Map(id, data, position, title, options){
	this.id = id;
	this.data = data;
	this.div = document.getElementById(this.id);
	this.containerDiv = document.createElement("div");	
	this.title = title;
	this.position = position;
	this.chart = "";
	this.chartContext = "";

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

Map.prototype.constructor = Map;

Map.prototype.initializeChart = function(){
	this.containerDiv.setAttribute("class", "dasher-panel");
	this.div.appendChild(this.containerDiv);

	this.panel = new Panel(this.containerDiv, this.position);

	this.containerDiv.innerHTML = "<h3>" + this.title + "</h3><div id=\"map\"></div>";

	$('#map').css("width", this.containerDiv.clientWidth - window.getComputedStyle(this.containerDiv, null).getPropertyValue('padding-right').replace(/\D/g,'') - window.getComputedStyle(this.containerDiv, null).getPropertyValue('padding-left').replace(/\D/g,''));
	$('#map').css("height", this.containerDiv.clientHeight - window.getComputedStyle(this.containerDiv, null).getPropertyValue('padding-bottom').replace(/\D/g,'') - window.getComputedStyle(this.containerDiv, null).getPropertyValue('padding-top').replace(/\D/g,'') - $("h3").css("fontSize").replace(/\D/g,'') - $("h3").css("margin-top").replace(/\D/g,'') - $("h3").css("margin-bottom").replace(/\D/g,''));

	this.map = L.map('map').setView([39, -77], 8);
	console.log("here");
	L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	    maxZoom: 18
	}).addTo(this.map);
};

Map.prototype.setData = function(data){
	L.geoJson(data).addTo(this.map);
};