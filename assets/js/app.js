$(document).ready(function(){
  var current = window.location.pathname;
  var userLang = navigator.language || navigator.userLanguage;
  if(current == "/"){
    if (userLang.slice(0, 2) != "es"){
      window.location.href = "/en"
    }
  }
});