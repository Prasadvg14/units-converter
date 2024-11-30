let meterInput = document.getElementById('meters');
let inchesInput = document.getElementById("inches");
let feetInput = document.getElementById('feets');
let buttonArrow = document.getElementById('Abtn')


meterInput.addEventListener('input', function(){
    const meterI  = meterInput.value
    let feets = meterI*3.28084;
    let wholeFeet = Math.floor(feets)
    let deci = feets - wholeFeet;
    let inches = (deci*12).toFixed(2);
    feetInput.value = wholeFeet;
    inchesInput.value =inches;
})

feetInput.addEventListener('input',function(){
    let feetInp  = feetInput.value
    let inchInp = inchesInput.value
    const f = parseInt(feetInp) + parseFloat(inchInp*0.0833333)
    let meters = f*0.3048
    meterInput.value = meters.toFixed(4)
})

inchesInput.addEventListener('input',function(){
    let feetInp  = feetInput.value
    let inchInp = inchesInput.value
    if (feetInp===""){
        feetInp = 0
    }
    const f =  parseFloat(inchInp*0.0833333) +parseInt(feetInp) 
    let meters = f*0.3048
    meterInput.value = meters.toFixed(4)
})




const onclickArrow = function(){
    console.log('hi')
    buttonArrow.textContent = "red"
    let inputBox1=document.getElementById("inputBox1");
    
}

buttonArrow.addEventListener('click',onclickArrow)