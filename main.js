//javascript
let tagJs = document.getElementsByTagName('h1')
let classJs = document.getElementsByClassName('contoh-class')
let idJs = document.getElementById('contoh-id')

//jQuery
let tagJQ = $('h1')
let classJQ = $('.contoh-class')
let idJQ = $('contoh-id')

//event
$('button#tombol-class').click(function () {
$('#contoh-class').toggle()
    $('contoh-class').toggle()
})

$('input[name="nama"]).keyup(function () { 
    console.log('mengetik......');
});

$('select[name="jenis-kelamin"]').change(function () { 
    console.log('dipilih');
    
});

$('button#tombol-class').click(function () { 
    console.log($('.contoh-class').text(''))
    //ketika tidak ada faramaeternya mengambil  
    console.log($('.contoh-class').html('<b>HI</b>'))
    //ketika ada faramaeternya mengambil  perintah
    //this fungsi untuk menambil farameter apa yg di perintah kan
    //get mrngambil parameternya
    //set
});

// $('button#tombol-class').click(function () { 
//     $('.contoh-class').animate({left:'250px', 'font-size': '50px'}5000);
    
// });

$('button#tombol-id').click(function () { 
    $('#contoh-id').slideToggle();
    
});
// hiden, show, fadein, fade out, slideDown, slideUp, animate