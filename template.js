var main = function () 
{
	"use strict"; 

	$(".refresh").mouseleave(function() 
	{
	$(".refresh>p").text('');
	});

	$( ".abaut,.home" ).on( "click", function() 
	{
		$(".fotomood").hide();
		$(".abautininfo").show();
	});

	$( ".vector" ).on( "click", function() 
	{
		$("iframe, .abautininfo").hide();
		$(".fotomood, .refresh, .afbeelnginfotomood5,.afbeeldinginfotomood6").show();
		$(".afbeeldinginfotomood1>figure").css('background', 'rgb(250, 244, 215) url("img/vikking.svg") no-repeat center center');
		$(".afbeeldinginfotomood1").mouseenter(function() 
		{
			$(".afbeeldinginfotomood1>p").text('Thema : kubisme in illustratie dit is een viking')
		});
		$(".afbeeldinginfotomood2>figure").css('background', 'rgb(0, 222, 146) url("img/ridder.svg") no-repeat center center');
		$(".afbeeldinginfotomood2").mouseenter(function() 
		{
			$(".afbeeldinginfotomood2>p").text('Thema : kubisme in illustratie dit is een ridder')
		});
		$(".afbeeldinginfotomood3>figure").css('background', 'rgb(255, 108, 44) url("img/indiaan.svg") no-repeat center center');
		$(".afbeeldinginfotomood3").mouseenter(function() 
		{
			$(".afbeeldinginfotomood3>p").text('Thema : kubisme in illustratie dit is een indiaan')
		});
		$(".afbeeldinginfotomood4>figure").css('background', 'rgb(127, 255, 249) url("img/kerstman.svg") no-repeat center center');
		$(".afbeeldinginfotomood4").mouseenter(function() 
		{
			$(".afbeeldinginfotomood4>p").text('Thema : kerstmis')
		});
		$(".afbeeldinginfotomood5, .afbeeldinginfotomood6").show();
		$(".afbeeldinginfotomood5>figure").css('background', 'rgb(255, 204, 44) url("img/wagen.svg") no-repeat center center');
		$(".afbeeldinginfotomood5").mouseenter(function() 
		{
			$(".afbeeldinginfotomood5>p").text('Thema : bergsteiger, deze fictieve foodtruck heb ik gemaakt voor een schoolproject')
		});
		$(".afbeeldinginfotomood6>figure").css('background', 'rgb(124, 228, 73) url("img/radio.svg") no-repeat center center');
		$(".afbeeldinginfotomood6").mouseenter(function() 
		{
			$(".afbeeldinginfotomood6>p").text('Thema : radio, deze radio heb ik gemaakt voor een schoolproject')
		});
	});

	$( ".photoshop" ).on( "click", function() 
	{
		$(".refresh, .fotomood, .afbeeldinginfotomood5,.afbeeldinginfotomood6").show();
		$(" iframe, .abautininfo").hide();
		$(".afbeeldinginfotomood1>figure").css('background', 'rgb(250, 244, 215) url("img/4001.jpg") no-repeat center center');
		$(".afbeeldinginfotomood1").mouseenter(function() 
		{
			$(".afbeeldinginfotomood1>p").text('Thema : monster')
		});
		$(".afbeeldinginfotomood2>figure").css('background', 'rgb(0, 222, 146) url("img/4002.jpg") no-repeat center center');
		$(".afbeeldinginfotomood2").mouseenter(function() 
		{
			$(".afbeeldinginfotomood2>p").text('Thema : Flyper poster, dit was een GIP opdracht 2013-2014')
		});
		$(".afbeeldinginfotomood3>figure").css('background', 'rgb(255, 108, 44) url("img/4003.jpg") no-repeat center center');
		$(".afbeeldinginfotomood3").mouseenter(function() 
		{
			$(".afbeeldinginfotomood3>p").text('Thema : Axenroos dieren Delta, dit was een GIP opdracht 2012-2013 deze zijn te bezichtigen in basischool Delta oud-Turnhout')
		});
		$(".afbeeldinginfotomood4>figure").css('background', 'rgb(127, 255, 249) url("img/4005.jpg") no-repeat center center');
		$(".afbeeldinginfotomood4").mouseenter(function() 
		{
			$(".afbeeldinginfotomood4>p").text('Thema : redbul geeft je vleugels')
		});
		$(".afbeeldinginfotomood5>figure").css('background', 'rgb(255, 204, 44) url("img/4004.jpg") no-repeat center center');
		$(".afbeeldinginfotomood5>figure").css('background-size', '130%');
		$(".afbeeldinginfotomood5").mouseenter(function() 
		{
			$(".afbeeldinginfotomood5>p").text('Thema : illustratie van een supervrouwelijk monstertje')
		});
		$(".afbeeldinginfotomood6>figure").css('background', 'rgb(124, 228, 73) url("img/4006.jpg") no-repeat center center');
		$(".afbeeldinginfotomood6").mouseenter(function() 
		{
			$(".afbeeldinginfotomood6>p").text('Thema : dierengezicht')
		});
	});

	$( ".logodesign" ).on( "click", function() 
	{
		$(".refresh, .fotomood, .afbeeldinginfotomood5,.afbeeldinginfotomood6").show();
		$(" iframe, .abautininfo").hide();
		$(".afbeeldinginfotomood1>figure").css('background', 'rgb(250, 244, 215) url("img/delta.svg") no-repeat center center');
		$(".afbeeldinginfotomood1").mouseenter(function() 
		{
			$(".afbeeldinginfotomood1>p").text('Thema : Deltaschool logo, dit was een GIP opdracht 2012-2013 het logo is te bezichtigen in basischool Delta oud-Turnhout')
		});
		$(".afbeeldinginfotomood2>figure").css('background', 'rgb(0, 222, 146) url("img/sosjetee.svg") no-repeat center center');
		$(".afbeeldinginfotomood2").mouseenter(function() 
		{
			$(".afbeeldinginfotomood2>p").text('Thema : sosjetee sossis logo, dit was een stage opdracht 2014-2015 bij Gramma')
		});
		$(".afbeeldinginfotomood3>figure").css('background', 'rgb(255, 108, 44) url("img/amuze.svg") no-repeat center center');
		$(".afbeeldinginfotomood3").mouseenter(function() 
		{
			$(".afbeeldinginfotomood3>p").text('Thema : Amuze logo, dit was een schoolproject 2014-2015')
		});
		$(".afbeeldinginfotomood4>figure").css('background', 'rgb(127, 255, 249) url("img/flyper.svg") no-repeat center center');
		$(".afbeeldinginfotomood4").mouseenter(function() 
		{
			$(".afbeeldinginfotomood4>p").text('Thema : Flyper logo, dit was een GIP opdracht 2013-2014')
		});
		$(".afbeeldinginfotomood5>figure").css('background', 'rgb(255, 204, 44) url("img/bergsteiger.svg") no-repeat center center');
		$(".afbeeldinginfotomood5").mouseenter(function() 
		{
			$(".afbeeldinginfotomood5>p").text('Thema : bergsteiger logo, dit logo dient voor een fictieve foodtruck die ik heb gemaakt voor een schoolproject')
		});
		$(".afbeeldinginfotomood5, .afbeeldinginfotomood6").show();
		$(".afbeeldinginfotomood5>figure").css('background-size', '100%');
		$(".afbeeldinginfotomood6>figure").css('background', 'rgb(124, 228, 73) url("img/realityhost.svg") no-repeat center center');
		$(".afbeeldinginfotomood6").mouseenter(function() 
		{
			$(".afbeeldinginfotomood6>p").text('Thema : realityhost logo, dit logo dient voor een hosting bedrijf')
		});
	});

	$( ".fotografie" ).on( "click", function() 
	{
		$(".refresh, .fotomood, .afbeeldinginfotomood5,.afbeeldinginfotomood6").show();
		$(" iframe, .abautininfo").hide();
		$(".afbeeldinginfotomood1>figure").css('background', 'white url("img/5001.jpg") no-repeat center center');
		$(".afbeeldinginfotomood1").mouseenter(function() 
		{
			$(".afbeeldinginfotomood1>p").text('Deze foto is gemaakt voor een schoolwedstijd in 2012.')
		});
		$(".afbeeldinginfotomood2>figure").css('background', 'white url("img/5002.jpg") no-repeat center center');
		$(".afbeeldinginfotomood2").mouseenter(function() 
		{
			$(".afbeeldinginfotomood2>p").text('Deze foto is een electrischiteitspaal in kikkerperspectiefgetrokken')
		});
		$(".afbeeldinginfotomood3>figure").css('background', 'white url("img/5003.jpg") no-repeat center center');
		$(".afbeeldinginfotomood3").mouseenter(function() 
		{
			$(".afbeeldinginfotomood3>p").text('Dit is een close-up van een plastieke zak')
		});
		$(".afbeeldinginfotomood4>figure").css('background', 'white url("img/5006.jpg") no-repeat center center');
		$(".afbeeldinginfotomood4").mouseenter(function() 
		{
			$(".afbeeldinginfotomood4>p").text('Zelfportret')
		});
		$(".afbeeldinginfotomood5>figure").css('background', 'white url("img/5005.jpg") no-repeat center center');
		$(".afbeeldinginfotomood5").mouseenter(function() 
		{
			$(".afbeeldinginfotomood5>p").text('Zelfportret in fotostudio, thema :futurisme')
		});
		$(".afbeeldinginfotomood5, .afbeeldinginfotomood6").show();
		$(".afbeeldinginfotomood5>figure").css('background-size', '100%');
		$(".afbeeldinginfotomood6>figure").css('background', 'white url("img/5004.jpg") no-repeat center center');
		$(".afbeeldinginfotomood6").mouseenter(function() 
		{
			$(".afbeeldinginfotomood6>p").text('Deze foto is gemaakt in Tielen met een paar vrienden, thema : herfst')
		});
	});

	$( ".webdesign" ).on( "click", function() 
	{
		$(".refresh, .fotomood").show();
		$(" iframe, .abautininfo, .afbeeldinginfotomood5,.afbeeldinginfotomood6").hide();
		$(".afbeeldinginfotomood1>figure").css('background', 'url("img/6001.jpg") no-repeat center center');		
		$(".afbeeldinginfotomood1").mouseenter(function() 
		{
			$(".afbeeldinginfotomood1>p").text('Thema : bergsteiger website, deze site dient voor een fictieve foodtruck die ik heb gemaakt voor een schoolproject. u kan ze bezoeken op www.bergsteiger.realityhost.be')
		});
		$(".afbeeldinginfotomood2>figure").css('background', 'url("img/6002.jpg") no-repeat center center');
		$(".afbeeldinginfotomood2").mouseenter(function() 
		{
			$(".afbeeldinginfotomood2>p").text('Thema : Amuze website, deze site dient voor een fictieve opdracht die ik heb gemaakt voor een schoolproject')
		});
		$(".afbeeldinginfotomood3>figure").css('background', 'url("img/6003.jpg") no-repeat center center');
		$(".afbeeldinginfotomood3").mouseenter(function() 
		{
			$(".afbeeldinginfotomood3>p").text('Thema : Flyper website,  deze site is gemaakt met Adobe muse. dit was een GIP opdracht 2013-2014. u kan ze bezoeken op www.flyper.realityhost.be')
		});
		$(".afbeeldinginfotomood4>figure").css('background', 'url("img/6004.jpg") no-repeat center center');
		$(".afbeeldinginfotomood4").mouseenter(function() 
		{
			$(".afbeeldinginfotomood4>p").text('Thema : Flyper website,  deze site is gemaakt met Adobe muse. dit was een GIP opdracht 2013-2014. u kan ze bezoeken op www.flyper.realityhost.be')
		});
	});


    $( ".tekeningen" ).on( "click", function() 
    {
		$(".refresh, .fotomood, .afbeeldinginfotomood5,.afbeeldinginfotomood6").show();
		$(" iframe, .abautininfo").hide();
		$(".afbeeldinginfotomood1>figure").css('background', 'rgb(250, 244, 215) url("img/7001.jpg") no-repeat center center');
		$(".afbeeldinginfotomood1").mouseenter(function() 
		{
			$(".afbeeldinginfotomood1>p").text('Thema : schilderij landschap, dit landschap heb ik geschilderd in 2014')
		});
		$(".afbeeldinginfotomood2>figure").css('background', 'rgb(0, 222, 146) url("img/7002.jpg") no-repeat center center');
		$(".afbeeldinginfotomood2").mouseenter(function() 
		{
			$(".afbeeldinginfotomood2>p").text('Thema : schilderij portret, dit portret heb ik geschilderd in 2014')
		});

		$(".afbeeldinginfotomood3>figure").css('background', 'rgb(255, 108, 44) url("img/7003.jpg") no-repeat center center');
		$(".afbeeldinginfotomood3").mouseenter(function() 
		{
			$(".afbeeldinginfotomood3>p").text('Thema : tekening monstertje, dit monstertje stikkend in een fles heb ik getekend in 2014')
		});

		$(".afbeeldinginfotomood4>figure").css('background', 'rgb(127, 255, 249) url("img/7004.jpg") no-repeat center center');
		$(".afbeeldinginfotomood4").mouseenter(function() 
		{
			$(".afbeeldinginfotomood4>p").text('Thema : beschildering wagen, dit was een GIP opdracht 2013-2014. U kan hem bezichtigen in basischool Delta oud-Turnhout')
		});
		$(".afbeeldinginfotomood5>figure").css('background', 'rgb(255, 108, 44) url("img/7005.jpg") no-repeat center center');
		$(".afbeeldinginfotomood5>figure").css('background-size', '100%');
		$(".afbeeldinginfotomood5").mouseenter(function() 
		{
			$(".afbeeldinginfotomood5>p").text('Thema : tekening muziek zem, deze muzikale illustratie heb ik getekend in 2014')
		});
		$(".afbeeldinginfotomood6>figure").css('background', 'rgb(124, 228, 73) url("img/7006.jpg") no-repeat center center');
		$(".afbeeldinginfotomood6").mouseenter(function() 
		{
			$(".afbeeldinginfotomood6>p").text('Thema : tekening model, deze tekening heb ik in 2014 gemaakt')
		});
	});

	$( ".video" ).on( "click", function() 
	{
		$(".fotomood, iframe").show();
		$(".refresh, .abautininfo").hide();
	});
}; 

// scroll to
$('a[href^="#"]').on('click', function(event) 
{

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});


$(function() 
{
    var upButton = $("#up-button");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 500) {
            upButton.addClass("visible");
        } else {
            upButton.removeClass("visible");
        }
    });
});

$("document").ready(main);