// Russian Roulette

function testLuck() {
    var numberr = document.getElementById("number").value;
    var allValues = [1, 2, 3, 4, 5, 6];

    var randomNumber = Math.floor(Math.random() * (allValues.length));

    if ( numberr > allValues[randomNumber]) {
        alert("You stayed alive!");
    } else if (numberr < allValues[randomNumber]) {
        alert("You stayed alive!");
    } else if (numberr = allValues[randomNumber]) {
        alert("You died!")
    }
}