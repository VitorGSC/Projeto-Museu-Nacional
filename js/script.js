var navButton = document.querySelector('.nav-button');

navButton.addEventListener('click', function() {
    if(document.querySelector('#nav-links').style.display == 'block') {
        document.querySelector('#nav-links').style.display = 'none';
        return;
    } else {
        document.querySelector('#nav-links').style.display = 'block';
    }
});
