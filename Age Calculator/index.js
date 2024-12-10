function ageCAL () {
    let currentYearOf_Person = document.getElementById("cy1").value;
    let birthYearOf_Person = document.getElementById("by1").value;
    let Result = currentYearOf_Person - birthYearOf_Person;
    document.getElementById("age1").innerHTML=("Your Age is" + Result)
    alert("Your Age is" + Result)
    console.log("Your Age is" + Result)
}