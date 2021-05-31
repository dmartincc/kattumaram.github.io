
var language = navigator.language || navigator.browserLanguage;

// alert(language);

if (language.indexOf('es') > -1) {
  document.location.href = 'http://kattumaram.com/';
} else {
  document.location.href = 'http://kattumaram.com/en';
}