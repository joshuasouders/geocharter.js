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
];

var dataline = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};

var tabledata = {
  labels: ['Label 1', 'Label 2', 'Label 3'],
  data: [
    {
      label1: '11',
      label2: '12',
      label3: '13'
    },
    {
      label1: '21',
      label2: '22',
      label3: '23'
    },
    {
      label1: '31',
      label2: '32',
      label3: '33'
    },
    {
      label1: '41',
      label2: '42',
      label3: '43'
    },
    {
      label1: '51',
      label2: '52',
      label3: '53'
    },
    {
      label1: '61',
      label2: '62',
      label3: '63'
    },
    {
      label1: '71',
      label2: '72',
      label3: '73'
    },
    {
      label1: '81',
      label2: '82',
      label3: '83'
    }
  ]
}

var mapdata = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.54346466064453,
          39.042919523376106
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.50432586669922,
          39.15349256868933
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -76.6958999633789,
              39.199535650662554
            ],
            [
              -76.6677474975586,
              39.11487832325067
            ],
            [
              -76.80850982666016,
              39.101025297829146
            ],
            [
              -76.8325424194336,
              39.205388679179784
            ],
            [
              -76.73160552978516,
              39.22666830790386
            ],
            [
              -76.74018859863281,
              39.17186018711906
            ],
            [
              -76.6958999633789,
              39.199535650662554
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.7782974243164,
          39.00931363868443
        ]
      }
    }
  ]
};


var bar1, bar2, bar3, bar4, bar5, bar6, bar7, bar8;

$(document).ready(function(){
	printBarCharts();
});

function printBarCharts(){
	 bar1 = new Barchart("container-1", data, {topLeft: [0,0], bottomRight: [3, 2]}, "Test 1");
	 bar2 = new Map("container-1", mapdata, {topLeft: [3, 0], bottomRight: [8, 3]}, "Test 2");
	 bar3 = new Piechart("container-1", datapie, {topLeft: [8, 0], bottomRight: [12, 5]}, "Test 3");
	 bar4 = new Barchart("container-1", data, {topLeft: [3, 5], bottomRight: [5, 7]}, "Test 4");
	 bar8 = new Linechart("container-1", dataline, {topLeft: [3, 3], bottomRight: [8, 5]}, "Test 8");
	 bar5 = new Piechart("container-1", datapie, {topLeft: [0, 2], bottomRight: [3, 7]}, "Test 5");
	 bar6 = new Linechart("container-1", dataline, {topLeft: [0, 7], bottomRight: [12, 10]}, "Test 6");
	 bar7 = new Table("container-1", tabledata, {topLeft: [5, 5], bottomRight: [12, 7]}, "Test 7");
};