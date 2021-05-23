// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function openModal(){
  modal.style.display = "block";
}
//btn.onclick = openModal;

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 

// Cookie work
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var D = new Date();
var date = D.getFullYear() + "-" + D.getMonth() + "-" + D.getDate();
var last_visit = getCookie("lastVisitDate");
if((last_visit == "") || (last_visit != date)) {
    setCookie("lastVisitDate", date, 30);
    var daysCount = getCookie("daysCount");
    if(daysCount == "") {
	setCookie("daysCount", 1, 365);
    }
    else {
	setCookie("daysCount", Number(getCookie("daysCount")) + 1, 365);
    }
    if(getCookie("daysCount") >= 5) {
	setCookie("daysCount", 0, 365);
	openModal();
    }
}

