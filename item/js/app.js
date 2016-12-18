$(function(){
    var n=36;
    var degs=360/n;
    for(var i=0;i<n;i++){
        var o=new Item(i,degs*i);
        o._create();
        o.jqDom.css({
            "transform": 'rotate(' + o.deg + 'deg)'
        });
    }

    $(".border").mouseover(function(){
        var startItem=new Item();
        startItem.start($(this));
        startItem.onchange(n,$(this));
    });

    $(".circle").mouseover(function(e){
        console.log(e.pageX,e.pageY);
    });
});
