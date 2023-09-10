/* carosello index*/
  function Hello()
{
    alert("Hello, World");
}

  let slideIndex = 0;
  showSlides();
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
  }

/* eventi */
var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");

      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }

var boxIndex = 0;
    showBoxes();

    function showBoxes() {
        var i;
        var boxes = document.getElementsByClassName("box");
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < boxes.length; i++) {
            boxes[i].style.display = "none";
        }
        boxIndex++;
        if (boxIndex > boxes.length) {boxIndex = 1}
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active-dot", "");
        }
        boxes[boxIndex-1].style.display = "block";
        dots[boxIndex-1].className += " active-dot";
        setTimeout(showBoxes, 4000); // Cambia immagine ogni 2 secondi (puoi regolare questo valore)
    }


