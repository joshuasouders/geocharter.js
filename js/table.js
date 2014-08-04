function Table(id, data, position, title, options){
	this.id = id;
	this.data = data;
	this.panel = new Panel(id, position);
	this.div = document.getElementById(this.id);
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
	this.div.innerHTML = '<div id="geocharter-' + this.id + '" class="table-container"></div>';

	$('#geocharter-' + this.id).css("width", this.div.clientWidth - window.getComputedStyle(this.div, null).getPropertyValue('padding-right').replace(/\D/g,'') - window.getComputedStyle(this.div, null).getPropertyValue('padding-left').replace(/\D/g,''));
	$('#geocharter-' + this.id).css("height", this.div.clientHeight - $("h3").css("fontSize").replace(/\D/g,''));

	console.log(this.div.innerHTML);
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

	document.getElementById('geocharter-' + this.id).innerHTML = tableString;
};