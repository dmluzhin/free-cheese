var searchButton = document.getElementById('search'), overlay = document.getElementById('search-overlay'),
    searchContainer = document.getElementById('search-container');
searchButton.onclick = function() {
    hideTr(overlay);
    hideTr(searchContainer);
};
overlay.onclick = function() {
    hideTr(this);
    hideTr(searchContainer);
};