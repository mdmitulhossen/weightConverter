/*let input = document.querySelector('input');

input.addEventListener('keyup',()=>{
 
 let inputValue = document.querySelector('input').value;
 console.log (inputValue);
 let gmoutput = document.getElementById('gmoutput');
 let kgoutput = document.getElementById('kgoutput');

 gmoutput.innerHTML=`${inputValue*453.592}`;
 kgoutput.innerHTML=`${inputValue*0.453592}`;
})*/

const input = document.querySelector('input');
let gram = document.getElementById('gram');
let kilogram = document.getElementById('kilogram');
let pounds = document.getElementById('pounds');

//gram handaler
gram.addEventListener('click',()=>{
      document.getElementById('header1').innerHTML='Kilogram::';
      document.getElementById('header2').innerHTML='Pounds::';

      input.addEventListener('keyup',()=>{
            let inputValue = document.querySelector('input').value;

            let output1 = document.getElementById('output1');
            let output2 = document.getElementById('output2');
      
            output1.innerHTML=`${inputValue*0.001}`;
            output2.innerHTML=`${inputValue*0.00220462}`;
      });
  
});

//kg handaler

kilogram.addEventListener('click',()=>{
      document.getElementById('header1').innerHTML='Gram::';
      document.getElementById('header2').innerHTML='Pounds::';

      input.addEventListener('keyup',()=>{
            let inputValue = document.querySelector('input').value;

            let output1 = document.getElementById('output1');
            let output2 = document.getElementById('output2');
      
            output1.innerHTML=`${inputValue*1000}`;
            output2.innerHTML=`${inputValue*2.20462}`;
      });
  
});

//pounds handaler

pounds.addEventListener('click',()=>{
      document.getElementById('header1').innerHTML='Gram::';
      document.getElementById('header2').innerHTML='kilogram::';

      input.addEventListener('keyup',()=>{
            let inputValue = document.querySelector('input').value;

            let output1 = document.getElementById('output1');
            let output2 = document.getElementById('output2');
      
            output1.innerHTML=`${inputValue*453.592}`;
            output2.innerHTML=`${inputValue*0.453592}`;
      });
  
});

