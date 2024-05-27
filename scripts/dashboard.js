// Fetch the latest data and display info
fetch('https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/latest/owid-covid-latest.csv')
    .then(response => response.text())
    .then(data => {

        const parsedData = Papa.parse(data, { header: true }).data;
        const filteredData = parsedData.filter(row => row['iso_code'] === 'OWID_WRL');

        // get world cases
        let totalCases = 0;
        filteredData.forEach(row => {
            const cases = Number(row['total_cases']);
            if (!isNaN(cases)) {
                totalCases += cases;
            }
        });

        // get world deaths
        let totalDeaths = 0;
        filteredData.forEach(row => {
            const deaths = Number(row['total_deaths']);
            if (!isNaN(deaths)) {
                totalDeaths += deaths;
            }
        });

        // get world vaccinations
        let totalVaccinations = 0;
        filteredData.forEach(row => {
            const vaccinations = Number(row['total_vaccinations']);
            if (!isNaN(vaccinations)) {
                totalVaccinations += vaccinations;
            }
        });

        // update html elements
        document.getElementById('total-cases').textContent = totalCases.toLocaleString();
        document.getElementById('total-deaths').textContent = totalDeaths.toLocaleString();
        document.getElementById('total-vaccinations').textContent = totalVaccinations.toLocaleString();
    });

// World Map

function worldMap() {
  // The svg
  var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

  // Map and projection
  var path = d3.geoPath();
  var projection = d3.geoMercator()
    .scale(70)
    .center([0,20])
    .translate([width / 2, height / 2]);

  // Data and color scale
  var data = d3.map();
  var colorScale = d3.scaleThreshold()
    .domain([100000, 1000000, 10000000, 30000000, 100000000, 500000000])
    .range(d3.schemeBlues[7]);

  // Load external data and boot
  d3.queue()
    .defer(d3.json, "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")
    .defer(d3.csv, "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world_population.csv", function(d) { data.set(d.code, +d.pop); })
    .await(ready);

  function ready(error, topo) {

    let mouseOver = function(d) {
      d3.selectAll(".Country")
        .transition()
        .duration(200)
        .style("opacity", .5)
      d3.select(this)
        .transition()
        .duration(200)
        .style("opacity", 1)
        .style("stroke", "black")
    }

    let mouseLeave = function(d) {
      d3.selectAll(".Country")
        .transition()
        .duration(200)
        .style("opacity", .8)
      d3.select(this)
        .transition()
        .duration(200)
        .style("stroke", "transparent")
    }

  // add mouse click function
    let mouseClick = function(d) {
      console.log("Clicked country id: ", d.id);
      fetch('https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/latest/owid-covid-latest.csv')
        .then(response => response.text())
        .then(data => {
          d3.csvParse(data, function(row) {
            if(row.iso_code === d.id) {
              document.getElementById("info-country").innerHTML = row.location || "n/a";
              document.getElementById("info-population").innerHTML = row.population ? parseInt(row.population).toLocaleString() : "n/a";
              document.getElementById("info-cases").innerHTML = row.total_cases ? parseInt(row.total_cases).toLocaleString() : "n/a";
              document.getElementById("info-deaths").innerHTML = row.total_deaths ? parseInt(row.total_deaths).toLocaleString() : "n/a";
              document.getElementById("info-vaccinated").innerHTML = row.total_vaccinations ? parseInt(row.total_vaccinations).toLocaleString() : "n/a";

              timelineGraph();
            }
          });
        });
    }
    
    // Draw the map
    svg.append("g")
      .selectAll("path")
      .data(topo.features)
      .enter()
      .append("path")
        // draw each country
        .attr("d", d3.geoPath()
          .projection(projection)
        )
        // set the color of each country
        .attr("fill", function (d) {
          d.total = data.get(d.id) || 0;
          return colorScale(d.total);
        })
        .style("stroke", "transparent")
        .attr("class", function(d){ return "Country" } )
        .style("opacity", .8)
        .on("mouseover", mouseOver )
        .on("mouseleave", mouseLeave )
        .on("click", mouseClick);
      }
}

function barGraph() {
  var margin = {top: 10, right: 30, bottom: 30, left: 60},
  width = 260 - margin.left - margin.right,
  height = 200 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz1")
.append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
.append("g")
  .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

// Initialize the X axis
var x = d3.scaleBand()
.range([ 0, width ])
.padding(0.2);
var xAxis = svg.append("g")
.attr("transform", "translate(0," + height + ")")

// Initialize the Y axis
var y = d3.scaleLinear()
.range([ height, 0]);
var yAxis = svg.append("g")
.attr("class", "myYaxis")


// A function that create / update the plot for a given variable:
function update(selectedVar) {

// Parse the Data
d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/barplot_change_data.csv", function(data) {

  // X axis
  x.domain(data.map(function(d) { return d.group; }))
  xAxis.transition().duration(1000).call(d3.axisBottom(x))

  // Add Y axis
  y.domain([0, d3.max(data, function(d) { return +d[selectedVar] }) ]);
  yAxis.transition().duration(1000).call(d3.axisLeft(y));

  // variable u: map data to existing bars
  var u = svg.selectAll("rect")
    .data(data)

  // update bars
  u
    .enter()
    .append("rect")
    .merge(u)
    .transition()
    .duration(1000)
      .attr("x", function(d) { return x(d.group); })
      .attr("y", function(d) { return y(d[selectedVar]); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d[selectedVar]); })
      .attr("fill", "#69b3a2")
})

}

