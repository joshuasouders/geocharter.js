function Panel(id){
	this.id = id;
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
function Barchart(id, data, options){
	this.id = id;
	this.data = data;
	this.div = document.getElementById(this.id);
	this.chart = "";
	this.chartContext = "";

	this.defCanvasWidth=1200;
	this.defCanvasHeight=600;

	this.options = {
	    inGraphDataShow : false,
	    datasetFill : true,
	    scaleLabel: "<%=value%>",
	    scaleTickSizeRight : 5,
	    scaleTickSizeLeft : 5,
	    scaleTickSizeBottom : 5,
	    scaleTickSizeTop : 5,
	    scaleFontSize : 16,
	    canvasBorders : true,
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
	    spaceTop : 0,
	    spaceBottom : 0,
	    spaceLeft : 0,
	    spaceRight : 0,
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

	console.log(this.options);
	
	this.initializeChart();
	this.setData(this.data);
}

Barchart.prototype.constructor = Barchart;

Barchart.prototype.initializeChart = function(){
	var canvas = document.createElement('canvas');
	canvas.setAttribute("id", 'geocharter-' + this.id);
	canvas.width = this.div.clientWidth;
	canvas.height = this.div.clientHeight;

	this.div.innerHTML = this.div.innerHTML + canvas.outerHTML;
	this.chartContext = document.getElementById("geocharter-" + this.id).getContext("2d");

	$('#geocharter-' + this.id).css({
        "height": window.innerHeight,
        "width": window.innerWidth
	});
};

Barchart.prototype.setData = function(data){
	this.chart = new Chart(this.chartContext).Bar(data, this.options);
	console.log("changing data");
};