var searchButton = document.getElementById('search'), overlay = document.getElementById('search-overlay'),
    searchContainer = document.getElementById('search-container'), check = true;
searchButton.onclick = function() {hideTr(overlay)};
overlay.onclick = function() {hideTr(this)};
searchContainer.onclick = function() {check = false};