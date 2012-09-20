function generate_units()
{
    
    
//alert('I came from an external script! Ha, Ha, Ha!!!!');

var sources = []

sources[0] = ['The New York Times', 'general', 'Lorem Ipsum', 'http://www.google.com', 'Lorem Ipsum 2', 'http://www.google.com', 'Lorem Ipsum 3', 'http://www.google.com']

sources[1] = ['Bloomberg', 'general', 'Lorem Ipsum', 'http://www.google.com', 'Lorem Ipsum 2', 'http://www.google.com', 'Lorem Ipsum 3', 'http://www.google.com']

sources[2] = ['Discover', 'general', 'Lorem Ipsum', 'http://www.google.com', 'Lorem Ipsum 2', 'http://www.google.com', 'Lorem Ipsum 3', 'http://www.google.com']

sources.sort(function() {return 0.5 - Math.random()} )

alert(sources)

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
        }
    }
    
    document.body.appendChild(container_row);
}



} 