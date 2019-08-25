
$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  google.maps.event.addDomListener(window, "load", loadMap);
  loadGallery();
  /*$.get("/Users/harikapunna/Desktop/custardapple/carousel/", function(data) 
        {
        	alert(data);
        });*/

  $.ajax({
        url: '.',
        success: function (data) {
            //console.log(data);
        }
  });

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
var images = [
	    'gallery/gallery1.jpg',
	    'gallery/gallery2.jpg',
	    'gallery/gallery3.jpg',
	    'gallery/gallery4.jpg',
	    'gallery/gallery5.jpg',
	    'gallery/gallery6.jpg',
	    'gallery/gallery7.jpg',
	    'gallery/gallery8.jpg',
	    'gallery/gallery9.jpg',
	    'gallery/custardapple-gallery10.jpg',
	    'gallery/custardapple-gallery11.jpg',
	    'gallery/custardapple-gallery12.jpg',
	    'gallery/custardapple-gallery13.jpg'
	];
function loadMap() {
  var coords = new google.maps.LatLng(18.20102, 79.10076);
   var mapOptions = {
            zoom: 15,
            center: coords,
            mapTypeControl: true,
            mapTypeId: google.maps.MapTypeId.HYBRID
        };
    //create the map, and place it in the HTML map div
    var map = new google.maps.Map(
    document.getElementById("locateOnMap"), mapOptions
    );

    //place the initial marker
    var marker = new google.maps.Marker({
    position: coords,
    map: map,
    title: "Vidhath Custard Apple Farm"
    });
    marker.setMap(map);
}

function loadGallery(){
	
//	var currentLocatn=window.location.href;
//	var splitArray=currentLocatn.split('/');
//	var path=currentLocatn.substring(0,currentLocatn.indexOf(splitArray[splitArray.length-1]));
	 /*$.get("https://github.com/jayapalu/custardapple/tree/master/images", function(data) 
        {
            alert(data);
        });*/
    
	var pgSize=10;
	for(var i=1; i<(images.length/pgSize)+1; i++){
		$('#galleryPages').append("<li><div href='#' onclick='loadNextImgs("+i+","+pgSize+")'>"+i+"</div></li>");
	}
	
	for(var i=0; i<pgSize; i++) {
	    $('#galleryLoader').append('<img src="'+images[i]+'" alt="" class="col-sm-2 galleryEachImg pop" onclick="zoomImage(this)" />');
	}
}

function loadNextImgs(i,pgSize){
	var arrayLeng=images.length;
	if(i==1){
		$('#galleryLoader').empty();
		for(var iNo=0; iNo<pgSize; iNo++) {
	   		 $('#galleryLoader').append('<img src="'+images[iNo]+'" alt="" class="col-sm-2 pop galleryEachImg"  onclick="zoomImage(this)" />');
		} 
	} else if(i==arrayLeng-1){
		var repro=((i-1)*pgSize)-1;
		$('#galleryLoader').empty();
		for(var iNo=repro; iNo<arrayLeng-1; iNo++) {
	  		 $('#galleryLoader').append('<img src="'+images[iNo]+'" alt="" class="col-sm-2 pop galleryEachImg" onclick="zoomImage(this)" />');
		} 
	} else{
		$('#galleryLoader').empty();
		var repro=((i-1)*pgSize)-1;
		for(var iNo=repro; iNo<repro+pgSize; iNo++) {
	  	  	 $('#galleryLoader').append('<img src="'+images[iNo]+'" alt="" class="col-sm-2 pop galleryEachImg" onclick="zoomImage(this)" />');
		}
	}

	
}

function zoomImage($event){
			$('.imagepreview').attr('src', $event.src);
			$('#imagemodal').modal('show');  
}

