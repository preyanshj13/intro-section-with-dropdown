function myFunction(x) {
    if (x.matches) { // If media query matches
      document.getElementById('hero-img').src = "./images/image-hero-mobile.png"
      // document.body.style.backgroundColor = "yellow";
    } else {
      document.getElementById('hero-img').src = "./images/image-hero-desktop.png"
      // document.body.style.backgroundColor = "pink";
    }
  }
  
  var x = window.matchMedia("(max-width: 480px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes