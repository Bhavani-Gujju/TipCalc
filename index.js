let billamount = document.getElementById("billAmount");
let percentagetip = document.getElementById("percentageTip");
let tipamount = document.getElementById("tipAmount");
let totalamount = document.getElementById("totalAmount");
let errormessage = document.getElementById("errorMessage");
let errorMessage = "Please Enter a Valid Input.";

function calculatebutton() {
    let billamountvalue = billamount.value;
    let percentagetipvalue = percentagetip.value;
    if (billamountvalue === "") {
        errormessage.textContent = errorMessage;
    } else if (percentagetipvalue === "") {
        errormessage.textContent = errormessage;
    } else {
        errormessage.textContent = "";
        let billamount = parseInt(billamountvalue);
        let percentagetip = parseInt(percentagetipvalue);
        let tip = (percentagetip / 100) * billamount;
        let total = billamount + tip;
        tipamount.value = tip;
        totalamount.value = total;
    }
}