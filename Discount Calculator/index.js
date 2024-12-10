function CalDistance () {
    let Original_Price = document.getElementById("Op1").value;
    let Discount_Percentage = document.getElementById("dp1").value;
    let discounted_Price = (Original_Price * Discount_Percentage) / 100;
    let Final_Price = Original_Price - discounted_Price;
    document.getElementById("DisCal").innerHTML=("Your Discounted Price Is " + Final_Price);
    alert("Your Discounted Price Is " + Final_Price);
    console.log("Your Discounted Price Is " + Final_Price);
}