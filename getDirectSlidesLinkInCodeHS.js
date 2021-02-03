javascript: (function() {
    let src = document.querySelector('.slides').getAttribute('src');
    let parts = src.split('/');
    src = parts.slice(0, parts.length - 1).join('/') + "/view";
    window.alert(src);
}());
