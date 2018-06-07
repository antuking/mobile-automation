$(document).ready(function() {
    $(document.body).on('click', 'a.order', function() {
        var element = $(this);
        $('.screenshots:visible').each(function() {
            if (!~$(this).parent().text().indexOf(element.text())) {
                $(this).slideToggle("fast");
            }
        });
        $(this).siblings(".screenshots").slideToggle("fast");
    });
//    $(".screenshots").find('li').each(function() {
//        $(this).append("<p class=\"ztext\">1</p>");
//    });
    $("th:contains('Timestamp')").css("text-align", "center");
    $("th:contains('Timestamp')").each(function() {
            $(this).text('Step');
        });
    $(".category-list").each(function() {
        $(this).removeClass("right");
    });
    $('.table-results').each(function() {
        var $set = $(this).find('.timestamp');
        var len = $set.length;
        $set.each(function(i) {
            if (!(i === len - 1)) {
                $(this).text(i + 1);
            } else {
                $(this).text('Chi tiết');
            }
        });
    });
});