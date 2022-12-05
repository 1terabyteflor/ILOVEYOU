$('#text-green')
    .data('textToggle', "<3 <3 b19.3=b8#4a; <3 <3")
    .hover(function (e) {
        var that = $(this);
        var textToSet = that.data('textToggle');
        that.data('textToggle', that.text());
        that.text(textToSet);
    }, function (e) {
        var that = $(this);
        var textToSet = that.data('textToggle');
        that.data('textToggle', that.text());
        that.text(textToSet);
    });

$('#subtitle-1')
    .data('textToggle', "¿¿¿¿¿ a3?b+#1=#1338#b ???????")
    .hover(function (e) {
        var that = $(this);
        var textToSet = that.data('textToggle');
        that.data('textToggle', that.text());
        that.text(textToSet);
    }, function (e) {
        var that = $(this);
        var textToSet = that.data('textToggle');
        that.data('textToggle', that.text());
        that.text(textToSet);
    });

$('#subtitle-2')
.data('textToggle', "¡¡¡¡¡ .8=?9.b#b-313ba?.?=8+ : )")
.hover(function (e) {
    var that = $(this);
    var textToSet = that.data('textToggle');
    that.data('textToggle', that.text());
    that.text(textToSet);
}, function (e) {
    var that = $(this);
    var textToSet = that.data('textToggle');
    that.data('textToggle', that.text());
    that.text(textToSet);
});

setAlert();

function setAlert() {
  setTimeout(function() { 
    alert("54_b,!;@06!6:W.a80427-$81:@?7-57549_b9!$-#7c:!_55c:?12_74b273=:=_1!!W9-27-5;58$1;?c$a,$014$_.7$.1965");
    window.location.href = "./script.html"
  }, 30000); 

}