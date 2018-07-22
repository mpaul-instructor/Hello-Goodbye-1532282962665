function helloFunc(){
    var htmlToAdd = '<p> hello </p>';
    $('body').append(htmlToAdd);
}
$('#firstButton').click(helloFunc);

function goodbyeFunc(){
    var htmlToAdd = '<p> goodbye! </p>';
    $('body').append(htmlToAdd);
}
$('#secondButton').click(goodbyeFunc);