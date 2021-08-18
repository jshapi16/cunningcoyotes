// Load in data with plotly 
var rawDataURL = 'final_datasets_inequality.csv';
var xField = 'Year';
var yField = 'Median Income';

var selectorOptions = {
    buttons: [{
        step: 'month',
        stepmode: 'backward',
        count: 1,
        label: '1m'
    }, {
        step: 'month',
        stepmode: 'backward',
        count: 6,
        label: '6m'
    }, {
        step: 'year',
        stepmode: 'todate',
        count: 1,
        label: 'YTD'
    }, {
        step: 'year',
        stepmode: 'backward',
        count: 1,
        label: '1y'
    }, {
        step: 'all',
    }],
};
// d3.csv("final_datasets_inequality.csv").then(makeChart);
Plotly.d3.csv(rawDataURL, function(err, rawData) {
    if(err) throw err;

    var data = prepData(rawData);
    var layout = {
        title: 'Time series with range slider and selectors',
        xaxis: {
            rangeselector: selectorOptions,
            rangeslider: {}
        },
        yaxis: {
            fixedrange: true
        }
    };

    Plotly.plot('graph', data, layout, {showSendToCloud: true});
});

function prepData(rawData) {
    var x = [];
    var y = [];

    console.log(rawData.length)

    rawData.forEach(function(datum, i) {
        if(i % 100) return;

        x.push(new Date(datum[xField]));
        y.push(datum[yField]);
    });

    return [{
        mode: 'lines',
        x: x,
        y: y
    }];
}