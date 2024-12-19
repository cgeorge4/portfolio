
$(document).ready(function() {
    $(".pdf-container").hide();
  
    $(".pdf-title").click(function() {
      var targetPdf = $(this).data("pdf");
      $(".pdf-container").not(targetPdf).hide();
      $(targetPdf).toggle();
    });
  });

  $(document).ready(function() {
    $('.linkBlock').each(function() {
        var bg = $(this).data('bg');
        $(this).css('background-image', 'url(' + bg + ')');
    });
});

$(document).ready(function() {
  $(".video").click(function() {
      if (this.paused) {
          this.play();
      } else {
          this.pause();
      }
  });
});
