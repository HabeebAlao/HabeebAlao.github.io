$(document).ready(function() {

    $('.nav-menu a').on('click', function(event) {

        event.preventDefault();


        var targetId = $(this).attr('href');


        var $targetElement = $(targetId);


        $('html, body').animate({
            scrollTop: $targetElement.offset().top
        }, 1000);
    });

const carDetails = {
    "cullinan": {
        "make": "Rolls Royce",
        "year": "2020",
        "fuel": "Petrol",
        "litre": "6.7",
        "imageUrl": "/HabeebAlao.github.io/ASSETS/images/RollsRoyce-Cullinan.png"
    },
    "g class": {
        "make": "Mercedes",
        "year": "2021",
        "fuel": "Petrol",
        "litre": "4.0",
        "imageUrl": "/HabeebAlao.github.io/ASSETS/images/gClass2.png"
    },
    "wraith": {
        "make": "Rolls Royce",
        "year": "2022",
        "fuel": "Petrol",
        "litre": "6.6",
        "imageUrl": "/HabeebAlao.github.io/ASSETS/images/RollsRoyce-wraith.png"
    },
    "wrangler": {
        "make": "Jeep",
        "year": "2021",
        "fuel": "Petrol",
        "litre": "3.6",
        "imageUrl": "/HabeebAlao.github.io/ASSETS/images/jeep-wrangler.png"
    },
    "hurrican": {
        "make": "Lamborghini",
        "year": "2021",
        "fuel": "Petrol",
        "litre": "5.2",
        "imageUrl": "/HabeebAlao.github.io/ASSETS/images/Lamborghini-Hurican.png"
    },
    "812": {
        "make": "Ferrari",
        "year": "2021",
        "fuel": "Petrol",
        "litre": "6.5",
        "imageUrl": "/HabeebAlao.github.io/ASSETS/images/Ferrari_812_Superfast.png"
    }
};


$(".model-selector button").on("click", function() {


    $(".model-selector button.active").removeClass("active");
    

    $(this).addClass("active");

    const carName = $(this).text().toLowerCase();
        

    $("#make").text(carDetails[carName].make);
    $("#year p").text(carDetails[carName].year);
    $("#fuel p").text(carDetails[carName].fuel);
    $("#litre p").text(carDetails[carName].litre);



    $(".car-display").css("background-image", "url(" + carDetails[carName].imageUrl + ")");
});

$('.question').on('click', function () {
    $('#faqs > div > div.question.active').removeClass('active');
    $('.answer').hide();

    $(this).addClass('active');
    console.log(this);
    $($(this).next()).slideDown( "slow");
    
})
});