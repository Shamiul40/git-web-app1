
document.getElementById("login-btn")
.addEventListener("click", (event)=>{

  event.preventDefault();

const accountNumber = document.getElementById("account").value;
const pin = document.getElementById("pin").value;
const convertAccountNumber = parseInt(accountNumber.length);
const convertPin = parseInt(pin);

if(convertAccountNumber=== 11) {
  
  if(convertPin === 1234) {
    console.log("thik ase");
  }
  else {
    alert("invalid pin");
  }
}

else {
  alert("number invalid")
}

})
