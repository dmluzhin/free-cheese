var profileButton = document.getElementById('profile'), profileMenu = document.getElementById('popup-menu');
profileButton.onclick = function() {
    if (profileButton.parentNode.style.margin == '') profileButton.parentNode.style.margin = 0;
    else profileButton.parentNode.style.margin = '';
    var profileMenuButtons = profileMenu.getElementsByTagName('a');
    for (var i=0; i<profileMenuButtons.length; i+=1) {
        hideTr(profileMenuButtons[i]);
    }
};