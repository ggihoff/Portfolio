$(document).ready(function() {
    var scrollLink = $(".scroll");
  
    // Smooth scrolling
    scrollLink.click(function(e) {
      e.preventDefault();
      $("body,html").animate({
        scrollTop: $(this.hash).offset().top
      });
    });
  
    // Active link switching
    $(window).scroll(function() {
      var scrollbarLocation = $(this).scrollTop();
  
      scrollLink.each(function() {
        var sectionOffset = $(this.hash).offset().top - 20;
  
        if (sectionOffset <= scrollbarLocation) {
          $(this)
            .parent()
            .addClass("active");
        }
      });
    });
  });

  window.onload = function() {
    

    setTimeout(carga, 300);

    function carga() {
      const spinner = document.getElementById('spinner');
      spinner.classList.add("desaparece");
      document.getElementById('body').style.overflow = 'visible';
    }

  };