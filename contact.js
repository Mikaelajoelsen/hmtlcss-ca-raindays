var myForm = document.querySelector("#js-form-contact");
myForm.addEventListener("submit", checkFields);
function checkFields(event) {
  event.preventDefault();
  var is_all_ok = true;
  let nameRegEx = /^[a-z ,.'-]+$/i;
  const emailEl = document.querySelector("#js-email");
  const adressEl = document.querySelector("#js-adress");
  const nameEl = document.querySelector("#js-name");
  const birthDateEl = document.querySelector("#js-birthday");

  const name = nameEl.value;
  const email = emailEl.value;
  const adress = adressEl.value;
  const birthday = birthDateEl.value;
  resetValidationFeedback();
  console.log(birthday);

  if (name === "" || !nameRegEx.test(name)) {
    document.getElementById("nameerrormsg").style.display = "inline";
    is_all_ok = false;
  }

  if (email === "") {
    console.log(email);
    document.getElementById("mailerrormsg").style.display = "inline";
    is_all_ok = false;
  }
  if (adress === "") {
    document.getElementById("addresserrormsg").style.display = "inline";
    is_all_ok = false;
  }

  if (birthday === "") {
    document.getElementById("dateerrormsg").style.display = "inline";
    is_all_ok = false;
  } else {
    var dateProvided = new Date(birthday);
    var dateToday = new Date();
    if (
      dateProvided > dateToday ||
      dateProvided.toDateString() == dateToday.toDateString()
    ) {
      is_all_ok = false;
      document.getElementById("dateerrormsg").style.display = "inline";
      document.getElementById("dateerrormsg").textContent +=
        " Date needs to be a date before the current date";
    } else if (dateToday.getFullYear() - dateProvided.getFullYear() > 100) {
      is_all_ok = false;
      document.getElementById("dateerrormsg").style.display = "inline";
      document.getElementById("dateerrormsg").textContent +=
        " You cannot be more than 100 years old.";
    }
  }
  return is_all_ok;
}

function resetValidationFeedback() {
  document.getElementById("nameerrormsg").style.display = "none";
  document.getElementById("mailerrormsg").style.display = "none";
  document.getElementById("addresserrormsg").style.display = "none";
  document.getElementById("dateerrormsg").style.display = "none";
  document.getElementById("dateerrormsg").textContent =
    "Please enter a valid birth date.";
}
