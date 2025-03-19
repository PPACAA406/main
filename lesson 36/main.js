$('li').click(function(){
    alert('clicked');
});

$('#btn').click(function(){
    console.log($('#h1').text());
    $('#h1').text('testing text');
    $('#h1').append('extra text');
})

$('$btn2').on('click', function(){
    console.log('Second button in my heading')
})