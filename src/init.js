(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.dropdown-trigger');
      var instances = M.Dropdown.init(elems, options);
    });

    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems, options);
    });

    // Or with jQuery

    $('.dropdown-trigger').dropdown();


  }); // end of document ready
})(jQuery); // end of jQuery name space
