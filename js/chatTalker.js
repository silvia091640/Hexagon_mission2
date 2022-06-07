$(document).ready(function() {

    $('.btn_top').click(function() {
        $('html').scrollTop(0);
    });

    $('.question_item').click( function() {
        $(this).find('.question_text').toggleClass('active');
       
        $(this).parent().find('p').slideToggle();

        if ($(".question_text").hasClass("active"))
        {
            $(this).find('.plus').show();;
            $(this).find('.minus').hide();

        }
        else{
            $(this).find('.plus').hide();
            $(this).find('.minus').show();
        }
    });

    $('.count_text a').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('count_text_active');
        $(this).parent().siblings().find('a').removeClass('count_text_active');

        if ($(this).text()=='>25000位') {
            $('.user_count p').text('>25000');
            $('.basic_month_pay p').text('200');
            $('.standard_month_pay p').text('1200');

        }
        else if ($(this).text()=='25000位') {
            $('.user_count p').text('25000');
            $('.basic_month_pay p').text('300');
            $('.standard_month_pay p').text('1300');
        }
        else if ($(this).text()=='20000位') {
            $('.user_count p').text('20000');
            $('.basic_month_pay p').text('400');
            $('.standard_month_pay p').text('1400');
        }
        else if ($(this).text()=='15000位') {
            $('.user_count p').text('15000');
            $('.basic_month_pay p').text('500');
            $('.standard_month_pay p').text('1500');
        }
        else {
            $('.user_count p').text('10000');
            $('.basic_month_pay p').text('600');
            $('.standard_month_pay p').text('1600');
        }
    
    });
   
});