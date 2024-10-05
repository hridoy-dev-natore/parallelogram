
function buttonpramitas() {
     // input1
     const inputname=document.getElementById('inputbtn1');
     const valuse=inputname.value;
     const convert=parseFloat(valuse)
     console.log(convert);
// input2
const inputnames=document.getElementById('inputbtn2');
const valuses=inputnames.value;
const converts=parseFloat(valuses);
console.log(converts);

const maltu=convert*converts;
console.log(maltu);

const totalvalu=document.getElementById('rectangle-area');
totalvalu.innerText=maltu;

}

