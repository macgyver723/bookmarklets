javascript: (function() {
    let allCells = document.getElementsByTagName('td');
    for (var i = 0; i < allCells.length; i++) {
        if (allCells[i].innerText.slice(0, 1) == 'F') {
            allCells[i].style.background = "#ff7885";
            allCells[i].style.color = "#000000";
        }
    }
})();
