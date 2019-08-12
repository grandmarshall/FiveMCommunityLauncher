var current_version = "v1.0"

function PerformJSDuty(ele) {
    if (ele.attr("id") == "connect") {
        var servers = $(".carousel-item");
        var server = null;
        for (var i=0; servers.length; i++) {
        if ($(servers[i]).hasClass("active")) {
            server = servers[i];
            break;
        }
        }
        if (server != null) {
            var i = document.createElement('iframe');
            i.style.display = 'none';
            i.onload = function() { i.parentNode.removeChild(i); };
            i.src = "fivem://" + server.id;
            document.body.appendChild(i);
        }
    }
    else if (ele.attr("id") == "update-url") {
        require('electron').shell.openExternal(ele.attr("href"));
    }
}

$(document).ready(function () {
    $("#update-alert").hide()
     
    $("a").click( function (event) {  
        var ele = $(this);
        event.preventDefault();
        PerformJSDuty(ele);
    });
    $.ajax({
        type: "GET",
        url: "https://api.github.com/repos/grandmarshall/FiveMCommunityLauncher/releases/latest",
        dataType: "json",
        success: function(result) {
        
            if (result.tag_name != current_version) {
                $("#update-alert").show();
                $("#update-url").html("https://github.com/grandmarshall/FiveMCommunityLauncher/archive/" + result.tag_name + ".zip");
                $("#update-url").attr("href", "https://github.com/grandmarshall/FiveMCommunityLauncher/archive/" + result.tag_name + ".zip"); 
            }
        }
    });
});