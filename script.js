document.addEventListener("DOMContentLoaded", function() {
    const svg = document.getElementById("svg");
    svg.addEventListener("animationend", function() {
      // Trigger background color transition after the SVG animation ends
      document.body.style.transition = "background-color 1s easy-out";
      document.body.style.backgroundColor = "white"; 
    });
  });