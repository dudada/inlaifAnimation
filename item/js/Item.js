function Item(index,deg) {
    this.deg = deg;
    this.jqDom = null;
    this.index=index;

}
Item.prototype._create = function() {
    this.jqDom = $('<div data-index='+this.index+' class="border"></div>');
    $('.wrap-circle').append(this.jqDom);
};
Item.prototype.start = function(target) {
    var index = $(".circle .border").index(target);
    $(target).addClass("sin" + index);
    $(target).on("webkitAnimationEnd",function(){
        var data=$(".circle .border").index($(this));
        $(this).removeClass("sin" + data);
    });
};

Item.prototype.onchange = function(number,targets) {
    var str = "var a=10,b=5;console.log(a+b);";
    var array = [];
    for (var b = 0; b < number; b++) {
        array.push($(".border[data-index=" + b + "]"));
    }
    var index = $(".circle .border").index(targets);
    for (var i = index-1; i >= 0; i--) {
        var reverse = index-i;
        var delayTime = 0.5 + 0.1 * reverse + "s";
        array[i].addClass("sin" + i);
        array[i].on("webkitAnimationEnd",function(){
            var data=$(".circle .border").index($(this));
            var deg=360/number*data;
            $(this).removeClass("sin" + data);
            $(this).attr("style","transform:rotate("+deg+"deg)");
        });
        array[i].css("animation-delay", delayTime);
        if (i < str.length) {
            $(".border[data-index=" + reverse + "]").html(str[i]);
        }else{
            $(".border[data-index=" + reverse + "]").html(str[i%str.length]);
        }
    }
    for (var j = 35, a = index; j > index; j--, a++) {
        var delay = 0.5 + 0.1 * (a + 1) + "s";
        array[j].addClass("sin" + j);
        array[j].on("webkitAnimationEnd",function(){
            var data=$(".circle .border").index($(this));
            var deg=360/number*data;
            $(this).removeClass("sin" + data);
            $(this).attr("style","transform:rotate("+deg+"deg)");
        });
        array[j].css("animation-delay", delay);
        if (a < str.length) {
            $(".border[data-index=" + j + "]").html(str[a]);
        }else{
            $(".border[data-index=" + j + "]").html(str[a%str.length]);
        }
    }
};