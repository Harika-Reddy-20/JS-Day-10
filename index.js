var obj={
    name:'hello',
}
function Details(a){
    return this.name+a;
}
Details.call(obj,100)








var obj={
    name:'hlo',
}
function Details(a){
    return this.name+a;
}
Details.apply(obj,[100])






var obj={
    name:'hi',
}
function Details(a){
    return this.name+a;
}
var fun = Details.bind(obj,[100])
fun();