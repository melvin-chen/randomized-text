function randomize() {
    var inputString = $('#phrase').val();
    var inputIntoArray = inputString.split("");
    var finalString = "";
    var upperCounter = 0;
    var lowerCounter = 0;
    //abcdefghijk
    //aaaaaaaaaaa

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
}

function copy(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }

$('#phrase').keypress(function(event) {
    if (event.keyCode == 13 || event.which == 13) {
        //$('#submitButton').focus();
        randomize();
        event.preventDefault();
    }
});