'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
 
  var y=num.split(""); 
   var z=[];
  var a=0;
  var b=0;
  for (let x=0;x<y.length;x++){
  z.unshift(Number(y[x]));
  }
  for (let i=0;i<z.length;i++){
    a= Math.pow(2,i);
    b= b+(a * z[i]);
  }
      return b;
  }

function DecimalABinario(num) {
  // tu codigo aca
  var a=num/2;
  var b=0;
  var y=[];
  var r="";
   while (a>=1){
 
  b=(Math.floor(num/2))%2
 
  y.unshift(b);
  a=a/2
  } y.unshift(1)
  r=y.toString();
  r=r.replace(/,/g, "");
  return r;
  }

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}