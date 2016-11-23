/**
 *
 */

// The target:  internal state for #inputname field
var myUser = {
    id: 'inputname',
    name: ''
};

// Input handler for the input field
inputChange(myUser);
// bind input to object
function inputChange(myObject) {

    if (!myObject || !myObject.id) return;

    var input = document.getElementById(myObject.id);
    input.addEventListener('onchange', function(e) {
        myObject.name = input.value;
    });
}




// proxy handler
var inputHandler = {

    set: function(target, prop, newValue) {

        if (prop == 'name' && target.id) {

            // update object property
            target[prop] = newValue;

            // update input field value
            document.getElementById(target.id).value = newValue;

            return true;
        }
        else return false;

    }

}

// create proxy
var myUserProxy = new Proxy(myUser, inputHandler);


export { myUserProxy };
