/**
 * Just utilities for this demo
 */
function addText(text){
    var node = document.createTextNode(text);
    document.body.insertBefore(node, document.body.lastChild);
}

function addHtml(text){
    let html = document.createElement('div'),
        node;
    html.innerHTML = text;
    node = html.firstChild;
    document.body.insertBefore(node, document.body.lastChild);
    html = null;
}

export { addText, addHtml }
