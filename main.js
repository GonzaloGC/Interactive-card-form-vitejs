document.addEventListener("DOMContentLoaded", () => {
  let valueInputCard = document.querySelector("#nameCard");
  let selecp = document.querySelector("#nameCardBack");
  let errorDivName = document.querySelector("#errorName");
  valueInputCard.addEventListener("input", () => {
    if (valueInputCard.value == "") {
      selecp.innerText = "JANE APPLESEED";
    } else {
      selecp.innerText = valueInputCard.value.toUpperCase();
    }
    //  Validando el error al introducir un número
    let regExpNum = /[0-9]+/g;

    if (regExpNum.test(valueInputCard.value)) {
      errorDivName.innerText = "Wrong format, letters only";
      valueInputCard.classList.add("focus:border-Red-input-errors");
      valueInputCard.style.borderColor = "#ff5252";
      valueInputCard.classList.remove("focus:border-blue-950");
    } else {
      errorDivName.innerText = "";
      valueInputCard.style.borderColor = "";
    }
    let lengthInputCard = valueInputCard.value.length;
    if (lengthInputCard == 0) {
      errorDivName.classList.remove("border-Red-input-errors");
    }
  });

  let infoNum = document.querySelector("#valueNum");
  let selecpn = document.querySelector("#numberCardFront");
  let errorDivNumber = document.querySelector("#errorNumber");
  infoNum.addEventListener("input", (event) => {
    let inputValue = event.target.value;

    if (infoNum.value == "") {
      selecpn.innerText = "0000 0000 0000 0000";
    } else {
      selecpn.innerText = infoNum.value;
    }

    //  Validando el error al introducir una letra
    let regExp = /[A-z]+/g;

    if (regExp.test(infoNum.value)) {
      showError(infoNum, errorDivNumber, "Wrong format, numbers only");
      // error.innerText = "Wrong format, numbers only";
    } else {
      infoNum.value = inputValue
        .replace(/\s/g, "")
        .replace(/([0-9]{4})/g, "$1 ")
        .trim();
      hiddenError(infoNum, errorDivNumber, "");
      // error.innerText = "";
    }
    // Funciones
    function showError(infoInput, errorInput, msgError) {
      errorInput.innerText = msgError;
      infoInput.style.borderColor = "#ff5252";
      infoInput.classList.add("focus:border-Red-input-errors");
      infoInput.classList.remove("focus:border-blue-950");
    }
    function hiddenError(infoInput, errorInput, msgError) {
      errorInput.innerText = msgError;
      infoInput.style.borderColor = "";
      infoInput.classList.remove("focus:border-Red-input-errors");
      infoInput.classList.add("focus:border-blue-950");
    }
  });
  // Validando el input mes en la tarjeta
  let infoMonth = document.querySelector("#valueMonth");
  let infoMonthCard = document.querySelector("#valueMonthCard");
  infoMonth.addEventListener("input", (event) => {
    const maxLength = 2;
    const inputValue = event.target.value;
    if (inputValue.length >= maxLength) {
      const truncateValue = inputValue.slice(0, maxLength);
      infoMonth.value = truncateValue;
    }
    // infoMonthCard.innerText = infoMonth.value;
    if (infoMonth.value == "") {
      infoMonthCard.innerText = "00";
    } else {
      infoMonthCard.innerText = infoMonth.value;
      errorBlankMonthYear.innerText = "";
    }
  });

  // Validando el input año en la tarjeta
  let infoYear = document.querySelector("#valueYear");
  let infoYearCard = document.querySelector("#valueYearCard");
  let errorDivYearCard = document.querySelector("#infoDivYM");
  infoYear.addEventListener("input", (event) => {
    const maxLength = 2;
    const lengthInputYear = event.target.value;
    console.log(lengthInputYear);
    if (lengthInputYear.length > maxLength) {
      const truncateInputYear = lengthInputYear.slice(0, maxLength);
      infoYear.value = truncateInputYear;
    }
    if (infoYear.value == "") {
      infoYearCard.innerText = "00";
    } else {
      infoYearCard.innerText = infoYear.value;
      errorBlankMonthYear.innerText = "";
    }
    if (lengthInputYear.length > 0) {
      infoYear.style.borderColor = "#21092f";
    } else {
      infoYear.style.borderColor = "#21092f";
    }
  });

  // Validando el input cvc en la tarjeta
  let infoCvc = document.querySelector("#valueCvc");
  let valueInputCvc = document.querySelector("#numberCardBack");
  let errorDivCvc = document.querySelector("#infoDivCvc");
  infoCvc.addEventListener("input", (event) => {
    let maxLength = 3;
    let inputLengthCvc = event.target.value;
    if (inputLengthCvc > maxLength) {
      const truncateInputCvc = inputLengthCvc.slice(0, maxLength);
      infoCvc.value = truncateInputCvc;
    }

    if (infoCvc.value == "") {
      valueInputCvc.innerText = "000";
    } else {
      valueInputCvc.innerText = infoCvc.value;
      errorBlaankCvc.innerText = "";
    }
    if (inputLengthCvc.length > 0) {
      infoCvc.style.borderColor = "#21092f";
    }
  });
  // Validando el formulario a traves del boton
  let buttonEventClic = document.querySelector("#buttonClic");
  let errorBlankMonthYear = document.querySelector("#infoDivYM");
  let errorBlaankCvc = document.querySelector("#infoDivCvc");
  buttonEventClic.addEventListener("click", (event) => {
    event.preventDefault();
    if (valueInputCard.value == "") {
      errorDivName.innerText = `Can't be blank`;
      valueInputCard.style.borderColor = "#ff5252";
      // valueInputCard.classList.remove("border-Dark-grayish-violet");
    } else {
      valueInputCard.style.borderColor = "";
    }
    if (infoNum.value == "") {
      errorDivNumber.innerText = `Can't be blank`;
      infoNum.style.borderColor = "#ff5252";
      //infoNum.classList.remove("border-Dark-grayish-violet");
    } else {
      infoNum.style.borderColor = "";
    }
    if (infoMonth.value == "") {
      errorBlankMonthYear.innerText = `Can't be blank`;
      infoMonth.style.borderColor = "#ff5252";
      // infoYear.style.borderColor = '#ff5252';
    } else {
      infoMonth.style.borderColor = "";
      // infoYear.style.borderColor = '';
    }
    if (infoYear.value == "") {
      errorBlankMonthYear.innerText = `Can't be blank`;
      // infoMonth.style.borderColor = '#ff5252';
      infoYear.style.borderColor = "#ff5252";
    } else {
      // infoMonth.style.borderColor = '';
      infoYear.style.borderColor = "";
    }
    if (infoCvc.value == "") {
      errorBlaankCvc.innerText = `Can't be blank`;
      infoCvc.style.borderColor = "#ff5252";
    } else {
      infoCvc.style.borderColor = "";
    }
  });

  // Confirmando el formulario a traves del boton
  const clickConfirm = () => {
    const divErrorNameLength = errorDivName.textContent.length;
    const divErrorNumberLength = errorDivNumber.textContent.length;
    const divErrorDateLength = errorDivYearCard.textContent.length;
    const divErrorCvcLength = errorDivCvc.textContent.length;
    let formDel = document.querySelector("#formDel");
    let tagAgre = document.querySelector("#newThank");

    if (
      divErrorNameLength > 0 ||
      divErrorNumberLength > 0 ||
      divErrorDateLength > 0 ||
      divErrorCvcLength > 0
    ) {
    } else {
        // Agregamos estilos en linea (no es recomendable ocupar .classList para eliminar o agregar clases de tailwind)'
        // Escondemos el formulario
        formDel.style.display = 'none';
        // Mostramos el saludo satisfactorio
        tagAgre.style.display = 'block';
      }
  };
  buttonEventClic.addEventListener("click", clickConfirm);
});