// Initialize plot
update('var1')
}


function timelineGraph(datasetName) {
  // Remove existing graph if it exists
  d3.select("#data-timeline svg").remove();

  // set the dimensions and margins of the graph
  var margin = {top: 10, right: 30, bottom: 30, left: 60},
      width = 660 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  var svg = d3.select("#data-timeline")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Get selected country
  var selectedCountry = document.getElementById("info-country") ? document.getElementById("info-country").innerHTML.trim() : "World";
  console.log("Selected country:", selectedCountry); // Debugging statement

  // Define the two datasets
  var datasets = [
      {name: "New Cases", url: "https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/jhu/new_cases.csv"},
      {name: "New Deaths", url: "https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/jhu/new_deaths.csv"}
  ];

  // Filter the datasets based on the provided datasetName
  datasets = datasets.filter(function(d) {
      return d.name === datasetName;
  });

  // Load the data
  var promises = datasets.map(function(d) {
      return new Promise(function(resolve, reject) {
          d3.csv(d.url, function(error, data) {
              if (error) reject(error);
              else resolve({name: d.name, data: data});
          });
      });
  });

  Promise.all(promises)
      .then(function(values) {       
          // Combine and process data
          var combinedData = [];
          values.forEach(function(dataset) {
              dataset.data.forEach(function(row) {
                  var date = new Date(row.date);
                  var value = +row[selectedCountry];
                  if (!isNaN(value)) {
                      combinedData.push({
                          date: date,
                          value: value,
                          type: dataset.name
                      });
                  }
              });
          });

          // Add X axis --> it is a date format
          var x = d3.scaleTime()
              .domain([d3.min(combinedData, function(d) { return d.date; }), new Date()])
              .range([ 0, width ]);
          var xAxis = svg.append("g")
              .attr("transform", "translate(0," + height + ")")
              .call(d3.axisBottom(x).ticks(7));

          // Add Y axis
          var y = d3.scaleLinear()
              .domain([0, d3.max(combinedData, function(d) { return d.value; })])
              .range([ height, 0 ]);
          var yAxis = svg.append("g")
              .call(d3.axisLeft(y));

          // Add a clipPath: everything out of this area won't be drawn.
          var clip = svg.append("defs").append("svg:clipPath")
              .attr("id", "clip")
              .append("svg:rect")
              .attr("width", width )
              .attr("height", height )
              .attr("x", 0)
              .attr("y", 0);

          // Add brushing
          var brush = d3.brushX()
              .extent([ [0,0], [width,height] ])
              .on("end", updateChart);

          // Create the line variable: where both the line and the brush take place
          var line = svg.append('g')
              .attr("clip-path", "url(#clip)");

          // Draw the lines
          var linePath = d3.line()
              .x(function(d) { return x(d.date); })
              .y(function(d) { return y(d.value); });

          var groupedData = d3.nest()
              .key(function(d) { return d.type; })
              .entries(combinedData);

          groupedData.forEach(function(group) {
              line.append("path")
                  .datum(group.values)
                  .attr("class", "line")
                  .attr("fill", "none")
                  .attr("stroke", group.key === "New Cases" ? "steelblue" : "red")
                  .attr("stroke-width", 1.5)
                  .attr("d", linePath);
          });

          // Add the brushing
          line
              .append("g")
              .attr("class", "brush")
              .call(brush);

          // A function that set idleTimeOut to null
          var idleTimeout;
          function idled() { idleTimeout = null; }

          // A function that update the chart for given boundaries
          function updateChart() {
              // What are the selected boundaries?
              var extent = d3.event.selection;

              // If no selection, back to initial coordinate. Otherwise, update X axis domain
              if(!extent){
                  if (!idleTimeout) return idleTimeout = setTimeout(idled, 350); // This allows to wait a little bit
                  x.domain([d3.min(combinedData, function(d) { return d.date; }), new Date()]);
              }else{
                  x.domain([ x.invert(extent[0]), x.invert(extent[1]) ]);
                  line.select(".brush").call(brush.move, null); // This removes the grey brush area as soon as the selection has been done
              }

              // Update axis and line position
              xAxis.transition().duration(1000).call(d3.axisBottom(x));
              line.selectAll(".line")
                  .transition()
                  .duration(1000)
                  .attr("d", linePath);
          }

          // If user double click, reinitialize the chart
          svg.on("dblclick", function(){
              x.domain([d3.min(combinedData, function(d) { return d.date; }), new Date()]);
              xAxis.transition().call(d3.axisBottom(x));
              line.selectAll(".line")
                  .transition()
                  .attr("d", linePath);
          });
      })
      .catch(function(error) {
          console.error("Error loading the CSV data:", error);
      });
}

document.getElementById("selectButton").addEventListener("change", function() {
  timelineGraph(this.value);
});

// Initialize the graph with default dataset
timelineGraph("New Cases");