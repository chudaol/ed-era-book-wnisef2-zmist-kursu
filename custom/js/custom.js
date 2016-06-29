$(document).ready(function () {
  var template;

  template = "<div class='pre-summary'>" +
    "<p>Книга:</p>" +
    "<p>Інтернаціоналізація бізнесу та вихід на ринки Європейського Союзу</p>" +
    "<p>Автор: </p>" +
    "<p>Олег Мирошніченко</p>" +
    "<p><a href='mailto:oleh.myroshnichenko@gmail.com'>oleh.myroshnichenko@gmail.com</a></p>" +
    "<hr/>" +
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