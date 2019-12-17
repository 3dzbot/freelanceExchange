document.addEventListener('DOMContentLoaded', ()=> {
  'use strict';
  
  const customer = document.getElementById('customer'),
        freelance = document.getElementById('freelancer'),
        blockCustomer = document.getElementById('block-customer'),
        blockFreelancer = document.getElementById('block-freelancer'),
        blockChoice = document.getElementById('block-choice'),
        btnExit = document.getElementById('btn-exit'),
        formCustomer = document.getElementById('form-customer');

  const orders = [];

  customer.addEventListener('click', ()=>{     
    blockChoice.style.display = 'none';
    blockCustomer.style.display = 'block';
    btnExit.style.display = 'block';
  })      
  freelance.addEventListener('click', ()=>{       
    blockChoice.style.display = 'none';     
    blockFreelancer.style.display = 'block';
    btnExit.style.display = 'block';
  })      
  btnExit.addEventListener('click', ()=>{    
    blockCustomer.style.display = 'none';      
    blockFreelancer.style.display = 'none';         
    btnExit.style.display = 'none';
    blockChoice.style.display = 'block';  
  })

  formCustomer.addEventListener('submit', (e)=>{
    e.preventDefault();

    const obj = {}
    for(const elem of formCustomer.elements){
      if((elem.tagName === 'INPUT' && elem.type !== 'radio') || 
      (elem.type === 'radio' && elem.checked) ||
      elem.tagName === 'TEXTAREA'){ 
        obj[elem.name] = elem.value;
        
        if(elem.type !== 'radio') {
          elem.value = '';
        }
      }

    }
    
    orders.push(obj);
    console.log(orders)
  });
})