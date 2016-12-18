$(function(){
    $(".border").mouseover(function() {
        function item() {
            this.start = function(target) {
                var index = $(".circle .border").index(target);
                $(target).addClass("sin" + index);
            };

            this.onchange = function() {
                console.log("......");
            };
        }


        var itemAnimation = new item();
        itemAnimation.start($(this));
    });
});


