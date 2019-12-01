$('.start-container')
  .visibility({
    once       : false,
    continuous : true,
    onPassing  : function(calculations) {
        //setMapsListener();
        setVisible('.maps-container', calculations.percentagePassed);
    }
});

setMapsListener();
setCardsListener();

function setMapsListener() {
    $('.maps-container')
    .visibility({
        once       : false,
        continuous : true,
        onPassing  : function(calculations) {
            //setCardsListener();
            setVisible('.cards-container', calculations.percentagePassed);
            if (calculations.bottomVisible) setVisible(this, 1);
        },
        onBottomPassed : function(calculations) {
            setVisible(this, 1);
        }
    });
}

function setCardsListener() {
    $('.cards-container')
    .visibility({
        once       : false,
        continuous : true,
        onPassing  :  function(calculations) {
            if (calculations.bottomVisible) setVisible(this, 1);
        },
        onBottomPassed : function(calculations) {
            setVisible(this, 1);
        }
    });
}

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