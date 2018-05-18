$(document).ready(function(){
    // If user allowed location to be accessed 
    if(navigator.geolocation) {
        // get current position (latitude and longitude)
        navigator.geolocation.getCurrentPosition(function(position) {
            // Selecting weather button and adding click event   
            $("#weatherBtn").on("click", function(){
                // retrieve JSON from FreeCodeCamp Weather API
                $.getJSON(
                    "https://fcc-weather-api.glitch.me/api/current?lat="+position.coords.latitude+"&lon="+position.coords.longitude, 
                    function(json){
                        // string that will consist of HTML to be added to div
                        var html = "";
                        
                        //Adding city and country - "Denver, US"
                        html += "<h3>" + json.name + ", ";
                        html += json.sys.country + "</h3>";

                        //Adding temperature, description, and icon
                        html += "<h5><span id='temperature'>" + json.main.temp + "</span>°<a id='conversion'>C</a></h5>";
                        html += "<h5>" + json.weather[0].description + "</h5>";
                        html += "<img src='" + json.weather[1].icon + "'></img>";
                        
                        // changing this div's HTML to html
                        $("#locationAndWeather").html(html);

                        // Adding click event to degree letter (C or F) to alternate temperature and letter from Celcius to Farenheit 
                        $("#conversion").on("click", function(){
                            // degree is the text of this a tag
                            var degree = $(this).text();
                            // temperature is the text of span with #temperature id 
                            var temperature = $("#temperature").text();
                            // If degree is C -> convert temperature to Farenheit 
                            if (degree === "C") {
                                temperature = (temperature * 1.8) + 32;
                            } else {
                                // else is F -> convert to celcius
                                temperature = ((temperature - 32) * 5) / 9; 
                            }
                        
                            // Change contents of span to temperature rounded 
                            $("#temperature").text(Math.round(temperature));
                            // Switch degree based on what is currently
                            degree = degree === "C" ? "F" : "C";
                            // Change text of this a tag to new degree symbol
                            $(this).text(degree);

                            
                        });
                });
            });
        });
    }   
});