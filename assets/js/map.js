var width = 960, height = 500;

var svg = d3.select("#map").append("svg")   
.attr('preserveAspectRatio','xMinYMin meet')
.attr('viewBox','0 0 960 500')
.append("g")

var projection = d3.geoOrthographic();

var path = d3.geoPath().projection(projection);

var drag = d3.drag()
    .on("drag", function() {
        var rotation = projection.rotate();
        var x = d3.event.dx * 0.1; // adjust for sensitivity
        var y = d3.event.dy * 0.1; // adjust for sensitivity
        projection.rotate([rotation[0] - x, rotation[1]]);
        svg.selectAll("path").attr("d", path); // re-render map
    });

// Define the div for the tooltip
var tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0)

// Load the map data and country data
Promise.all([
    d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-50m.json"),
    d3.json("/assets/json/countries.json")
  ]).then(function([world, countries]) {
    // Extract the list of visited country names
    const countryNames = countries.map(d => d.country);

    const countryTips = {};
    countries.forEach(d => {
        countryTips[d.country] = d.tip;
    });

    svg.append("g")
        .selectAll("path")
        .data(topojson.feature(world, world.objects.countries).features)
        .enter().append("path")
        .attr("d", path)
        .style("fill", function(d) {
            return countryNames.includes(d.properties.name) ? "var(--global-highlight-color)" : "var(--global-text-color-light)";
        })
        .on("mouseover", function(d) {
            const countryName = d.properties.name;
            const tip = countryTips[countryName];

            if(countryNames.includes(d.properties.name)) {
                tooltip.transition().duration(200).style("opacity", .9);
                tooltip.html(tip ? countryName + ", " + tip : countryName)
                    .style("left", (event.pageX + 5) + "px")
                    .style("top", (event.pageY - 28) + "px");
            }
        })
        .on("mouseout", function(d) {
            tooltip.style("opacity", 0)
        });
});

svg.append("rect")
   .attr("width", width)
   .attr("height", height)
   .attr("fill", "transparent")
   .lower(); // Send it to the back

svg.call(drag);