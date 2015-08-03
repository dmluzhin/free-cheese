var profileButton = document.getElementById('profile'), profileMenu = document.getElementById('popup-menu');
profileButton.onclick = function() {
    var profileMenuButtons = profileMenu.getElementsByTagName('a');
    for (var i=0; i<profileMenuButtons.length; i+=1) {
        hideTr(profileMenuButtons[i]);
    }
};