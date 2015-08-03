var searchButton = document.getElementById('search'), overlay = document.getElementById('search-overlay'),
    searchContainer = document.getElementById('search-container'), input = document.getElementById('search-input'),
    button = document.getElementById('search-submit');
searchButton.onclick = function() {
    hideTr(overlay);
    hideTr(searchContainer);
    input.classList.remove('turtle');
    button.classList.remove('turtle');
    button.children[0].classList.remove('turtle');
};
overlay.onclick = function() {
    hideTr(this);
    hideTr(searchContainer);
    input.value = '';
};
input.onkeyup = function() {
    if (this.value.toLowerCase() == 'черепаший член') {
        this.classList.add('turtle');
        button.classList.add('turtle');
        button.children[0].classList.add('turtle');
    }
    else {
        this.classList.remove('turtle');
        button.classList.remove('turtle');
        button.children[0].classList.remove('turtle');
    }
};