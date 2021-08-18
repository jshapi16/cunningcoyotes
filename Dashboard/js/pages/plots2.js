d3.json("http://127.0.0.1:5000/inequality_api").then(line_chart);

    function line_chart(data) {
        var x = data.map(function (d) {
            return d.year;
        });
        var y = data.map(function (d) {
            return d.gdp_percap_change;
        });
        var z = data.map(function (d) {
        return d.median_income_change;
        });
        var a = data.map(function (d) {
            return d.first_change;
        });
        var b = data.map(function (d) {
            return d.second_change;
        });
        var c = data.map(function (d) {
            return d.third_change;
        });
        var d = data.map(function (d) {
            return d.fourth_change;
        });
        var e = data.map(function (d) {
            return d.fifth_change;
        });

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
            name: 'Change in GDP Per Capita',
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

        var trace3 = {
            x: x,
            y: a,
            mode: 'lines+markers',
            name: 'First Income Percentile',
            marker: {
                color: "red",
                size: 11
            }
        };

        var trace4 = {
            x: x,
            y: b,
            mode: 'lines+markers',
            name: 'Second Income Percentile',
            marker: {
                color: "navy",
                size: 11
            }
        };

        var trace5 = {
            x: x,
            y: c,
            mode: 'lines+markers',
            name: 'Third Income Percentile',
            marker: {
                color: "green",
                size: 11
            }
        };

        var trace6 = {
            x: x,
            y: d,
            mode: 'lines+markers',
            name: 'Fourth Income Percentile',
            marker: {
                color: "pink",
                size: 11
            }
        };

        var trace7 = {
            x: x,
            y: e,
            mode: 'lines+markers',
            name: 'Fifth Income Percentile',
            marker: {
                color: "purple",
                size: 11
            }
        };

        var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7];

        var layout = {
            // title: "Change in GDP vs Median Income",
            xaxis: {
            rangeselector: selectorOptions,
            rangeslider: {},
            title: "Years"
            },
            autosize: false,
            width: 1500,
            height: 500,
            margin: {
                l: 50,
                r: 20,
                b: 20,
                t: 20,
                pad: 4
            },
            yaxis: {
            
            autorange: true,
            range: [0, 200000],
            autotick: true,
            // ticks: 'outside',
            // tick0: 0,
            // dtick: 2,
            // ticklen: 1,
            // tickwidth: 4,
            // tickcolor: '#000',
            // title: "Difference"
            }
            // height: "300px",
            // width: 1800
        };

        Plotly.newPlot("plotly_chart", data, layout);
    }
    // line_chart();