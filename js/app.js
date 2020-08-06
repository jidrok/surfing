$(function(){
  $(function app() {
    var nav = $(".nav_content");
    var burger = $("#burger");
  
  
    burger.on("click", function i() {
      event.preventDefault();
      nav.toggleClass('show');
    });
  });
});

