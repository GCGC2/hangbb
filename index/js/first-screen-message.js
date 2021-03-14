// 咨询导航滑动效果
$(function () {
    $('#message .message-title ul li').each(function () {
        $(this).mouseenter(function () {
            var li = $(this);
            $(this).addClass("active").siblings().removeClass("active");
            var index = li.index();
            var liWidth = (li.width()) / 2; //元素宽度
            var liPosition = li.position().left + liWidth;  //元素位置
            // console.log(liWidth);
            // console.log(liPosition);
            $(".head_line").stop().animate({
                left: liPosition - 12 + "px"
            }, 300);
            // console.log(index);
            var content = $("#message .message-content .content-wrapper");
            var contentWidth = content.width();
            console.log(contentWidth);
            $("#message .message-content .content-wrapper ul").stop().animate({marginLeft:- contentWidth * index  + "px"},300);
        });
    })
})