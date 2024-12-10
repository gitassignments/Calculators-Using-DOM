function TipCal() {
let YourTip_Perc = parseFloat(document.getElementById("TP1").value);
let Total_Amount = parseFloat(document.getElementById("TA1").value);
let Tip_Percentage = YourTip_Perc / 100;
let Tip_amount = Tip_Percentage * Total_Amount;
let TOTAL_WITH_TIP = Total_Amount + Tip_amount;
document.getElementById("TIP1").innerHTML = ("Your Total Amount With Tip Is " + TOTAL_WITH_TIP);
alert("Your Total Amount With Tip Is " + TOTAL_WITH_TIP);
console.log("Your Total Amount With Tip Is " + TOTAL_WITH_TIP);
}