window.requestAnimationFrame(function () {
    style = document.createElement('style');
    style.appendChild(document.createTextNode('.ytd-masthead { display:none }'));
    document.body.appendChild(style);
    window.dispatchEvent(new Event('resize'));
});