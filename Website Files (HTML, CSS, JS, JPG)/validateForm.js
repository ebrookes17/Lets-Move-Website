"use strict";

/* 	checks whether "ques3" of "sign-up-form" in "sign-up.html" has been completed. 
	If it has, notify user the form was submitted and return to home page */

function validateForm() {
	var x = document.forms["sign-up-form"]["ques3"].value;
	if (x == "") {
		alert("Please select which rate applies to your purchase.");
		return false;
	}
	alert("Form submitted. Thank you!");
}