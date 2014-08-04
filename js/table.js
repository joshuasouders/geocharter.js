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