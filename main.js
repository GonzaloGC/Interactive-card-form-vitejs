// import './style.css';
// import './infoInput.js';


  document.addEventListener('DOMContentLoaded', () => {
  let infoIn = document.querySelector("#nameCard");
  let selecp = document.querySelector('#nameCardBack');
  infoIn.addEventListener('input', () =>{
    if( infoIn.value == ''){
      selecp.innerHTML = 'Jane'
    } else {
      selecp.innerHTML = infoIn.value;
    }
  });

  let infoNum = document.querySelector("#valueNum");
  let selecpn = document.querySelector('#numberCardFront');
  infoNum.addEventListener('input', () =>{
   selecpn.innerHTML = infoNum.value;
  });

  let infoMonth = document.querySelector('#valueMonth');
  let infoMonthCard = document.querySelector('#valueMonthCard');
  infoMonth.addEventListener('input', ()=>{
    infoMonthCard.innerHTML = infoMonth.value; 
  });
  
  let infoYear = document.querySelector('#valueYear');
  let infoYearCard = document.querySelector('#valueYearCard');
  infoYear.addEventListener('input', () => {
    infoYearCard.innerHTML = infoYear.value;
  });
  
  let infoCvc = document.querySelector('#valueCvc');
  let valueInputCvc = document.querySelector('#numberCardBack');
  infoCvc.addEventListener('input', () =>{
    valueInputCvc.innerHTML = infoCvc.value;
  });

});


// document.querySelector('#nameCard').innerHTML= `
//   <input id="inputCard" class="border border-solid border-black" type="text">
// `