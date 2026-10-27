// Mobile navigation toggle + footer year. Nothing else.
(function () {
  var nav = document.getElementById("nav");
  var toggle = document.getElementById("nav-toggle");

  if (nav && toggle) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
