$(document).ready(function() {
// 	alert('oh, hi there, world');
	





		// - gets value, but no li
	

	 $('button').on('click', function() {

		var val;

		val = $('#shopItem').val();

		$("ul").append(val);

	});




		//Closest
	// 	//appends li, doesn't show tag, but can't get value



	//  $('button').on('click', function() {

	// 	var val;

	// 	val = $('#shopItem').val();

	// 	$("ul").add("<li>how to get value here?</li>").appendTo("ul");

	// });











	// //from thinkful
	// $('ul').on('click','li', function(event){
	// 	//fires when LIs are clicked on 
	// 	//including LIs that are not on page when initially loaded
	// })


		//from stackex alerts 1st letter
	// $("#shopItem").keyup(function() {
	// 	alert($(this).val());
	// });






	// //removes all items?
	// $("#remove").click(function() {
	// 	$("li").remove();
	// });







});