var mapObj = mapObj || {};

mapObj.initMap = function() {
                    var myLatLong = new google.maps.LatLng( 45.2500,19.8500  );
                    var mapProp = {
                        center: myLatLong,
                        zoom:12,
                        navigationControl: false,
                        mapTypeControl: false,
                        scaleControl: false,
                        draggable: false,
                        mapTypeId:google.maps.MapTypeId.ROADMAP
                    };

                    var map=new google.maps.Map( document.getElementById("map"),mapProp );

                    var marker = new google.maps.Marker({
                        position: myLatLong,
                        map:map,
                    });
                };

                    
function loadScript(src, callback){
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    script.addEventListener('load', function() { callback && callback(); });
    document.getElementsByTagName("head")[0].appendChild(script);
}

//execute google api on window load
window.onload = function() {
    setTimeout(function(){
        if( document.getElementById('map') && mapObj.initMap() ) {
            loadScript('https://maps.googleapis.com/maps/api/js', function(){
                mapObj.initMap();
            });
        }
    }, 2000)
};