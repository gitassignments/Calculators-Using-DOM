// js code
function FUELEFFICIENCY () {
    let Miles_Driven = document.getElementById("MD1").value;
    let Gas_Gallons = document.getElementById("GS1").value;
    let Miles_Per_Gallon = Miles_Driven / Gas_Gallons;
    document.getElementById("FE").innerHTML=("YOUR MPG Is " + Miles_Per_Gallon);
    alert("YOUR MPG Is " + Miles_Per_Gallon);
    console.log("YOUR MPG Is " + Miles_Per_Gallon);
}