let cachedVaccinationData = {};
let cashedCasesDeathsData = {};
let selectedCountry = 'New Zealand';
let selectedCaseDeath = {
    new_cases:true,
    new_deaths:true
}
let selectedVaccination = 'total_vaccinations'


// World Map
function worldMap() {
  // Initial dimensions
  var initialWidth = 600;
  var initialHeight = 400;

  // The svg
  var svg = d3.select("svg#worldmap")
      .attr("viewBox", `0 0 ${initialWidth} ${initialHeight}`)
      .attr("preserveAspectRatio", "xMidYMid meet");

  var width = parseInt(svg.style("width"));
  var height = parseInt(svg.style("height"));

  // Map and projection
  var path = d3.geoPath();
  var projection = d3.geoMercator()
      .scale(70)
      .center([0, 20])
      .translate([width / 2, height / 2]);

  // Data and color scale
  var data = d3.map();
  var colorScale = d3.scaleThreshold()
      .domain([10000, 100000, 1000000, 3000000, 10000000, 50000000])
      .range(d3.schemeBlues[7]);

    // Tooltip
    var tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    // Tooltip data
    let populationData = new Map();
    let casesData = new Map();
    let deathData = new Map();
  // Load external data and boot
  d3.queue()
  .defer(d3.json, "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")
  .defer(d3.csv, "https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/latest/owid-covid-latest.csv", function(d) { 
    data.set(d.iso_code, +d.total_cases); 
    populationData.set(d.iso_code, +d.population);
    casesData.set(d.iso_code, +d.total_cases);
    deathData.set(d.iso_code, +d.total_deaths); 
  })
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

              // Tooltip
            tooltip.transition()
                .duration(200)
                .style("opacity", .9);
            tooltip.html(  
                d.properties.name + 
                "<br/>Population: " + (populationData.get(d.id).toLocaleString() || 0) +
                "<br/>Cases: " + (casesData.get(d.id).toLocaleString() || 0) +
                "<br/>Deaths: " + (deathData.get(d.id).toLocaleString() || 0)
            )
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px")
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

            // Tooltip leave animation
              tooltip.transition()
              .duration(500)
              .style("opacity", 0);
      }

      let mouseClick = function(d) {
        console.log("Clicked country id: ", d.id);
        selectedCountry = d.properties.name;
        fetch('https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/latest/owid-covid-latest.csv')
            .then(response => response.text())
            .then(data => {
                d3.csvParse(data, function(row) {
                    if (row.iso_code === d.id) {
                        document.getElementById("info-country").innerHTML = row.location || "n/a";
                        document.getElementById("info-population").innerHTML = row.population ? parseInt(row.population).toLocaleString() : "n/a";
                        document.getElementById("info-cases").innerHTML = row.total_cases ? parseInt(row.total_cases).toLocaleString() : "n/a";
                        document.getElementById("info-deaths").innerHTML = row.total_deaths ? parseInt(row.total_deaths).toLocaleString() : "n/a";
                        document.getElementById("info-vaccinated").innerHTML = row.total_vaccinations ? parseInt(row.total_vaccinations).toLocaleString() : "n/a";

                        const parsedVaccinationData = fetchVaccinations();
                        console.log('onClicked:',parsedVaccinationData)
                        if (parsedVaccinationData.length > 0) {
                            // barGraph(parsedVaccinationData)
                            let latestVaccinationData = null;
                            for (let i = parsedVaccinationData.length - 1; i >= 0; i--) {
                                if (parsedVaccinationData[i].people_vaccinated && parsedVaccinationData[i].people_vaccinated !== "") {
                                    latestVaccinationData = parsedVaccinationData[i];
                                    break;
                                }
                            }
                            if (latestVaccinationData) {
                                document.getElementById("info-vaccinated").innerHTML = latestVaccinationData.people_vaccinated;
                            } else {
                                document.getElementById("info-vaccinated").innerHTML = "n/a";
                            }
                        }
                        drawChart();
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
          .attr("d", d3.geoPath()
              .projection(projection)
          )
          .attr("fill", function(d) {
              d.total = data.get(d.id) || 0;
              return colorScale(d.total);
          })
          .style("stroke", "transparent")
          .attr("class", function(d) { return "Country" })
          .style("opacity", .8)
          .on("mouseover", mouseOver)
          .on("mouseleave", mouseLeave)
          .on("click", mouseClick);
  }

  window.addEventListener("resize", function() {
      width = parseInt(svg.style("width"));
      height = parseInt(svg.style("height"));

      projection
          .translate([width / 2, height / 2]);

      svg.selectAll("path").attr("d", path.projection(projection));
  });
}

async function fetchDeathCaseData() {
    var datasets = [
        {name: "New Cases", url: "https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/jhu/weekly_cases.csv"},
        {name: "New Deaths", url: "https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/jhu/weekly_deaths.csv"}
    ];

    var promises = datasets.map(function(d) {
        return new Promise(function(resolve, reject) {
            d3.csv(d.url, function(error, data) {
                if (error) reject(error);
                else resolve({name: d.name, data: data});
            });
        });
    });
  
    try {
        var values = await Promise.all(promises);
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

        return combinedData;
    } catch (error) {
        console.error("Error loading the CSV data:", error);
        return [];
    }
}

async function fetchVaccinations() {
    if (cachedVaccinationData[selectedCountry]) {
        return cachedVaccinationData[selectedCountry];
    } else {
        // if data is not cached, fetch it from the server
        const vaccinationUrl = `https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/country_data/${selectedCountry}.csv`;
        try {
            const response = await fetch(vaccinationUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const vaccinationData = await response.text();
            const parsedVaccinationData = d3.csvParse(vaccinationData);
            cachedVaccinationData[selectedCountry] = parsedVaccinationData;
            return parsedVaccinationData;
        } catch (error) {
            console.error('Error fetching or parsing vaccination data:', error);
            document.getElementById("info-vaccinated").innerHTML = "n/a";
            return [];
        }
    }
}


async function drawChart() { 
    const lineData = await fetchDeathCaseData();
    const barData = await fetchVaccinations();

    var { svg, x, y0, y1, margin, xAxis, width, height } = setupChart(lineData);

    drawLineChart(svg, x, y0, y1, xAxis, lineData, barData, height, width);

    const processedBarData = processBarChartData(barData);

    drawBarChart(svg, x, processedBarData, height, width);

    svg.append("g")
        .attr("class", "axis axis-left")
        .call(d3.axisLeft(y0))
        .append("text")
        .attr("fill", "#000")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("New Cases");

    svg.append("g")
        .attr("class", "axis axis-right")
        .attr("transform", "translate(" + width + ", 0)")
        .call(d3.axisRight(y1))
        .append("text")
        .attr("fill", "#000")
        .attr("transform", "rotate(-90)")
        .attr("y", -6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("New Deaths");

   var legendData = [];

   if (selectedCaseDeath.new_cases) {
        legendData.push("New Cases");
    }
    if (selectedCaseDeath.new_deaths) {
        legendData.push("New Deaths");
    }

    legendData.push(selectedVaccination.replace(/_/g, ' '));
    // console.log('legend',legendData)
    var legend = svg.selectAll(".legend")
        .data(legendData);

    var legendEnter = legend.enter().append("g")
        .attr("class", "legend")
        .attr("transform", function(d, i) { return "translate(" + (width - 200) + "," + i * 20 + ")"; });

    legendEnter.append("rect")
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", function(d) {
            if (d === "New Cases") return "steelblue";
            if (d === "New Deaths") return "red";
            return "azure";
        });

    legendEnter.append("text")
        .attr("x", 24)
        .attr("y", 9)
        .attr("dy", ".35em")
        .style("text-anchor", "start")
        .text(function(d) { return d; });

    legend.exit().remove();
}

function setupChart(lineData) {
    d3.select("#data-timeline").selectAll("svg").remove();
    var margin = { top: 10, right: 60, bottom: 50, left: 60 },
        width = 660 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    var svg = d3.select("#data-timeline")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var x = d3.scaleTime()
        .domain([d3.min(lineData, function(d) { return d.date; }), new Date()])
        .range([0, width]);

    var xAxis = svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).ticks(7));

    var y0 = d3.scaleLinear()
        .domain([0, d3.max(lineData, function(d) { return d.value; })])
        .range([height, 0]);

    var y1 = d3.scaleLinear()
        .domain([0, d3.max(lineData, function(d) { return d.value; })])
        .range([height, 0]);

    return { svg, x, y0, y1, margin, xAxis, width, height };
}

async function drawLineChart(svg, x, y0, y1, xAxis, lineData, barData, height, width) {
    var linePathLeft = d3.line()
        .x(function(d) { return x(d.date); })
        .y(function(d) { return y0(d.value); });

    var linePathRight = d3.line()
        .x(function(d) { return x(d.date); })
        .y(function(d) { return y1(d.value); });

    var groupedData = d3.nest()
        .key(function(d) { return d.type; })
        .entries(lineData);

    y0.domain([0, d3.max(lineData, function(d) {
        return d.type === "New Cases" ? d.value : 0;
    })]);

    y1.domain([0, d3.max(lineData, function(d) {
        return d.type === "New Deaths" ? d.value : 0;
    })]);

    svg.append("defs").append("clipPath")
        .attr("id", "clip")
        .append("rect")
        .attr("width", width)
        .attr("height", height);

    var lineGroup = svg.append('g')
        .attr("clip-path", "url(#clip)");

    groupedData.forEach(function(group) {
        var linePath = group.key === "New Cases" ? linePathLeft : linePathRight;
        var strokeColor = group.key === "New Cases" ? "steelblue" : "red";
        if (group.key === "New Cases" && selectedCaseDeath.new_cases) {
            lineGroup.append("path")
                .datum(group.values)
                .attr("class", "line")
                .attr("fill", "none")
                .style("stroke", strokeColor)
                .attr("stroke-width", 1.5)
                .attr("d", linePath);
        }

        if (group.key === "New Deaths" && selectedCaseDeath.new_deaths) {
            lineGroup.append("path")
                .datum(group.values)
                .attr("class", "line")
                .attr("fill", "none")
                .style("stroke", strokeColor)
                .attr("stroke-width", 1.5)
                .attr("d", linePath);
        }
    });

    // Add brushing
    var brush = d3.brushX()
        .extent([[0, 0], [width, height]])
        .on("end", updateLineChart);

    lineGroup.append("g")
        .attr("class", "brush")
        .call(brush);

    var idleTimeout;
    function idled() { idleTimeout = null; }

    function updateLineChart() {
        var extent = d3.event.selection;

        if (!extent) {
            if (!idleTimeout) return idleTimeout = setTimeout(idled, 350);
            x.domain(d3.extent(lineData, function(d) { return d.date; }));
        } else {
            x.domain([x.invert(extent[0]), x.invert(extent[1])]);
            lineGroup.select(".brush").call(brush.move, null);
        }

        xAxis.transition().duration(1000).call(d3.axisBottom(x));

        // Update lines
        lineGroup.selectAll(".line")
            .transition()
            .duration(1000)
            .attr("d", function(d) {
                var linePath = d[0].type === "New Cases" ? linePathLeft : linePathRight;
                return linePath(d);
            })
            .style("stroke", function(d) {
                return d[0].type === "New Cases" ? "steelblue" : "red";
            });

        // Update bar chart with the filtered data
        const filteredBarData = processBarChartData(barData.filter(d => {
            return x.domain()[0] <= new Date(d.date) && new Date(d.date) <= x.domain()[1];
        }));
        drawBarChart(svg, x, filteredBarData, height, width);
    }
}

function processBarChartData(data) {
    const monthlyLastEntry = {};

    data.forEach(function(d) {
        const dateParts = d.date.split('-');
        const year = dateParts[0];
        const month = parseInt(dateParts[1]);

        if (!monthlyLastEntry[year]) {
            monthlyLastEntry[year] = {};
        }

        // Always store the last entry of the month
        monthlyLastEntry[year][month] = d;
    });
    const processedBarData = [];

    Object.keys(monthlyLastEntry).forEach(function(year) {
        Object.keys(monthlyLastEntry[year]).forEach(function(month) {
            const selectedAttribute = document.querySelector('input[name="vaccinationToggle"]:checked').value;
            processedBarData.push({
                date: `${year}-${month}`, // Format key as "YYYY-MM"
                value: Number(monthlyLastEntry[year][month][selectedAttribute])
            });
        });
    });
    // console.log('Processed Bar Data:', processedBarData);
    return processedBarData;
}


    function drawBarChart(svg, x, data, height, width) {
        d3.select('body').append('div')
            .attr('id', 'bar-tooltip')
            .style('position', 'absolute')
            .style('text-align', 'center')
            .style('width', '120px')
            .style('height', '28px')
            .style('padding', '2px')
            .style('font', '12px sans-serif')
            .style('background', 'lightsteelblue')
            .style('border', '0px')
            .style('border-radius', '8px')
            .style('pointer-events', 'none')
            .style('opacity', 0);

        var barGroup = svg.selectAll('.bar-group').data([null]);
        
        if (barGroup.empty()) {
            barGroup = svg.insert('g', '.line-group')
                .attr('class', 'bar-group');
        }

        // Convert aggregated monthly data to array
        const processedData = data.map(d => {
            var [year, month] = d.date.split('-');
            return {
                date: new Date(year, month - 1),
                value: d.value,
            };
        });

        var xBar = d3.scaleBand()
            .domain(processedData.map(d => d.date))
            .range([0, width])
            .padding(0.1);

        var yBar = d3.scaleLinear()
            .domain([0, d3.max(processedData, d => d.value)])
            .range([height, 0]);

        var bars = barGroup.selectAll(".bar")
            .data(processedData)
            
        const vaccinationMapper = {
            total_vaccinations : "Total Vaccinations",
            people_vaccinated : "People Vaccinated",
            people_fully_vaccinated: "Fully Vaccinated",
            total_boosters: "Total Boosters"
        }

        bars.enter().append("rect")
            .attr("class", "bar")
            .merge(bars)
            .attr("x", d => xBar(d.date))
            .attr("y", d => yBar(d.value))
            .attr("width", xBar.bandwidth())
            .attr("height", d => height - yBar(d.value))
            .attr("fill", "#cce5df")
            .attr("opacity", 0.5)
            .on('mouseover', function(event, d) {
                // Show the tooltip
                d3.select('#bar-tooltip')
                    .style('opacity', 1)
                    .html(`${vaccinationMapper[selectedVaccination]} (${data[d].date}): ${data[d].value}`)
                    .style('left', (event.pageX + 5) + 'px')
                    .style('top', (event.pageY - 28) + 'px');
            })
            .on('mouseout', function(d) {
                d3.select('#bar-tooltip')
                    .style('opacity', 0);
            });
        
    

        bars.exit().remove();

        svg.select(".x-axis").remove(); // remove x-axis after rendered

        svg.select(".y-axis").remove();
        svg.append("g")
            .attr("class", "y-axis")
            .call(d3.axisLeft(yBar).tickSize(0).tickFormat(() => ''))
            .selectAll("text").remove();
    }




async function onLoaded() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/latest/owid-covid-latest.csv');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.text();
        const parsedData = Papa.parse(data, { header: true }).data;

        const filteredData = parsedData.filter(row => row['iso_code'] === 'OWID_WRL');

        let totalCases = 0;
        let totalDeaths = 0;
        let totalVaccinations = 0;

        filteredData.forEach(row => {
            totalCases += Number(row['total_cases']) || 0;
            totalDeaths += Number(row['total_deaths']) || 0;
            totalVaccinations += Number(row['total_vaccinations']) || 0;
        });

        document.getElementById('total-cases').textContent = totalCases.toLocaleString();
        document.getElementById('total-deaths').textContent = totalDeaths.toLocaleString();
        document.getElementById('total-vaccinations').textContent = totalVaccinations.toLocaleString();

        const [latestCountryData] = parsedData.filter(r => r.location === selectedCountry);

        document.getElementById("info-country").innerHTML = latestCountryData.location || "n/a";
        document.getElementById("info-population").innerHTML = latestCountryData.population ? parseInt(latestCountryData.population).toLocaleString() : "n/a";
        document.getElementById("info-cases").innerHTML = latestCountryData.total_cases ? parseInt(latestCountryData.total_cases).toLocaleString() : "n/a";
        document.getElementById("info-deaths").innerHTML = latestCountryData.total_deaths ? parseInt(latestCountryData.total_deaths).toLocaleString() : "n/a";

        const parsedVaccinationData = await fetchVaccinations();


        if (parsedVaccinationData.length > 0) {
            let latestVaccinationData = null;
            for (let i = parsedVaccinationData.length - 1; i >= 0; i--) {
                if (parsedVaccinationData[i].people_vaccinated && parsedVaccinationData[i].people_vaccinated !== "") {
                    latestVaccinationData = parsedVaccinationData[i];
                    break;
                }
            }
            if (latestVaccinationData) {
                document.getElementById("info-vaccinated").innerHTML = latestVaccinationData.people_vaccinated;
            } else {
                document.getElementById("info-vaccinated").innerHTML = "n/a";
            }
        }
    } catch (error) {
        console.error('Error loading data:', error);
        document.getElementById("info-vaccinated").innerHTML = "n/a";
    }

    document.querySelectorAll('input[type="radio"]').forEach(checkbox => {
        checkbox.addEventListener('change', function(e) {
            if (selectedCountry) {
                if(e.target.value){
                    selectedVaccination = e.target.value
                    drawChart();
                }
                // console.log(e.target.value)
            } else {
                 console.log('Country is not selected!');
            }
        });
    });
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', function(e) {
            if (selectedCountry) {
                if (e.target.checked) {
                    drawChart();
                    selectedCaseDeath[e.target.value]=true;
                    // console.log(`${e.target.value} checkbox is checked.`);
                } else {
                    drawChart();
                    selectedCaseDeath[e.target.value]=false;
                    // console.log(`${e.target.value} checkbox is unchecked.`);
                }
                // console.log(selectedCaseDeath)
            } else {
                console.log('Country is not selected!');
            }
        });
    });
}
  
// last update subheader
function lastUpdate() {
    fetch('https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/latest/owid-covid-latest.csv')
    .then(response => response.text())
    .then(data => {
        const rows = data.split('\n');
        const headers = rows[0].split(',');
        const lastUpdatedIndex = headers.indexOf('last_updated_date');

        let mostRecentDate = '';
        for (let i = 1; i < rows.length; i++) {
            const row = rows[i].split(',');
            if (row[lastUpdatedIndex] > mostRecentDate) {
                mostRecentDate = row[lastUpdatedIndex];
            }
        }

        // Convert date
        const dateParts = mostRecentDate.split('-');
        const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;

        // Show recent
        document.querySelector('.header-sub').textContent = `*last update: ${formattedDate}`;
    });
}

window.onload = function() {
    onLoaded();
    lastUpdate();
    worldMap();
    drawChart()
}
