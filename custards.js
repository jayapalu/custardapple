
$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
});

if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(loadMap);
} else {
    alert("Geolocation API not supported.");
}

function loadMap(position){
   var coords = new google.maps.LatLng(18.20102, 79.10076);
   var mapOptions = {
            zoom: 15,
            center: coords,
            mapTypeControl: true,
            //mapTypeId: google.maps.MapTypeId.ROADMAP
            mapTypeId: google.maps.MapTypeId.HYBRID
        };
    //create the map, and place it in the HTML map div
    map = new google.maps.Map(
    document.getElementById("locateOnMap"), mapOptions
    );

    //place the initial marker
    var marker = new google.maps.Marker({
    position: coords,
    map: map,
    title: "Vidhath Custard apple farm"
    });
}
if (window.File && window.FileReader && window.FileList && window.Blob) {
  // Great success! All the File APIs are supported.
	loadGallery();
} else {
  alert('The File APIs are not fully supported in this browser.');
}
function loadGallery(){
	var currentLocatn=window.location.href;
	var splitArray=currentLocatn.split('/');
	var path=currentLocatn.substring(0,currentLocatn.indexOf(splitArray[splitArray.length-1]));
	 $.get("https://www.w3schools.com/bootstrap/", function(data) 
        {
            alert(data);
        });
}

