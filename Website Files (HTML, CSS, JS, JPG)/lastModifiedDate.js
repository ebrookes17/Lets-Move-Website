"use strict";

// displays the date when the website was last modified

function lastModifiedDate() {
	
  var x = document.lastModified;
  
  document.getElementById("lm").innerHTML = x;
}