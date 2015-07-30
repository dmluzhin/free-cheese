var searchButton = document.getElementById('search'), overlay = document.getElementById('search-overlay');
searchButton.onclick = function() {
    hideTr(overlay);
};
overlay.onclick = function() {
    hideTr(this);
}