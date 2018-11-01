
let a = "SACHIN";
let b = 100;
let c = 3.14;
let d = true;

let e = function(){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

function demo(param1){
    param1();
}
demo(e);

