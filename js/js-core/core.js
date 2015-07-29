var scripts = ['js/slider.js', 'js/search.js', 'js/ready.js'];
function hideTr(elem) {
    var transition;
    if ('ontransitionend' in window) {
        transition = 'transitionend';
    } else if ('onwebkittransitionend' in window) {
        transition = 'webkitTransitionEnd';
    } else if ('onotransitionend'  in window || navigator.appName == 'Opera') {
        transition = 'oTransitionEnd';
    } else {
        transition = 'transitionend';
    }
    if (elem.classList.indexOf('disabled') != -1) {
        elem.classList.remove('disabled');

    }
    else {
        elem.classList.add('invisible');
        elem.addEventListener(transition, function() {
            elem.classList.remove('invisible');
            elem.classList.add('disabled');
        });
    }
}
function bindReady(handler){
    var called = false;
    function ready() {
        if (called) return;
        called = true;
        handler();
    }
    if ( document.addEventListener ) {
        document.addEventListener( "DOMContentLoaded", function(){
            ready()
        }, false )
    } else if ( document.attachEvent ) {
        if ( document.documentElement.doScroll && window == window.top ) {
            function tryScroll(){
                if (called) return;
                if (!document.body) return;
                try {
                    document.documentElement.doScroll("left");
                    ready()
                } catch(e) {
                    setTimeout(tryScroll, 0)
                }
            }
            tryScroll()
        }
        document.attachEvent("onreadystatechange", function(){
            if ( document.readyState === "complete" ) ready();
        })
    }
    if (window.addEventListener) window.addEventListener('load', ready, false);
    else if (window.attachEvent) window.attachEvent('onload', ready);
    else window.onload=ready
}
var readyList = [];
function onReady(handler) {
    if (!readyList.length) {
        bindReady(function() {for(var i=0; i<readyList.length; i++) {readyList[i]();}})
    }
    readyList.push(handler);
}
onReady(function(){
    for (var i=0; i<scripts.length; i+=1) {
        var script = document.createElement('script');
        script.src = scripts[i];
        document.head.appendChild(script);
    }
});