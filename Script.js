
//Show/Hide pdf
$(document).ready(function() {
    $(".pdf-container").hide();
  
    $(".pdf-title").click(function() {
      var targetPdf = $(this).data("pdf");
      $(".pdf-container").not(targetPdf).hide();
      $(targetPdf).toggle();
    });
  });
  