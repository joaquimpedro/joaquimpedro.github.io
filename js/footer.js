$(document)
.ready(function() {

    var
    changeSides = function() {
        $('.ui.shape')
        .eq(0)
        .shape('flip over')
        .end()
        .eq(1)
        .shape('flip over')
        .end()
        .eq(2)
        .shape('flip back')
        .end()
        ;
    };

    setInterval(changeSides, 3000);

})
;