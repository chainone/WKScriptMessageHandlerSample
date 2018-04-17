window.addEventListener("load", function(event) {
       webkit.messageHandlers.sample1Handler.postMessage({aaaa:'aaaaa', bbb:'bbbbb'});
});

window.addEventListener("load", function(event) {
    webkit.messageHandlers.sample1Handler.postMessage({
        type: 'load',
        handler: 'sample1',
        text: "load_2",
    });
});

window.addEventListener("load", function(event) {
    webkit.messageHandlers.sample2Handler.postMessage({
        type: 'load',
        handler: 'sample2',
        text: "load_1",
    });
});


function changeDisplay(passedInfo) {
    console.log("the paased info is " + passedInfo )
    document.querySelector('h1').innerHTML = passedInfo.title
    document.querySelector('h2').innerHTML = passedInfo.description
}

function reloadData(sBinaryParam) {
    var sDecodedParam = window.atob(sBinaryParam);
    var oData = JSON.parse(sDecodedParam);
    console.log(oData);
    return oData;
}
