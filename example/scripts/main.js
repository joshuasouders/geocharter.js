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

var pie1, pie2, pie3;

$(document).ready(function(){
	 pie1 = new Barchart("bar1", bar, {topLeft: [0,0], bottomRight: [6, 2]}, {graphTitle: "Test 1"});
	 pie2 = new Barchart("bar3", mydatam1, {topLeft: [6,0], bottomRight: [12,2]}, {graphTitle: "Test 2"});
	 pie3 = new Barchart("bar4", bar, {topLeft: [0,2], bottomRight: [12, 5]}, {graphTitle: "Test 3"});
});

function clicked(){
	console.log("test");
	pie1 = new Barchart("bar1", mydatam1, {topLeft: [0,0], bottomRight: [6, 2]}, {graphTitle: "Test 1"});
	pie2 = new Barchart("bar3", bar, {topLeft: [6,0], bottomRight: [12,2]}, {graphTitle: "Test 2"});
	pie3 = new Barchart("bar4", mydatam1, {topLeft: [0,2], bottomRight: [12, 5]}, {graphTitle: "Test 3"});
};