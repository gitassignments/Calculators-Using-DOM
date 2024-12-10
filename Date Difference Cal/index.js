function DateDiffCal () {
    let First_Date = document.getElementById("SD1").value;
    let Second_Date = document.getElementById("ED1").value;
    let start = new Date(First_Date);
    let end = new Date(Second_Date);
    let DifferenceInSeconds = end - start;
    let daysDifference = DifferenceInSeconds / (1000 * 3600 * 24);
    document.getElementById("DDC").innerHTML = ("The difference is: " + daysDifference + " days");
    alert("The difference is: " + daysDifference + " days");
    console.log("The difference is: " + daysDifference + " days");
}