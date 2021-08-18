d3.csv("final_datasets_inequality.csv").then(makeChart);

// Our labels along the x-axis
function makeChart(info) {
  var years = info.map(function (d) {
    return d.Year;
  });
// For drawing the lines
// cpi_change,pce_food_change,pce_energy_change,gdp_change,median_income_change,gdp_percap_change
  var cpi = info.map(function (d) {
    return d.cpi_change;
  });
  var pce_food = info.map(function (d) {
    return d.pce_food_change;
  });
  var pce_energy = info.map(function (d) {
    return d.pce_energy_change;
  });
  var gdp_billions = info.map(function (d) {
    return d.gdp_change;
  });
  var median_income = info.map(function (d) {
    return d.median_income_change;
  });
  var percap_gdp = info.map(function (d) {
    return d.gdp_percap_change;
  });

  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: years,
      datasets: [
        { 
          data: cpi,
          label: "Consumer Price Index",
          borderColor: "#fc8403",
          fill: false
        },
        { 
          data: pce_food,
          label: "PCE Food In Billions Of Dollars",
          borderColor: "#3e95cd",
          fill: false
        },
        { 
          data: pce_energy,
          label: "PCE Energy Goods and Services In Billions Of Dollars",
          borderColor: "#8e5ea2",
          fill: false
        },
        { 
          data: gdp_billions,
          label: "GDP In Billions",
          borderColor: "#3cba9f",
          fill: false
        },
        { 
          data: median_income,
          label: "Median Household Income",
          borderColor: "#e8c3b9",
          fill: false
        },
        { 
          data: percap_gdp,
          label: "GDP Per Capital",
          borderColor: "#c45850",
          fill: false
        }
      ]
    }
  });
};

// Code for Range Slider in Charts.js https://github.com/schme16/Chart.js-RangeSlider/blob/master/src/RangeSlider-core.js
// options = {
//   scaleBeginAtZero: true,
//   /*This is how to customize the way the labels look :) */
//   tooltipTemplate: "<%if (label){%><%=label%>: <%}%>$<%= value %>",
//   label: 'test'
// },

// new RangeSliderChart({

// 	chartData: "final_datasets_inequality.csv", //The same data you give to Chart.js
// 	chartOpts: options, //Your Chart.js options
// 	chartType: 'Line', //Which Chart.js chart you want (eg. Lie, Bar, Pie, etc.)
// 	chartCTX: ctx, //your canvas context

// 	class: 'my-chart-ranger', //Specifies a custom class you want applied to your sliders

// 	initial: [3, 10] //Which data points to start the sliders on
// })





// Income Percentile Graph 
// Our labels along the x-axis
d3.csv("final_datasets_inequality.csv").then(makeChart2);

function makeChart2(income) {
  var years = income.map(function (d) {
    return d.Year;
  });
// For drawing the lines
// first_change,second_change,third_change,fourth_change,fifth_change,top_five_change
  var first_perc = income.map(function (d) {
    return d.first_change;
  });
  var second_perc = income.map(function (d) {
    return d.second_change;
  });
  var third_perc = income.map(function (d) {
    return d.third_change;
  });
  var fourth_perc = income.map(function (d) {
    return d.fourth_change;
  });
  var fifth_perc = income.map(function (d) {
    return d.fifth_change;
  });
  var top_five = income.map(function (d) {
    return d.top_five_change;
  });

  var ctx2 = document.getElementById("myChart2");
  var myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
      labels: years,
      datasets: [
        { 
          data: first_perc,
          label: "First Income Percentile",
          borderColor: "#fc8403",
          fill: false
        },
        { 
          data: second_perc,
          label: "Second Income Percentile",
          borderColor: "#3e95cd",
          fill: false
        },
        { 
          data: third_perc,
          label: "Third Income Percentile",
          borderColor: "#8e5ea2",
          fill: false
        },
        { 
          data: fourth_perc,
          label: "Fourth Income Percentile",
          borderColor: "#3cba9f",
          fill: false
        },
        { 
          data: fifth_perc,
          label: "Fifth Income Percentile",
          borderColor: "#e8c3b9",
          fill: false
        },
        { 
          data: top_five,
          label: "Top Five Income",
          borderColor: "#c45850",
          fill: false
        }
      ]
    }
  });
};