//giving the dropdown menu functionality
function dropDownMenu() {
    var menu = d3.select("#selDataset");

    d3.csv("cunning_coyote_all_datasets.csv").then((data) => {
        var sampleName = data.Year;
        sampleName.forEach((Year) => {
            menu
            .append("option")
            .text(Year)
            .property("value", Year);                
        });

        //set default
        const defaultSample = sampleName[0];
        demoTable(defaultSample);
        charting(defaultSample);
    });
}

function optionChanged(sampleName) {
    demoTable(sampleName)
    charting(sampleName);
}

function demoTable(sampleName) {
    d3.csv("cunning_coyote_all_datasets.csv").then((data) => {
        var tabInfo = data.median_household_income_2021;
        console.log(tabInfo)
        var filtered = tabInfo.filter(x => x.Year == sampleName)[0];
        console.log(filtered)
        var tablegraphic = d3.select("#sample-metadata");
        tablegraphic.html("")
        
        Object.entries(filtered).forEach(([key,value]) => {
            var row = tablegraphic.append('tr');
            var cell = tablegraphic.append('td');
            cell.text(key.toUpperCase() + `: ${value}`)
            var cell = row.append('td');
        });
    });
}

function charting(sampleName) {
    d3.csv("cunning_coyote_all_datasets.csv").then((data) => {
        var tabInfo = data.percentage_median_income;
        var filtered = tabInfo.filter(x => x.Year.toString() === sampleName)[0];
        console.log(filtered)
        var otu_ids = filtered.percentage_gdp;
        var otu_labels = filtered.percentage_median_income;
        var sample_values = filtered.percentage_cpi;
        
        //bar chart
        var trace1 = {
            type: "bar",
            orientation: "h",
            x: sample_values.slice(1,10),
            y: otu_ids.slice(1,10).map(x => `OTU ${x}`),
        };

        var data1 = [trace1];

        var layout1 = {
            title: "Top 10 OTU",
            // yaxis: dict(autorange="reversed"),
            xaxis: { title: "OTU (Operational Taxonomic Unit) Labels" },
            yaxis: { 
                title: "OTU (Operational Taxonomic Unit) IDs",
                autorange: "reversed"
            }
        };
        Plotly.newPlot("bar", data1, layout1);

        // Add code for bubble chart 
        var trace1 = {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: 'markers',
            marker: {
              color: otu_ids,
              opacity: [1, 0.8, 0.6, 0.4],
              size: sample_values
            }
          };
          
          var data = [trace1];
          
          var layout = {
            showlegend: false,
            height: 600,
            width: 1000
          };
          
          Plotly.newPlot('bubble', data, layout);
    });
}

//initialize Dashboard
dropDownMenu();