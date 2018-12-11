$(document).ready(function() {

$('#pagepiling').pagepiling({
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4'],
        verticalCentered: true,
        sectionsColor: ['white', '#F26D40', '#D95242', '#A83738'],
        sectionSelector: '.section',
        loopTop: true,
			  loopBottom: true,
        afterRender: function(){
          $('#pp-nav').addClass('custom');
        },
        afterLoad: function(anchorLink, index){
          if(index>1){
            $('#pp-nav').removeClass('custom');
          }else{
            $('#pp-nav').addClass('custom');
          }
        }
    });

/* hotspots */
$('#phase2').hide();
$('#result1').hide();
$('#result2').hide();
$('#answer1').on('click', () => {
    $('#phase1').hide(),
    $('#result1').show(),
    $('#phase2').show();
});
$('#answer2').on('click', () => {
    $('#phase1').hide(),
    $('#result2').show(),
    $('#phase2').show();
});
$('#answer3').on('click', () => {
    $('#phase1').hide(),
    $('#result1').show(),
    $('#phase2').show();
});
$('#answer4').on('click', () => {
    $('#phase1').hide(),
    $('#result1').show(),
    $('#phase2').show();
});

/* social factors */
$('#phase4').hide();
$('#container2').hide();
$('#container3').hide();
$('#result3').hide();
$('#result4').hide();
$('#answer5').on('click', () => {
    $('#phase3').hide(),
    $('#result3').show(),
    $('#phase4').show();
});
$('#answer6').on('click', () => {
    $('#phase3').hide(),
    $('#result3').show(),
    $('#phase4').show();
});
$('#answer7').on('click', () => {
    $('#phase3').hide(),
    $('#result3').show(),
    $('#phase4').show();
});
$('#answer8').on('click', () => {
    $('#phase3').hide(),
    $('#result4').show(),
    $('#phase4').show();
});

$('#option1').on('click', () => {
    $('#container2').hide(),
    $('#container3').hide(),
    $('#container1').show();
});
$('#option2').on('click', () => {
    $('#container1').hide(),
    $('#container3').hide(),
    $('#container2').show();
});
$('#option3').on('click', () => {
    $('#container1').hide(),
    $('#container2').hide(),
    $('#container3').show();
});

/* gainesville comparison */
$('#phase6').hide();
$('#container5').hide();
$('#container6').hide();
$('#container7').hide();
$('#container8').hide();
$('#container9').hide();
$('#container10').hide();
$('#container11').hide();
$('#container12').hide();
$('#container13').hide();
$('#result5').hide();
$('#result6').hide();
$('#answer9').on('click', () => {
    $('#phase5').hide(),
    $('#result5').show(),
    $('#phase6').show();
});
$('#answer10').on('click', () => {
    $('#phase5').hide(),
    $('#result6').show(),
    $('#phase6').show();
});
$('#answer11').on('click', () => {
    $('#phase5').hide(),
    $('#result5').show(),
    $('#phase6').show();
});
$('#answer12').on('click', () => {
    $('#phase5').hide(),
    $('#result5').show(),
    $('#phase6').show();
});

$('#option4').on('click', () => {
    $('#container5').hide(),
    $('#container6').hide(),
    $('#container7').hide(),
    $('#container8').hide(),
    $('#container9').hide(),
    $('#container10').hide(),
    $('#container11').hide(),
    $('#container12').hide(),
    $('#container13').hide(),
    $('#container4').show();
});
$('#option5').on('click', () => {
    $('#container4').hide(),
    $('#container6').hide(),
    $('#container7').hide(),
    $('#container8').hide(),
    $('#container9').hide(),
    $('#container10').hide(),
    $('#container11').hide(),
    $('#container12').hide(),
    $('#container13').hide(),
    $('#container5').show();
});
$('#option6').on('click', () => {
    $('#container4').hide(),
    $('#container5').hide(),
    $('#container7').hide(),
    $('#container8').hide(),
    $('#container9').hide(),
    $('#container10').hide(),
    $('#container11').hide(),
    $('#container12').hide(),
    $('#container13').hide(),
    $('#container6').show();
});
$('#option7').on('click', () => {
    $('#container4').hide(),
    $('#container5').hide(),
    $('#container6').hide(),
    $('#container8').hide(),
    $('#container9').hide(),
    $('#container10').hide(),
    $('#container11').hide(),
    $('#container12').hide(),
    $('#container13').hide(),
    $('#container7').show();
});
$('#option8').on('click', () => {
    $('#container4').hide(),
    $('#container5').hide(),
    $('#container6').hide(),
    $('#container7').hide(),
    $('#container9').hide(),
    $('#container10').hide(),
    $('#container11').hide(),
    $('#container12').hide(),
    $('#container13').hide(),
    $('#container8').show();
});
$('#option9').on('click', () => {
    $('#container4').hide(),
    $('#container5').hide(),
    $('#container6').hide(),
    $('#container7').hide(),
    $('#container8').hide(),
    $('#container10').hide(),
    $('#container11').hide(),
    $('#container12').hide(),
    $('#container13').hide(),
    $('#container9').show();
});
$('#option10').on('click', () => {
    $('#container4').hide(),
    $('#container5').hide(),
    $('#container6').hide(),
    $('#container7').hide(),
    $('#container8').hide(),
    $('#container9').hide(),
    $('#container11').hide(),
    $('#container12').hide(),
    $('#container13').hide(),
    $('#container10').show();
});
$('#option11').on('click', () => {
    $('#container4').hide(),
    $('#container5').hide(),
    $('#container6').hide(),
    $('#container7').hide(),
    $('#container8').hide(),
    $('#container9').hide(),
    $('#container10').hide(),
    $('#container12').hide(),
    $('#container13').hide(),
    $('#container11').show();
});
$('#option12').on('click', () => {
    $('#container4').hide(),
    $('#container5').hide(),
    $('#container6').hide(),
    $('#container7').hide(),
    $('#container8').hide(),
    $('#container9').hide(),
    $('#container10').hide(),
    $('#container11').hide(),
    $('#container13').hide(),
    $('#container12').show();
});
$('#option13').on('click', () => {
    $('#container4').hide(),
    $('#container5').hide(),
    $('#container6').hide(),
    $('#container7').hide(),
    $('#container8').hide(),
    $('#container9').hide(),
    $('#container10').hide(),
    $('#container11').hide(),
    $('#container12').hide(),
    $('#container13').show();
});


});
