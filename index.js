$(document).ready(function() {

  $("a.navlink").click(function() {
    $("a.navlink.active").removeClass("active");
    $(this).addClass("active");
  });

});