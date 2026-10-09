// NoodleCore playground — tab-switching (progressive enhancement, geen framework)
(function () {
  var tabs = document.querySelectorAll(".demo-tab");
  if (!tabs.length) return;
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (t) {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      var id = tab.getAttribute("data-demo");
      document.querySelectorAll(".demo-panel").forEach(function (p) {
        p.classList.toggle("active", p.id === "demo-" + id);
      });
    });
  });
})();
