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


var pie1 = new Barchart("bar1", bar, {graphTitle: "Test 1"});
var pie2 = new Barchart("bar3", bar, {graphTitle: "Test 2"});

var clicked = function(){
	pie1.setData(mydatam1);
};