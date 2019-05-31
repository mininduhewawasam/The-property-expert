$(function() { //jquery ui widget for min bedrooms
	$("#spinner").spinner({
		min: 0,
		max: 12,
		spin: function(event, ui) {
			$(this).change();
		}
	});
});

$(function() {//jquery ui-wiget for maximium bed rooms
	$("#spinner2").spinner({
		min: 0,
		max: 12,
		spin: function(event, ui) {
			$(this).change();
		}
	});
});

$(function() {//jquery ui-wiget for select property type
	  $("#property").selectmenu();
});

$(function() {//jquery ui-wiget for time of add posted
	  $("#time").selectmenu();
});


$(function() {//jquery ui-wiget for price range
	$("#slider-range").slider({
		range:true,
		min: 249500,
		max: 750000,
		values: [ 75, 300 ],
		slide: function( event, ui ){
			$("#amount").val( "£" + ui.values[ 0 ] + " - £" + ui.values[ 1 ] );
		}
	});
	
	$("#amount").val(" £" + $(" #slider-range").slider( "values", 0 ) + " - £" + $("#slider-range").slider( "values", 1 ) );
});


$(function() {
	$( "#Search" ).on("click", function(){//function to search properties
		
		var propType = $("#property").val();
	    var maxBed =  $("#spinner").val();
        var minBed =  $("#spinner2").val();
		var date =  $("#time").val();
		var minPrice = $("#slider-range").slider("option", "values")[0];
		var maxPrice = $("#slider-range").slider("option", "values")[1];
		
		var output="<ul>";
		   for (var i in data.properties) {
			   if (( propType == data.properties[i].type) || (propType=="Any"))
			   if (( minBed >= data.properties[i].bedrooms && maxBed <= data.properties[i].bedrooms ))
			   if (( date == data.properties[i].added.month) || (date=="Anytime"))
			   if (( data.properties[i].price >= minPrice && data.properties[i].price <= maxPrice ))
			   {
				   {
					   {
						   {
							output+="<div class='propContainer'>"+"<h2><u>" + data.properties[i].bedrooms + " Bedrooms" + " " + data.properties[i].type +" "+"for sale"+ "</u></h2>"+"<button class='viewbtn'><a href='" + data.properties[i].url + "'>View Property</a></button><br>"  + "<div class='propDesription'>"+"<h3> Price"+" - " +"£" + data.properties[i].price+"</h3>" +"<h3> Type"+" - "+ data.properties[i].type+"</h3>"+"<h3> No Of Bed Rooms" +" - " + data.properties[i].bedrooms+"</h3>"+"<h3> Tenure"+" - "+ data.properties[i].tenure+"</h3>"+"<h3> Location"+" - "+ data.properties[i].location +"</h3>"+ "</div>" + 
							"<img class='propImge' src=" + data.properties[i].picture + ">"+
							"<br><br>"+"</div>";						} } } } }
				output+="</ul>";
				document.getElementById( "Placeholder" ).innerHTML = output;

				$(".viewbtn").css({  'padding':'5px',
				'background-color': '#e7e7e7',
				'border': 'none',
				'color': 'white',
				'padding': '10px 27px',
				'text-align': 'center',
				'text-decoration': 'none',
				'display': 'inline-block',
				'font-size': '16px',
				'float':'right'});
				$("a").css('text-decoration','none');

				$(".searchResults").css({
					'max-width': '90%',
					'margin': '5%',
					'padding': '20px',
					'border-style': 'solid',
					'border-width': '0px',
					'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
					'background-color':'#dcd0c0'
				})
				$(".propContainer").css({  'border-style': 'solid',
                                          'border-width': '1px',
                                          'margin': '2px',
                                          'height':'auto',
                                          'padding':'5px',
                                          'position':'relative'
                                          
										  });
										  
		
				$(".propImge").css({  
                                          
										  'position':'relative',
										  
                                          });
		   });
	});
	
	
	
	//function to view items added to the myfavourite list
$(function() {
	$( ".viewFavourites" ).on("click", function(){
		
		console.log("Restoring array data from local storage");
		
		myFavouriteProp=JSON.parse(localStorage.getItem("favProp"));
		
		var output = "<ul>"+"<h1>My Favourites</h1>";
		
		if (myFavouriteProp != null) {
			
			for (var i = 0; i < data.properties.length; i++) {
				for (j = 0; j < myFavouriteProp.length; j++) {
					
					if (data.properties[i].id == myFavouriteProp[j]) {
						
						output+="<div class='propContainer'>"+"<h2><u>" + data.properties[i].bedrooms + " Bedrooms" + " " + data.properties[i].type +" "+"for sale"+ "</u></h2>"+"<button class='viewbtn'><a href='" + data.properties[i].url + "'>View Property</a></button><br>"  + "<div class='propDesription'>"+"<h3> Price"+" - " +"£" + data.properties[i].price+"</h3>" +"<h3> Type"+" - "+ data.properties[i].type+"</h3>"+"<h3> No Of Bed Rooms" +" - " + data.properties[i].bedrooms+"</h3>"+"<h3> Tenure"+" - "+ data.properties[i].tenure+"</h3>"+"<h3> Location"+" - "+ data.properties[i].location +"</h3>"+ "</div>" + 
							"<img class='propImge' src=" + data.properties[i].picture + ">"+
							"<br><br>"+"</div>";
					}
				}
			}
		}
		output+="</ul>";
		
		document.getElementById( "Placeholder2" ).innerHTML = output;

		//functions to load css for list
		$(".viewbtn").css({  'padding':'5px',
				'background-color': '#e7e7e7',
				'border': 'none',
				'color': 'white',
				'padding': '10px 27px',
				'text-align': 'center',
				'text-decoration': 'none',
				'display': 'inline-block',
				'font-size': '16px',
				'float':'right'});
				$("a").css('text-decoration','none');

				$(".favList").css({
					'max-width': '90%',
					'margin': '5%',
					'padding': '20px',
					'border-style': 'solid',
					'border-width': '0px',
					'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
					'background-color':'#dcd0c0'
				})
				$(".propContainer").css({  'border-style': 'solid',
                                          'border-width': '1px',
                                          'margin': '2px',
                                          'height':'auto',
                                          'padding':'5px',
                                          'position':'relative'
                                          
										  });
										  
		
				$(".propImge").css({  
                                          
										  'position':'relative',
										  
                                          });
	
	});
});


$(function() {//functon to clear favaourite property list
	$( ".clearFavourites" ).on("click", function(){
		
		$("#Placeholder2").remove();
		
		myFavouriteProp=JSON.parse(localStorage.getItem("favProp"));
		
		localStorage.clear();
		
	});
	
});
						
						
						