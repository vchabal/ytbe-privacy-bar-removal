window.requestAnimationFrame(function () {
    // hide privacy reminder
    var style = document.createElement('style');
    style.appendChild(document.createTextNode('#ticker { display:none }'));
    document.body.appendChild(style);
    
    // resize window to calculate elements size
    window.dispatchEvent(new Event('resize'));

    // set cookie that everything is ok
    var date = new Date();
    date.setDate(date.getDate() + 1);
    document.cookie = "HideTicker=true;domain=youtube.com;path=/;expires=" + date.toUTCString();
});