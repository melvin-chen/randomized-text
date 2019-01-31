function randomize() {
    var inputString = $('#phrase').val();
    var inputIntoArray = inputString.split("");
    var finalString = "";

    inputIntoArray.forEach(function(element) {
        if (Math.random() <= .5) {
            finalString += element.toString().toUpperCase();
        }
        else {
            finalString += element.toString();
        }
        console.log("f: " + element);
    });
    
   console.log(finalString);
   $('#place').append(finalString);
}