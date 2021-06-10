$(document).ready(function(){
  var current = window.location.pathname;
  var userLang = navigator.language || navigator.userLanguage;
  // if(current == "/"){
  //   if (userLang.slice(0, 2) != "es"){
  //     window.location.href = "/en"
  //   } else {
  //     window.location.href = "/";
  //   }
  // }

});

$('nav > a').click(function(event){
  event.preventDefault();
  var id = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(id).offset().top
  }, 600);
});


