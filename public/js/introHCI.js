'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(function(e){
		e.preventDefault();
		// Get the div ID, e.g., "project3"
		var projectID = $(this).closest('.project').attr('id');
		// get rid of 'project' from the front of the id 'project3'
		var idNumber = projectID.substr('project'.length);

		$.get("project/" + idNumber, addProjectDetails);
		// console.log("URL: " + "project/" + idNumber);
	})

	$('#colorBtn').click(function(e){

		e.preventDefault();

		$.get("/palletesyo", randomizeColors);
	});
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(result) {

	console.log(result);
	// Prevent following the link
	// result.preventDefault();
	var projectID = "project" + result['id'];

	// // Get the div ID, e.g., "project3"
	// var projectID = $(this).closest('.project').attr('id');
	// // get rid of 'project' from the front of the id 'project3'
	// var idNumber = projectID.substr('project'.length);
	// console.log("User clicked on project " + idNumber);
	var projectHTML = '<a>' + '<img src ="' + result['image'] + '" class= "detailsImage">' + '<h3>' +result['title'] +'</h3>' +'<p>' +result['summary'] +'</p>' + '<p><small>' +result['date'] +'</small></p></a>'
	var thePrjoectId = "#" + projectID +" .details";
	$(thePrjoectId).html(projectHTML);

	// <a href="#" class = "thumbnail"> 

}

/*
 * Make an AJAX call to retrieve a color palette for the site
 * and apply it
 */
function randomizeColors(e) {

	// console.log("User clicked on color button");
	console.log(e);

	var colors = e.hex;
	console.log(colors);

	$('body').css('background-color', colors[0]);
	$('.thumbnail').css('background-color', colors[1]);
	$('h1, h2, h3, h4, h5, h5').css('color', colors[2]);
	$('p').css('color', colors[3]);
	$('.project img').css('opacity', .75);
}