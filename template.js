function generate_units()
{

var sources = []

/* randomly sort the sources */
sources.sort(function() {return 0.5 - Math.random()} );

/* guarantee that the fourth unit is Amazon */
if (sources[3][0] != "Amazon.com") {
    var Amazon_index = -1;
    for (a = 0; a < sources.length; a++) {
        if (sources[a][0] == "Amazon.com") {
            Amazon_index = a;
            break;
        }
    }
    if (Amazon_index != -1) {
        var temp = sources[3];
        sources[3] = sources[Amazon_index];
        sources[Amazon_index] = temp;
    }
}

/* guarantee that the first unit is a general news source */
if (sources[0][1] != "general") {
    var general_index = -1;
    for (b = 0; b < sources.length; b++) {
        if (sources[b][1] == "general") {
            general_index = b;
            break;
        }
    }
    if (general_index != -1) {
        var temp = sources[0];
        sources[0] = sources[general_index];
        sources[general_index] = temp;
    }
}

var number_of_rows = Math.ceil(sources.length / 4);

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
            
            var unit_top = document.createElement("div");
            var unit_bottom = document.createElement("div");
            
            // checkerboard pattern for blue vs. red units
            if ((i % 2 == 0 && j % 2 == 0) || (i % 2 != 0 && j % 2 != 0)) {
                unit_top.className = "unit-even-top";
                unit_bottom.className = "unit-even-bottom";
            }
            else {
                unit_top.className = "unit-odd-top";
                unit_bottom.className = "unit-odd-bottom";
            }
            
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