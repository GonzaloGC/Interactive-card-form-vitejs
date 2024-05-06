// import './style.css';
// import './infoInput.js';

document.addEventListener("DOMContentLoaded", () => {
  let infoIn = document.querySelector("#nameCard");
  let selecp = document.querySelector("#nameCardBack");
  infoIn.addEventListener("input", () => {
    if (infoIn.value == "") {
      selecp.innerText = "Jane";
    } else {
      selecp.innerText = infoIn.value;
    }
  });

  let infoNum = document.querySelector("#valueNum");
  let selecpn = document.querySelector("#numberCardFront");
  let error = document.querySelector("#errorNumber");
  infoNum.addEventListener("input", event => {
    
    let inputValue = event.target.value;

    if (infoNum.value == "") {
      selecpn.innerText = "0000 0000 0000 0000";
    } else {
      selecpn.innerText = infoNum.value;
    }

    //  validando el error al introducir una letra
    let regExp = /[A-z]+/g;

    if (regExp.test(infoNum.value)) {
      error.innerText = "Wrong format, numbers only";
    } else{ 
      infoNum.value = inputValue.replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ').trim();
      error.innerText = "";
    }


  });

  let infoMonth = document.querySelector("#valueMonth");
  let infoMonthCard = document.querySelector("#valueMonthCard");
  infoMonth.addEventListener("input", () => {
    infoMonthCard.innerText = infoMonth.value;
  });

  let infoYear = document.querySelector("#valueYear");
  let infoYearCard = document.querySelector("#valueYearCard");
  infoYear.addEventListener("input", () => {
    infoYearCard.innerText = infoYear.value;
  });

  let infoCvc = document.querySelector("#valueCvc");
  let valueInputCvc = document.querySelector("#numberCardBack");
  infoCvc.addEventListener("input", () => {
    valueInputCvc.innerText = infoCvc.value;
  });

  // Validando que aya una letra
});

// document.querySelector('#nameCard').innerText= `
//   <input id="inputCard" class="border border-solid border-black" type="text">
// `
