// var width = 500, height = 500;
var width = window.innerWidth * 0.9;
var height = window.innerHeight * 0.6; 
// var width = window.innerWidth * 0.9;  // Adjust width based on window size
// var height = width * 0.625;          // Maintain aspect ratio (500 / 800 = 0.625)

var svg = d3.select("#map").append("svg")   
    .attr("width", width)
    .attr("height", height);

// var width = svg.node().getBoundingClientRect().width;
// var height = svg.node().getBoundingClientRect().height;

var scale = Math.min(width, height) / 2;  // Adjust scale relative to container size
console.log(width);
console.log(height);
console.log(scale);

var projection = d3.geoOrthographic()
    .scale(scale)
    // .scale(200)
    .translate([width / 2, height / 2])
    ;

var path = d3.geoPath().projection(projection);

// Function to set visibility
function setVisibility() {
    const offset = 90; // Offset for 1 quarter Earth rotation (90 degrees)

    svg.selectAll("circle")
        .each(function(d) {
          var coords = projection([d.lon-offset, d.lat]);

            var visibility = Math.abs(coords[0]) < width / 2 && Math.abs(coords[1]) < height / 2 ? "visible" : "hidden";
            d3.select(this).attr("visibility", visibility);
        });
}

var drag = d3.drag()
    .on("drag", function() {
        var rotation = projection.rotate();
        var x = d3.event.dx * 0.1; // adjust for sensitivity
        var y = d3.event.dy * 0.1; // adjust for sensitivity
        projection.rotate([rotation[0] - x, rotation[1]]);
        svg.selectAll("path").attr("d", path); // re-render map

        // Also rotate circles
        svg.selectAll("circle")
            .attr("cx", function(d) { return projection([d.lon, d.lat])[0]; })
            .attr("cy", function(d) { return projection([d.lon, d.lat])[1]; });

        // Update visibility after drag
        setVisibility();
    });

svg.call(drag);

// Define the div for the tooltip
var tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0)

d3.json("https://d3js.org/world-110m.v1.json").then(function(world) {
    svg.append("g")
        .selectAll("path")
        .data(topojson.feature(world, world.objects.countries).features)
        .enter().append("path")
        .attr("d", path)
        .attr("class", "country");

    d3.json("/assets/json/countries.json").then(function(countries) {
        renderCircles(countries);

        // initally set visibility
        setVisibility();
    });
});

function renderCircles(countries) {svg.selectAll("circle")
    .data(countries)
    .enter().append("circle")
    .attr("cx", function(d) { 
        var coords = projection([d.lon, d.lat]);
        return coords[0]; 
    })
    .attr("cy", function(d) { 
        var coords = projection([d.lon, d.lat]);
        return coords[1]; 
    })
    .attr("r", 5)
    .attr("fill", "red")
    .on("mouseover", function(d) {
        tooltip.transition().duration(200).style("opacity", .9);
        tooltip.html(d.country + " , visited in " + d.year)
            .style("left", (event.pageX + 5) + "px")
            .style("top", (event.pageY - 28) + "px");
    })
    .on("mouseout", function(d) {
        tooltip.style("opacity", 0)
    })
    .attr("fill", "var(--global-highlight-color)");
}

window.addEventListener("resize", function() {
//   var width = document.getElementById("map").clientWidth;
//   var height = width * 0.625;  // Maintain a 4:3 aspect ratio (adjust as necessary)
    var width = window.innerWidth * 0.9;
    var height = window.innerHeight * 0.6; 

  // Update scale based on new width/height
  var scale = Math.min(width, height) / 2;
  projection.scale(scale);

  console.log(width);
  console.log(height);
  console.log(scale);

  svg.attr("width", width).attr("height", height);
  svg.selectAll("path").attr("d", path); // Re-render paths to fit new projection
  d3.json("/assets/json/countries.json").then(function(countries) {
        renderCircles(countries); // Re-render circles on resize
    });
});