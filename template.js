function generate_units()
{

var sources = []

/* randomly sort the sources */
sources.sort(function() {return 0.5 - Math.random()} );

/* now sort by category */
sources.sort(function(a, b) { return (a[1] < b[1] ? -1 : (a[1] > b[1] ? 1 : 0)); });

/* splice in Amazon */
var Amazon = sources[sources.length - 1]
sources.splice(sources.length - 1, 1);
sources.splice(3, 0, Amazon);

var number_of_rows = Math.ceil(sources.length / 4);

var currentCategory = "null";

for (i = 0; i < number_of_rows; i++) {
    
    var container_row = document.createElement("div");
    container_row.className = "container row" + i;
    
    var row = document.createElement("div");
    row.className = "row";
    container_row.appendChild(row);
    
    var unit1 = document.createElement("div");
    unit1.className = "threecol";
    
    var unit2 = document.createElement("div");
    unit2.className = "threecol";
    
    var unit3 = document.createElement("div");
    unit3.className = "threecol";
    
    var unit4 = document.createElement("div");
    unit4.className = "threecol last";
    
    for (j = 0; j < 4; j++) {
        
        var index = (i * 4) + j;
        if (index < sources.length) {
            
            /* set id attributes for first row of each category, excluding Amazon.com */
            if (sources[index][1] != currentCategory && sources[index][0] != "Amazon.com") {
                container_row.id = sources[index][1];
                currentCategory = sources[index][1];
            }
            
            var unit_top = document.createElement("div");
            var unit_bottom = document.createElement("div");
            
            unit_top.className = "unit-top";
            unit_bottom.className = "unit-bottom";
            
            var category = sources[index][1];
            if (category == "a.general") unit_bottom.className = unit_bottom.className + " white";
            else if (category == "business") unit_bottom.className = unit_bottom.className + " green";
            else if (category == "entertainment") unit_bottom.className = unit_bottom.className + " purple";
            else if (category == "politics") unit_bottom.className = unit_bottom.className + " brown";
            else if (category == "random") unit_bottom.className = unit_bottom.className + " black";
            else if (category == "science_and_health") unit_bottom.className = unit_bottom.className + " blue";
            else if (category == "sports") unit_bottom.className = unit_bottom.className + " red";
            else if (category == "technology") unit_bottom.className = unit_bottom.className + " orange";
            else if (category == "z.daily") unit_bottom.className = unit_bottom.className + " gold";
            
            // put logo and link to home page in top part of unit
            var source_logo_name = sources[index][0].replace(/ /g, "_") + ".png";
            var source_logo_location = "logos/" + source_logo_name;
            var logo_tag = '<img src="' + source_logo_location + '" alt="' + sources[index][0] + '" style="padding:5px;"/>';
            var name_tag = '<a href="' + sources[index][2] + '">' + sources[index][0] + '</a>';
            unit_top.innerHTML = logo_tag + '<br>' + name_tag;
            
            
            // put links in list in bottom part of unit
            
            var bottomHTML = "<ul>";
            
            //if (sources[index][3] == 1) {
            //    bottomHTML = '<p><a href="' + sources[index][5] + '">' + sources[index][4] + '</a></p>';
            //    bottomHTML = bottomHTML + '<br><br>' + '<img style="max-width: 70%; max-height: 70%" display: block; src="' + sources[index][6] + '" alt="' + sources[index][5] + '" class="center"/>';
            //}
            
            for (k = 3; k + 1 < sources[index].length; k = k + 2) {  
                bottomHTML = bottomHTML + '<li><a href="' + sources[index][k+1] + '">' + sources[index][k] + '</li></a>';
                if (k != sources[index].length - 2) {
                   // bottomHTML = bottomHTML + '<br><br>';
                }
            }
            
            unit_bottom.innerHTML = "<p>" + bottomHTML + "</ul></p>";
            
            if (j == 0) {
                unit1.appendChild(unit_top);
                unit1.appendChild(unit_bottom);
            }
            else if (j == 1) {
                unit2.appendChild(unit_top);
                unit2.appendChild(unit_bottom);
            }
            else if (j == 2) {
                unit3.appendChild(unit_top);
                unit3.appendChild(unit_bottom);
            }
            else if (j == 3) {
                unit4.appendChild(unit_top);
                unit4.appendChild(unit_bottom);
            }
        }
    }
    
    row.appendChild(unit1);
    row.appendChild(unit2);
    row.appendChild(unit3);
    row.appendChild(unit4);
    
    document.body.appendChild(container_row);
}

} 