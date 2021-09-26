javascript: (function() {
  let abacus_tabs = document.querySelectorAll('.__abacus_tab > div');
  abacus_tabs.forEach( elem => {
    if (elem.textContent === "Grade") {
      elem.click();
      document.getElementById('submit-grade-full-credit').click();
    }
  });
})();
