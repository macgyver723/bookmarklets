javascript: (function() {
    var link = prompt("Enter the share link");
    window.prompt("Copy direct link to image:", "https://drive.google.com/uc?id=" + link.split('/')[5]);
})();
