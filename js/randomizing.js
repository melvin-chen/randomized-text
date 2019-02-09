/* function randomize() {
    var t0 = performance.now();
    var inputString = $('#phrase').val();
    var inputIntoArray = inputString.split("");
    var finalString = "";
    var upperCounter = 0;
    var lowerCounter = 0;
    //abcdefghijk
    //aaaaaaaaaaa
    console.log(inputIntoArray[0]);

    inputIntoArray.forEach(function(element) {
        if (Math.random() <= .5) {
            if (upperCounter <= 2) {
                lowerCounter = 0;
                finalString += element.toString().toUpperCase();
                upperCounter++;
            }
            else {
                finalString += element.toString().toLowerCase();
                upperCounter = 0;
                lowerCounter++;
            }
        }
        else {
            if (lowerCounter <= 2) {
                upperCounter = 0;
                finalString += element.toString().toLowerCase();
                lowerCounter++;
            }
            else {
                finalString += element.toString().toUpperCase();
                lowerCounter = 0;
                upperCounter++;
            }
        }
    });
    $('#place').empty();
    $('#place').append(finalString);
    console.log(finalString);
    var t1 = performance.now();
    console.log("Call to randomize took " + (t1 - t0) + " milliseconds.")
} */

function randomize2() {
    var t0 = performance.now();
    var inputString = $('#phrase').val().toLowerCase();
    var inputIntoArray = inputString.split("");
    // console.log(inputString);
    var len = inputString.length;
    //console.log(inputString.length);
    var capitalIndex = 1;

    while (capitalIndex < (inputString.length - 1)) {
        // console.log(inputString.charAt(capitalIndex).toUpperCase());
        inputIntoArray[capitalIndex] = inputString.charAt(capitalIndex).toUpperCase();
        if (Math.random() <= .5) {
            capitalIndex += 2;
        } else {
            capitalIndex += 3;
        }
    }
    var finalString = inputIntoArray.join("");
    $('#place').empty();
    $('#place').append(finalString);
    var t1 = performance.now();
    console.log(inputIntoArray.join(""));
    console.log("Call to randomize2 took " + (t1 - t0) + " milliseconds.")
}

function copy(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}

$('#phrase').keypress(function (event) {
    if (event.keyCode == 13 || event.which == 13) {
        //$('#submitButton').focus();
        randomize2();
        event.preventDefault();
    }
});