$(document).ready(function(){
    $("#search").on("click", function(){
        var searchTerm = $("#searchTerm").val();
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json";
        
        var apiData = [];
        $.ajax(url, {
            dataType: "json",
            data: {
                origin: "*"
            },
            type: "GET",
            success: function(data) {
                console.log(data)
                var html= "";
                for (var i = 0; i < data[1].length; i++){
                    html += "<div class='article'><h3>" + data[1][i] + "</h3>"; 
                    html += "<p>" + data[2][i] + "</p>";
                    html += "<a target='_blank' href='" + data[3][i] + "'><span class='link-spanner'></span></a></div>"
                    console.log(html);
                }
                $(".results").html(html);
            }
        });

    });
});


