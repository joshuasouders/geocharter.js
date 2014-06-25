function Panel(id, position){
	console.log("here");

	this.id = id;
	this.topLeftGraph = position.topLeft;
	this.bottomRightGraph = position.bottomRight;

	this.containerWidth = $('#' + id).parent().width();//document.getElementById(this.id).parent()[0].offsetWidth;
	this.containerHeight =  $('#' + id).parent().height();

	console.log(this.containerWidth);

	this.stepSize = this.containerWidth / 12;

	this.topLeft = [Math.floor(this.topLeftGraph[0]*this.stepSize), Math.floor(this.topLeftGraph[1]*this.stepSize)];
	this.bottomRight = [Math.floor(this.bottomRightGraph[0]*this.stepSize), Math.floor(this.bottomRightGraph[1]*this.stepSize)];

	this.width = this.bottomRight[0] - this.topLeft[0];
	this.height = this.bottomRight[1] - this.topLeft[1];

	$('#' + id).css("left", this.topLeft[0] + 'px');
	$('#' + id).css("top", this.topLeft[1] + 'px');

	$('#' + id).css("width", this.width + 'px');
	$('#' + id).css("height", this.height + 'px');
}
function Chart(id){
	this.id = id;
}

Chart.prototype.constructor = Chart;

Chart.prototype.initializeChart = function(){};

Chart.prototype.setData = function(data){};
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
function Barchart(id, data, position, options){
	this.id = id;
	this.data = data;
	this.panel = new Panel(id, position);
	this.div = document.getElementById(this.id);
	this.chart = "";
	this.chartContext = "";

	this.options = {
	    inGraphDataShow : false,
	    datasetFill : true,
	    scaleLabel: "<%=value%>",
	    scaleTickSizeRight : 5,
	    scaleTickSizeLeft : 5,
	    scaleTickSizeBottom : 5,
	    scaleTickSizeTop : 5,
	    scaleFontSize : 16,
	    canvasBorders : false,
	    canvasBordersWidth : 1,
	    canvasBordersColor : "black",
	    graphTitle : "",
			graphTitleFontFamily : "'Arial'",
			graphTitleFontSize : 24,
			graphTitleFontStyle : "bold",
			graphTitleFontColor : "#666",
	    graphSubTitle : "",
			graphSubTitleFontFamily : "'Arial'",
			graphSubTitleFontSize : 18,
			graphSubTitleFontStyle : "normal",
			graphSubTitleFontColor : "#666",
	    footNote : "",
			footNoteFontFamily : "'Arial'",
			footNoteFontSize : 8,
			footNoteFontStyle : "bold",
			footNoteFontColor : "#666",
	    legend : false,
		    legendFontFamily : "'Arial'",
		    legendFontSize : 12,
		    legendFontStyle : "normal",
		    legendFontColor : "#666",
	    legendBlockSize : 15,
	    legendBorders : false,
	    legendBordersWidth : 1,
	    legendBordersColors : "#666",
	    yAxisLeft : true,
	    yAxisRight : false,
	    xAxisBottom : true,
	    xAxisTop : false,
	    yAxisLabel : "",
			yAxisFontFamily : "'Arial'",
			yAxisFontSize : 16,
			yAxisFontStyle : "normal",
			yAxisFontColor : "#666",
	    xAxisLabel : "",
		 	xAxisFontFamily : "'Arial'",
			xAxisFontSize : 16,
			xAxisFontStyle : "normal",
			xAxisFontColor : "#666",
	    yAxisUnit : "",
			yAxisUnitFontFamily : "'Arial'",
			yAxisUnitFontSize : 8,
			yAxisUnitFontStyle : "normal",
			yAxisUnitFontColor : "#666",
	    annotateDisplay : true, 
	    spaceTop : 30,
	    spaceBottom : 30,
	    spaceLeft : 30,
	    spaceRight : 30,
	    logarithmic: false,
	    showYAxisMin : true,
	    rotateLabels : "smart",
	    xAxisSpaceOver : 0,
	    xAxisSpaceUnder : 0,
	    xAxisLabelSpaceAfter : 0,
	    xAxisLabelSpaceBefore : 0,
	    legendBordersSpaceBefore : 0,
	    legendBordersSpaceAfter : 0,
	    footNoteSpaceBefore : 0,
	    footNoteSpaceAfter : 0, 
	    startAngle : 0,
	    dynamicDisplay : false
	};

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
	this.div.innerHTML = "";
	var canvas = document.createElement('canvas');
	canvas.setAttribute("id", 'geocharter-' + this.id);
	canvas.width = this.div.clientWidth;
	canvas.height = this.div.clientHeight;

	this.div.innerHTML = this.div.innerHTML + canvas.outerHTML;
	this.chartContext = document.getElementById("geocharter-" + this.id).getContext("2d");
};

Barchart.prototype.setData = function(data){
	this.chart = new Chart(this.chartContext).Bar(data, this.options);
	console.log("changing data");
};