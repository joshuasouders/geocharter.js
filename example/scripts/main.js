var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};

var datapie = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
]

var bar1, bar2, bar3, bar4, bar5, bar6, bar7, bar8;

$(document).ready(function(){
	printBarCharts();
});

function printBarCharts(){
	 bar1 = new Barchart("1", data, {topLeft: [0,0], bottomRight: [3, 2]}, "Test 1", {title: "Test 1"});
	 bar2 = new Piechart("2", datapie, {topLeft: [3, 0], bottomRight: [8, 3]}, "Test 2", {title: "Test 2"});
	 bar3 = new Barchart("3", data, {topLeft: [8, 0], bottomRight: [12, 5]}, "Test 3", {title: "Test 3"});
	 bar4 = new Piechart("4", datapie, {topLeft: [3, 3], bottomRight: [5, 7]}, "Test 4", {title: "Test 4"});
	 bar8 = new Barchart("8", data, {topLeft: [5, 3], bottomRight: [8, 5]}, "Test 8", {title: "Test 8"});
	 bar5 = new Piechart("5", datapie, {topLeft: [0, 2], bottomRight: [3, 7]}, "Test 5", {title: "Test 5"});
	 bar6 = new Barchart("6", data, {topLeft: [0, 7], bottomRight: [12, 10]}, "Test 6", {title: "Test 6"});
	 bar7 = new Piechart("7", datapie, {topLeft: [5, 5], bottomRight: [12, 7]}, "Test 7", {title: "Test 7"});
};