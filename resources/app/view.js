var current_version = "v0.1"

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
 }
 
$(document).ready(function () {
    $("a").click( function (event) {  
        var ele = $(this)
        event.preventDefault();
        PerformJSDuty(ele);
    });
});