let billAmount = document.getElementById("billAmount");
let percentageTip = document.getElementById("percentageTip");
let tipAmount = document.getElementById("tipAmount");
let totalAmount = document.getElementById("totalAmount");
let errorMessage = document.getElementById("errorMessage");
let errorMessageContent = "Please Enter a Valid Input.";

function calculateTipTotalAmountbutton() {
    let billAmountValue = billAmount.value;
    let percentageTipValue = percentageTip.value;
    if (billamountValue === "") {
        errorMessage.textContent = errorMessageContent;
    } else if (percentageTipValue === "") {
        errorMessage.textContent = errormessageContent;
    } else {
        errorMessage.textContent = "";
        let billAmount = parseInt(billAmountValue);
        let percentageTip = parseInt(percentagetipvalue);
        let tip = (percentageTip / 100) * billAmount;
        let total = billAmount + tip;
        tipAmount.value = tip;
        totalAmount.value = total;
    }
}
