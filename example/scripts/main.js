var bar = {
	title: "Test",
	labels : ["January","February","March","April","May","June","July"],
	datasets : [
		{
			fillColor : "rgba(151,187,205,0.5)",
			strokeColor : "rgba(151,187,205,1)",
			pointColor : "rgba(151,187,205,1)",
			pointStrokeColor : "#fff",
			data : [0.65,0.59,0.90,0.81,0.56,0.55,0.40],
      		title : "pFirst data"
		}
	]
};

var mydatam1 = {
	labels : ["January","February","March","April","May","June","July"],
	datasets : [
		{
			fillColor : "rgba(151,187,205,0.5)",
			strokeColor : "rgba(151,187,205,1)",
			pointColor : "rgba(151,187,205,1)",
			pointStrokeColor : "#fff",
			data : [28,48,40,19,96,27,80],
	      	title : "Second data"
		}
	]
};

var bar1, bar2, bar3, bar4, bar5, bar6, bar7, bar8;

$(document).ready(function(){
	printBarCharts();
});

function printBarCharts(){
	 bar1 = new Barchart("1", mydatam1, {topLeft: [0,0], bottomRight: [3, 2]}, {graphTitle: "Test 1"});
	 bar2 = new Barchart("2", bar, {topLeft: [3, 0], bottomRight: [8, 3]}, {graphTitle: "Test 2"});
	 bar3 = new Barchart("3", mydatam1, {topLeft: [8, 0], bottomRight: [12, 5]}, {graphTitle: "Test 3"});
	 bar4 = new Barchart("4", mydatam1, {topLeft: [3, 3], bottomRight: [5, 7]}, {graphTitle: "Test 4"});
	 bar8 = new Barchart("8", bar, {topLeft: [5, 3], bottomRight: [8, 5]}, {graphTitle: "Test 8"});
	 bar5 = new Barchart("5", bar, {topLeft: [0, 2], bottomRight: [3, 7]}, {graphTitle: "Test 5"});
	 bar6 = new Barchart("6", mydatam1, {topLeft: [0, 7], bottomRight: [12, 10]}, {graphTitle: "Test 6"});
	 bar7 = new Barchart("7", mydatam1, {topLeft: [5, 5], bottomRight: [12, 7]}, {graphTitle: "Test 7"});
};