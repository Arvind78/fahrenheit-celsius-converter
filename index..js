 const Fahrenheit = ()=>{
    let fn = document.querySelector("#number").value;
    let c = (fn-32)*5/9;
    let d =c.toFixed(1);
    document.getElementById("result").innerHTML = `${d} C`;
//    return g;
} 

const Celsius = ()=>{
    let fn = document.querySelector("#number").value;
    let fnh = (fn*1.8)+32;
    let fnhh= fnh.toFixed(1)
    document.getElementById("result").innerHTML =`${fnhh} F`;
} 
 
 
 