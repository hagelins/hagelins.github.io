$('.start-container')
  .visibility({
    once       : false,
    continuous : true,
    onPassing  : function(c) {
        let percent = c.percentagePassed;
        setVisible('.hours-container', percent);
        if (percent > 0.6) {
            $(this).css('background', getNewBackgroundAlpha(this, percent));
        } else {
            $(this).css('background', getNewBackgroundAlpha(this, 0.6));
        }
        if (c.bottomVisible || !c.bottomVisible && !c.topVisible) setVisible(this, 0.6);
    }
});

$('.hours-container')
.visibility({
    once       : false,
    continuous : true,
    onPassing  : function(c) {
        setVisible('.delivery-container', c.percentagePassed);
        if (c.bottomVisible || !c.bottomVisible && !c.topVisible) setVisible(this, 1);
    },
    onBottomPassed : function(calculations) {
        setVisible(this, 1);
    }
});

$('.delivery-container')
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

function getNewBackgroundAlpha(element, percent) {
    let background = $(element).css('background').match(/rgba\(.*\)/)[0];
    let alpha = background.split(', ')[3].slice(0, -1);
    let parts = background.split(alpha);
    background = parts[0] + percent + parts[1];
    return background;
}

if ($(window).width() < 600) {
    $('.maps-container iframe').css('width', $(window).width() - 20 );
}
