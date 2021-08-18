// add a second trace
// modify the multi line code to create two different axis 
// for median income and gdp 

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
        name: 'Change in GDP'
    };

    var trace2 = {
      x: x,
      y: z,
      mode: 'lines+markers',
      name: 'Change in Median Income'
  };

    var data = [trace1, trace2];

    // var frames = [];
    // for (i = 0; i < x.length; i++) {
    //   frames.push({
    //     name: x[i],
    //     data: data.map(function (d) {
    //       return d(x[i], y); // y is not defined
    //     })
    //   })
    // }

    var sliderSteps = [];
    for (i = 0; i < x.length; i++) {
      sliderSteps.push({
        method: 'animate',
        label: x[i],
        args: [[x[i]], {
          mode: 'immediate',
          transition: {duration: 300},
          frame: {duration: 300, redraw: false},
        }]
      });
    }

    

    // var layout = {
    //   title: "Change in GDP vs Median Income",
    //   xaxis: {
    //     rangeselector: selectorOptions,
    //     rangeslider: {}
    //   },
    //   yaxis: {
    //     fixedrange: true
    //   }
    // };
    var layout = {
      xaxis: {
        title: 'Years',
        // range: [30, 85]
      },
      yaxis: {
        title: 'GDP Per Capital',
        // type: 'log'
      },
      hovermode: 'closest',
      updatemenus: [{
        x: 0,
        y: 0,
        yanchor: 'top',
        xanchor: 'left',
        showactive: false,
        direction: 'left',
        type: 'buttons',
        pad: {t: 87, r: 10},
        buttons: [{
          method: 'animate',
          args: [null, {
            mode: 'immediate',
            fromcurrent: true,
            transition: {duration: 300},
            frame: {duration: 500, redraw: false}
          }],
          label: 'Play'
        }, {
          method: 'animate',
          args: [[null], {
            mode: 'immediate',
            transition: {duration: 0},
            frame: {duration: 0, redraw: false}
          }],
          label: 'Pause'
        }]
      }],
    // Finally, add the slider and use `pad` to position it
    // nicely next to the buttons.
      sliders: [{
        pad: {l: 130, t: 55},
        currentvalue: {
          visible: true,
          prefix: 'Year:',
          xanchor: 'right',
          font: {size: 20, color: '#666'}
        },
        steps: sliderSteps
      }]
    };
  

//     Plotly.newPlot('plot', data, layout);
// }

    Plotly.newPlot('plot', {
      data: data,
      layout: layout,
      // frames: frames,
    });
  }
// line_chart();


// function unpack(rows, index) {
//   return rows.map(function(row) {
//     return row[index];
//   });
// }

// function buildPlot() {
//   d3.csv("final_datasets_inequality.csv").then(function(data) {

//     // Grab values from the data json object to build the plots
 
//     var name = data.Year;

//     var stock = data.median_income_change;

//     var startDate = data.gdp_change; 
    
//     var endDate = data.gdp_percap_change;

    // var dates = unpack(data.dataset.data, 0);
    // var closingPrices = unpack(data.dataset.data, 4);

    // var selectorOptions = {
    //   buttons: [{
    //       step: 'year',
    //       stepmode: 'backward',
    //       count: 10,
    //       label: '10y'
    //   }, {
    //       step: 'year',
    //       stepmode: 'backward',
    //       count: 5,
    //       label: '5y'
    //   }, {
    //       step: 'year',
    //       stepmode: 'todate',
    //       count: 1,
    //       label: 'YTD'
    //   }, {
    //       step: 'year',
    //       stepmode: 'backward',
    //       count: 1,
    //       label: '1y'
    //   }, {
    //       step: 'all',
    //   }],
    // };

    // var trace1 = {
    //   type: "line",
    //   mode: "lines",
    //   // name: name,
    //   x: name,
    //   y: startDate,
    //   line: {
    //     color: "#17BECF"
    //   }
    // };

    // var data = [trace1];

    // var layout = {
    //   title: "GDP",
    //   xaxis: {
    //     rangeselector: selectorOptions,
    //     rangeslider: {}
//       },
//       yaxis: {
//         fixedrange: true
//       }
//     };

//     Plotly.newPlot("plot", data, layout);

//   });
// }

// buildPlot();
