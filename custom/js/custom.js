$(document).ready(function () {
  var template;

  template = "<div class='pre-summary'>" +
    "<p>Програма онлайн-курсу:</p>" +
    "<p>Експорт, інтернаціоналізація бізнесу та єдиний ринок ЄС</p>" +
    "<p>Автор: </p>" +
    "<p>Олег Мирошніченко</p>" +
    "<p>oleh.myroshnichenko@gmail.com</p>" +
    "</div>";

  function init () {
    var $lastLink;

    //Removing last link
    $("a[aria-label=Search]").remove();
    $("a.toggle-search").remove();

    $lastLink = $(".custom-link:last");
    $lastLink.remove();

    //add info
    $(".book-summary").children().first().prepend($(template));
  }
  

  init();

  require(["gitbook"], function (gitbook) {
    gitbook.events.bind("page.change", init)
  });
});