var navBar = document.getElementById("navbar");
var navBarHidden = false;
var prevScrollpos = window.pageYOffset; //This variable indicates if we are going up or down in the page
window.onscroll = function() { //This function hides the header if we are going down, and shows it if we are going up
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    var navBar = document.getElementById("navbar").style.top = "0";
    navBarHidden = false;
  } else {
    var navBar = document.getElementById("navbar").style.top = "-60px";
    navBarHidden = true;
  }
  prevScrollpos = currentScrollPos;
}


navBar.onmouseover=function(){

    if(navBarHidden){
        var navBar = document.getElementById("navbar").style.top = "0";
    }
    else{
        var navBar = document.getElementById("navbar").style.top = "-60px";
    }
}
