function BMICal () {
    let Your_Weight = parseFloat(document.getElementById("WEI1").value);
    let Your_Height = parseFloat(documet.getElementById("HEI1").value);
    let Your_BMI = Your_Weight / (Your_Height * Your_Height);
    document.getElementById("BMI1").innerHTML=("Your BMI Is " + Your_BMI);
    alert("Your BMI Is " + Your_BMI);
    console.log("Your BMI Is " + Your_BMI);
}

