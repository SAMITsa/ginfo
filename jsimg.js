var image = document.querySelector("#myImage");

    window.addEventListener("scroll", function() {
      var scrollY = window.scrollY;
      image.style.top = scrollY - image.height / 2;
    });