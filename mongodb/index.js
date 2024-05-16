function f(x) {
    x = 'x-' + x;
return function(y) {
    y = 'y-' + y;
return function(z) {
return "z-" + y
}
}
}
let g = f ("a")("b")("c");
console.log(g)