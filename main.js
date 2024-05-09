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
      showError(infoNum, error, 'Wrong format, numbers only');
      // error.innerText = "Wrong format, numbers only";
    } else{ 
      infoNum.value = inputValue.replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ').trim();
      hiddenError(infoNum, error, '');
      // error.innerText = "";
    }

    function showError(infoNumber, errorInput, msgError) {
      errorInput.innerText = msgError;
      infoNumber.classList.add("focus:border-red-900");
    }
    function hiddenError(infoNumber, errorInput, msgError){
      errorInput.innerText = msgError;
      infoNumber.classList.remove("focus:border-red-900");
    }

  });
  // Validando el input mes en la tarjeta
  let infoMonth = document.querySelector("#valueMonth");
  let infoMonthCard = document.querySelector("#valueMonthCard");
  infoMonth.addEventListener("input", event => {
    const maxLength = 2;
    const inputValue = event.target.value;
    if (inputValue.length >= maxLength) {
      const truncateValue = inputValue.slice(0, maxLength);
      infoMonth.value = truncateValue;
    }
    // infoMonthCard.innerText = infoMonth.value;
    if (infoMonth.value == "") {
      infoMonthCard.innerText = "00";
    }else{
      infoMonthCard.innerText = infoMonth.value;
      errorBlankMonthYear.innerText = "";
    }
  });

  // Validando el input año en la tarjeta
  let infoYear = document.querySelector("#valueYear");
  let infoYearCard = document.querySelector("#valueYearCard");
  infoYear.addEventListener("input", event => {
    const maxLength = 2;
    const lengthInputYear = event.target.value;
    console.log(lengthInputYear);
    if (lengthInputYear.length > maxLength) {
      const truncateInputYear = lengthInputYear.slice(0, maxLength);
      infoYear.value = truncateInputYear;
    }
    if (infoYear.value == "") {
      infoYearCard.innerText = "00";
    }else{
      infoYearCard.innerText = infoYear.value;
      errorBlankMonthYear.innerText = "";
    }
  });

  // Validando el input cvc en la tarjeta
  let infoCvc = document.querySelector("#valueCvc");
  let valueInputCvc = document.querySelector("#numberCardBack");
  let errorDivCvc = document.querySelector('#infoDivCvc');
  infoCvc.addEventListener("input", event => {
    let maxLength = 3;
    let inputLengthCvc = event.target.value;
    if (inputLengthCvc > maxLength) {
      const truncateInputCvc = inputLengthCvc.slice(0, maxLength)
      infoCvc.value = truncateInputCvc;
    }

    if (infoCvc.value == "") {
      valueInputCvc.innerText = "000";
    }else{
      valueInputCvc.innerText = infoCvc.value;
      errorBlaankCvc.innerText = "";
    }
  });

  let buttonEventClic = document.querySelector('#buttonClic');
  let errorBlankMonthYear = document.querySelector('#infoDivYM');
  let errorBlaankCvc = document.querySelector('#infoDivCvc');
  buttonEventClic.addEventListener('click', event => {
    event.preventDefault();
    
    if (infoMonth.value == "" || infoYear.value == ""){
      errorBlankMonthYear.innerText = `Can't be blank`;
    }
    if (infoCvc.value == "") {
      errorBlaankCvc.innerText = `Can't be blank`;
    }
    
  })




});