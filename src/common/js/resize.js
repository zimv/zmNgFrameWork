window.onresize = function(){
    resize();
}

function resize(){
    //html:25.6px: 39rem 960px
    //html:40px: 39rem 1560px
    var base = 39;//rem

    var wid = $(window).width()-25;//减去滚动条的宽度
    var hei = $(window).height();
    // if(hei < 460){//适应个别高度较矮的设备
    //     $('html').css('font-size', '63px');
    //     return;
    // }
    if(wid <= 1100){
        $('html').css('font-size', 1100/39 + 'px');
        return;
    }
    if(wid >= 1560){
        $('html').css('font-size', '40px');
        return;
    }
    $('html').css('font-size', wid/39 + 'px');//在1560和960之间，除以39的基数，来算font-size


    // console.log($("html").css("font-size"));
}
resize();
window.resize = resize;