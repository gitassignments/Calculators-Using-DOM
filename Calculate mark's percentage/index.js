function CalculatePercentage() {
    let stuTM_grades = document.getElementById("tm1").value;
    let stuOBT_grades = document.getElementById("obt1").value;
    let result = stuOBT_grades / stuTM_grades * 100
    document.getElementById("PC").innerHTML=("You've got " + result + "%")
    alert("You've got " + result + "%")
    console.log("You've got " + result + "%")
} 






