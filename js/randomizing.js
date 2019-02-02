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
        //console.log("f: " + element);
    });
    //console.log($('#place').text());
    $('#place').empty();
    $('#place').append(finalString);
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