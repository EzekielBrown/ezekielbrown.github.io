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
        document.getElementById('total-cases').textContent = totalCases;
        document.getElementById('total-deaths').textContent = totalDeaths;
        document.getElementById('total-vaccinations').textContent = totalVaccinations;
    });

// World Map

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
            document.getElementById("info-cases").innerHTML = row.total_cases ? parseInt(row.total_cases) : "n/a";
            document.getElementById("info-deaths").innerHTML = row.total_deaths ? parseInt(row.total_deaths) : "n/a";
            document.getElementById("info-vaccinated").innerHTML = row.total_vaccinations ? parseInt(row.total_vaccinations) : "n/a";
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