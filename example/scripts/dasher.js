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
function Chart(id){
	this.id = id;
}

Chart.prototype.constructor = Chart;

Chart.prototype.initializeChart = function(){};

Chart.prototype.setData = function(data){};
function Piechart(id, data, position, title, options){
	this.id = id;
	this.data = data;
	this.div = document.getElementById(this.id);
	this.containerDiv = document.createElement("div");	
	this.position = position;
	this.title = title;	
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
function Barchart(id, data, position, title, options){
	this.id = id;
	this.data = data;
	this.div = document.getElementById(this.id);
	this.containerDiv = document.createElement("div");	
	this.position = position;
	this.title = title;	
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

Barchart.prototype.constructor = Barchart;

Barchart.prototype.initializeChart = function(){
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

Barchart.prototype.setData = function(data){
	this.chart = new Chart(this.chartContext).Bar(data, this.options);
};
function Linechart(id, data, position, title, options){
	this.id = id;
	this.data = data;
	this.div = document.getElementById(this.id);
	this.containerDiv = document.createElement("div");	
	this.position = position;
	this.title = title;	
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

Linechart.prototype.constructor = Linechart;

Linechart.prototype.initializeChart = function(){
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

Linechart.prototype.setData = function(data){
	this.chart = new Chart(this.chartContext).Line(data);
};
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
function Table(id, data, position, title, options){
	this.id = id;
	this.data = data;
	this.div = document.getElementById(this.id);
	this.containerDiv = document.createElement("div");	
	this.position = position;
	this.title = title;	
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

Table.prototype.constructor = Table;

Table.prototype.initializeChart = function(){
	this.containerDiv.setAttribute("class", "dasher-panel");
	this.div.appendChild(this.containerDiv);

	this.panel = new Panel(this.containerDiv, this.position);

//	this.containerDiv.innerHTML = '<div class="table-container"></div>';



//	$(this.containerDiv).css("width", this.containerDiv.clientWidth - window.getComputedStyle(this.containerDiv, null).getPropertyValue('padding-right').replace(/\D/g,'') - window.getComputedStyle(this.containerDiv, null).getPropertyValue('padding-left').replace(/\D/g,''));
//	$(this.containerDiv).css("height", this.containerDiv.clientHeight - $("h3").css("fontSize").replace(/\D/g,''));

};

Table.prototype.setData = function(data){
	var tableString = '<h3>' + this.title + '</h3><div class="table-container"><table class="table table-striped"><thead><tr>';
	for(var label in data.labels){
		tableString += '<th>' + data.labels[label] + '</th>';
	}
	tableString += '</tr></thead><tbody>';

	for(var entry in data.data){
		tableString += '<tr>';
		for(var value in data.data[entry]){
			console.log(data.data[entry][value]);

			tableString += '<td>' + data.data[entry][value] + '</td>';
		}
		tableString += '</tr>';
	}

	tableString += '</tbody></table></div>';

	this.containerDiv.innerHTML = tableString;

	$('.table-container').css("height", this.containerDiv.clientHeight - window.getComputedStyle(this.containerDiv, null).getPropertyValue('padding-bottom').replace(/\D/g,'') - window.getComputedStyle(this.containerDiv, null).getPropertyValue('padding-top').replace(/\D/g,'') - $("h3").css("fontSize").replace(/\D/g,'') - $("h3").css("margin-top").replace(/\D/g,'') - $("h3").css("margin-bottom").replace(/\D/g,''));
};