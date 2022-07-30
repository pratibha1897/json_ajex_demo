$(document).ready(function(){
    $("button").addClass("animated bounce");
    $('button').removeClass('btn-success');
    $('#target1').css({color:'white', backgroundColor:'red'});
    $('#target2').prop('disabled', true);
    $("#txt").html("Learning <strong><i>jQuery</i></strong> is so much fun!");
//  $("#txt1").text("Learning <strong><i>jQuery</i></strong> is so much fun!");
//  $('#target1').remove();
//  $('#target4').appendTo('.left');
//  $('#target2').appendTo('.right');
//  $('.left').clone().appendTo('.right'); 
    $('.heading2left').parent().css('backgroundColor','green');
    $('.heading2right').children().css('backgroundColor','green');
    $('.left').parent().css('backgroundColor','yellow');
    $('.target:nth(1)').addClass('animated rotateInDownLeft');
    $('.target:even').addClass('animated zoomIn');

// $('.question').on('click', function(){
//         $('.answer').html('<br>jQuery is the best thing in the world!');
//         $('    .answer').css({color:'white', backgroundColor:'	#808080'});
     
//     });

    var url='http://hn.algolia.com/api/v1/search?query=javascript';
    $.getJSON(url,function(data){
        console.log(data);

        var allNews=data.hits;
        console.log(allNews);
        var eachNews='';

        allNews.map(function(item,index,array){
            $('.question').on('click', function(){
            eachNews+="<div>";
            eachNews+=item.created_at+" "+item.author;
            eachNews+="</div>";
            $('.answer').html(eachNews);
        });
    });


    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            $('.answer').html('Latitude: '+position.coords.latitude +'<br/>'+ 'Longitude: '+ position.coords.longitude);
        })
    }



    });




});
