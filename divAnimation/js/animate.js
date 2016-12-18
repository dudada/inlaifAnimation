$(function() {
    var str = "var a=10,b=5;console.log(a+b);";
    $(".border").mouseover(function() {
        var index = $(".circle .border").index(this);
        $(this).addClass("sin" + index);
        for (var i = 0; i <= index; i++) {
            var reverse = index - i;
            var delayTime = 0.5 + 0.1 * i + "s";
            $(".border[index=" + i + "]").addClass("sin" + i);
            $(".border[index=" + reverse + "]").css("animation-delay", delayTime);
            if (i < str.length) {
                $(".border[index=" + reverse + "]").html(str[i]);
            }else{
                $(".border[index=" + reverse + "]").html(str[i%8]);
            }
        }
        for (var j = 35, a = index; j > index; j--, a++) {
            var rever = 35 - j;
            var delay = 0.5 + 0.1 * (a + 1) + "s";
            $(".border[index=" + j + "]").addClass("sin" + j);
            $(".border[index=" + j + "]").css("animation-delay", delay);
            if (a < str.length) {
                $(".border[index=" + j + "]").html(str[a]);
            }else{
                $(".border[index=" + j + "]").html(str[a%8]);
            }
        }
    });
});