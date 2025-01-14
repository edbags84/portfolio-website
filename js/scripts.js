console.log("Hello World");

@@ -0,0 +1,10 @@
function menuToggle() {
  var x = document.getElementById("myNavtoggle");
  var isMobileBreakpoint = window.innerWidth <= 641;
  if (x.className === "navtoggle" && isMobileBreakpoint) {
    x.className += " responsive";
  } else {
    x.className = "navtoggle";
  }
}