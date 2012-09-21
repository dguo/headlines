function generate_units()
{

var sources = []

sources[0] = ['NASA Picture of the Day', 'general', 'http://www.nasa.gov', 'Sunrise Analemma (with a little extra)', 'http://apod.nasa.gov/apod/astropix.html', 'test2 adsflkjasd alsdjfl;adf  a lkj', 'http://google.com', 'test3', 'http://wired.com']

sources[1] = ['Cracked', 'random', 'http://www.cracked.com', 0, 'Lorem Ipsum 2', 'http://www.google.com', 'Lorem Ipsum 3', 'http://www.google.com']

sources[2] = ['Discovery', 'science-and-health', 'http://www.google.com', 'Lorem Ipsum 2', 'http://www.google.com', 'Lorem Ipsum 3', 'http://www.google.com']

sources[3] = ['Amazon', 'daily', 'http://www.google.com']

sources[4] = ['Wired', 'technology', 'http://www.wired.com']

sources.sort(function() {return 0.5 - Math.random()} )

var number_of_rows = Math.ceil(sources.length / 4)

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
            unit_top.className = sources[index][1] + "-top";
            var unit_bottom = document.createElement("div");
            unit_bottom.className = sources[index][1] + "-bottom";
            
            // put logo and link to home page in top part of unit
            var source_logo_name = sources[index][0].replace(/ /g, "_") + ".png";
            var source_logo_location = "logos/" + source_logo_name;
            var logo_tag = '<img src="' + source_logo_location + '" alt="' + sources[index][0] + '" style="padding:5px;"/>';
            var name_tag = '<a href="' + sources[index][2] + '">' + sources[index][0] + '</a>';
            unit_top.innerHTML = logo_tag + '<br>' + name_tag;
            
            
            // put links or link+image into bottom part of unit
            
            var bottomHTML = "";
            
            //if (sources[index][3] == 1) {
            //    bottomHTML = '<p><a href="' + sources[index][5] + '">' + sources[index][4] + '</a></p>';
            //    bottomHTML = bottomHTML + '<br><br>' + '<img style="max-width: 70%; max-height: 70%" display: block; src="' + sources[index][6] + '" alt="' + sources[index][5] + '" class="center"/>';
            //}
            
            
            for (k = 3; k + 1 < sources[index].length; k = k + 2) {  
                bottomHTML = bottomHTML + '<a href="' + sources[index][k+1] + '">' + sources[index][k] + '</a>';
                if (k != sources[index].length - 2) {
                    bottomHTML = bottomHTML + '<br><br>';
                }
            }
            
            unit_bottom.innerHTML = '<p>' + bottomHTML + '</p>';
            
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