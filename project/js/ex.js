let input=document.getElementById("input")
let from=document.getElementById('from')
let answer=document.querySelector('.pri-backward')
let to=document.getElementById('to')
let secondary=document.querySelector(".secondary")
let thead=document.querySelector(".table-head")
let tbody=document.querySelector(".table-body")
let toggle=document.querySelector('.toggle')
let body=document.querySelector('.body')
let bodyid=document.getElementById('body')
let last=body.classList;
let button=document.querySelector('.button-49')




;

for(x in data.rates){
    save(from,x,data.rates[x])
    save(to,x,data.rates[x])
  
};
function tonum(x){
  return  Number(x.replace(',',""))
};


function save(x,y,z){
    
    let option=document.createElement("option")
    let text=document.createTextNode(y)
    let tr= tonum(z)
    option.setAttribute('value',tr)
   
    option.appendChild(text)
    x.appendChild(option)
    

};

secondary.addEventListener('submit',function(e){

  e.preventDefault()

  test()
  let nothing=document.getElementById("nothing")
  if(nothing){
    nothing.remove()
  }


});
function test(){
  let x=input.value;
  let y=from.value;
  let z=to.value;
    
    
    let first=x*y;
    let second=first/z
   
   let result= second.toFixed(2)
   answer.innerHTML=result;
   
  let a=from.options;
  
  let b=to.options;
 
  let tob=b[b.selectedIndex].innerHTML;
  let froma=a[a.selectedIndex].innerHTML;
  let resultc=answer.innerHTML;
 

    
  

  
  let date=new Date();
  let arr1=[date.getMilliseconds(),froma,tob,resultc]
  
  
  let tr=document.createElement("tr")
  
 
  
  arr1.map(function(el,x){
   

  
    let th=document.createElement('td')
  let thtext=document.createTextNode( el)
  th.appendChild(thtext)
  tr.appendChild(th)
  tbody.appendChild(tr)
 
  
    })
  
  
    store()
 
   

    input.value="";
input.focus();
to.value='1';
from.value=''


  }
  function store(){
    localStorage.setItem("rec",tbody.innerHTML)
  };

  (function store2(){
    if(localStorage.getItem('rec')

    ){
      tbody.innerHTML=localStorage.getItem('rec')
    }else{
      tbody.innerHTML=`<tr id="nothing">  <td colSpan='4'> PLease make record bro!</td></tr>`
    }

  })();
  let a=0
  toggle.addEventListener('change',function(){
   
   switch(a){
    case 0:
      night(body)
      night(input)
      night(from)
      night(to)
    


    
    a++
    break;
    case 1:

     day(body);
     day(input);
      day(from);
      day(to) ; 
    a=0
    break;
    default:
      console.log('err')
   }
  })


  function night(x){
    x.classList.add('aa')
    x.classList.remove('body')
  }
  function day(x){
    x.classList.remove('aa')
    x.classList.add('body')
    console.log('b')
  }
  function cle(){
    localStorage.clear()
  }
 
function load(){
    let ring=document.querySelector('#loader');
    ring.style.display='none'
   
  }
  







