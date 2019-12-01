$('.start-container')
  .visibility({
    once       : false,
    continuous : true,
    onPassing  : function(calculations) {
        setVisible('.hours-container', calculations.percentagePassed);
    }
});

$('.hours-container')
.visibility({
    once       : false,
    continuous : true,
    onPassing  : function(c) {
        setVisible('.maps-container', c.percentagePassed);
        if (c.bottomVisible || !c.bottomVisible && !c.topVisible) setVisible(this, 1);
    },
    onBottomPassed : function(calculations) {
        setVisible(this, 1);
    }
});

$('.maps-container')
.visibility({
    once       : false,
    continuous : true,
    onPassing  : function(c) {
        setVisible('.cards-container', c.percentagePassed);
        if (c.bottomVisible || !c.bottomVisible && !c.topVisible) setVisible(this, 1);
    },
    onBottomPassed : function(calculations) {
        setVisible(this, 1);
    }
});

$('.cards-container')
.visibility({
    once       : false,
    continuous : true,
    onPassing  :  function(c) {
        if (c.bottomVisible || !c.bottomVisible && !c.topVisible) setVisible(this, 1);
    },
    onBottomPassed : function(calculations) {
        setVisible(this, 1);
    }
});

function setVisible(key, percent) {
    let inverse = 50 - (percent * 100);
    if (inverse < 0) inverse = 0;
    setFilter(key, `blur(${inverse}px)`);
    $(key)
        .css('opacity', percent + 0.2)
    ;
}

function setFilter(key, value) {
    $(key)
        .css('filter',value)
        .css('webkitFilter',value)
        .css('mozFilter',value)
        .css('oFilter',value)
        .css('msFilter',value);
}

if ($(window).width() < 600) {
    $('.maps-container iframe').css('width', $(window).width() - 20 );
}