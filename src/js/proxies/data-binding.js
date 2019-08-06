/**
 *
 */
// The target:  internal state for #inputname field
let myUser = {
    id: 'inputname',
    name: ''
};

// bind input to object
function inputChange(myObject) {

    if (!myObject || !myObject.id) {
        return;
    }

    let input = document.getElementById(myObject.id);
    input.addEventListener('change', function(e) {
        console.log('user name change fired', e.target.value);
        myObject.name = input.value;
    });
}
// Input handler for the input field
inputChange(myUser);


// proxy handler
let inputHandler = {
    set: function(target, prop, newValue) {
        if (prop == 'name' && target.id) {
            // update object property
            target[prop] = newValue;
            // update input field value
            document.getElementById(target.id).value = newValue;
            return true;
        }
        else {
            return false;
        }
    }
};

// create proxy
let myUserProxy = new Proxy(myUser, inputHandler);

export { myUserProxy };
