/**
 * Created by paford on 11/27/16.
 */
var p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "three");
});
p3.then(function(data){
    console.log('setTimeout, simple', data)  ;
});
