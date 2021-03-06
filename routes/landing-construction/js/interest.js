/* eslint-disable no-console */
/* global firebase $ */
$(document).ready(function(){
	$("#interestForm").submit(function(e){
		e.preventDefault(); 
		$("#interestedButton").text("Loading...");
		var database = firebase.database();
		database.ref("/summer2019Interest/" + Date.now()).set({
			email: $("#interestForm").find("input").val()
		}, function(error){
			if(error){
				console.error(error); 
				$("#interestedButton").text("Failed, click to try again");
			} else {
				$("#interestForm").html("<div class=\"center\"><h4>Thanks for your interest! You will be notified of any future updates related to CDVI.</h4></div>");
			}
		});
	});
});
