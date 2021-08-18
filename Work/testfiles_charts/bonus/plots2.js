d3.csv("final_datasets_inequality.csv").then(line_chart);

function line_chart(data) {
    var x = data.map(function (d) {
        return d.Year;
    });
    var y = data.map(function (d) {
        return d.gdp_change;
    });
    var z = data.map(function (d) {
      return d.median_income_change;
    })

    var selectorOptions = {
      buttons: [{
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
      
    var trace1 = {
        x: x,
        y: y,
        mode: 'lines+markers',
        name: 'Change in GDP',
        marker: {
            color: "#468cc2",
            size: 11
        }
    };

    var trace2 = {
      x: x,
      y: z,
      mode: 'lines+markers',
      name: 'Change in Median Income',
      marker: {
          color: "#d654cd",
          size: 11
      }
  };

    var data = [trace1, trace2];

    var layout = {
        title: "Change in GDP vs Median Income",
        xaxis: {
        rangeselector: selectorOptions,
        rangeslider: {}
        },
        yaxis: {
        fixedrange: true
        },
        height: 600,
        width: 1800
    };

    Plotly.newPlot('plot2', data, layout);
}
// line_chart();