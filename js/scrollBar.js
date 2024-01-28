let scrollBar = window.Scrollbar;

const options = {
    'damping': 0.1,
    'alwaysShowTracks': true,
}

scrollBar.init(document.querySelectorAll('.container'), options);
