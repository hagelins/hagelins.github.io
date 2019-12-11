/*$('.start-container')
  .visibility({
    once       : false,
    continuous : true,
    onPassing  : function(c) {
      let percent = c.percentagePassed;
      setVisible('.hours-container', percent);
      if (percent < 0.6) {
          percent = 0.6;
      }
      let newBackground = getNewBackgroundAlpha(this, percent);
      if (newBackground) $(this).css('background', newBackground);
      if (!c.bottomVisible && !c.topVisible) $(this).css('background', getNewBackgroundAlpha(this, 0.6));
    },
    onBottomPassedReverse : function () {
      $('.bg-container').css('background-image', 'url(./images/bg1.jpg)');
    },
    onBottomPassed : function () {
      $('.bg-container').css('background-image', 'url(./images/bg2.jpg)');
    }
});

$('.hours-container')
.visibility({
    once       : false,
    continuous : true,
    onPassing  : function(c) {
      setVisible('.collection-container', c.percentagePassed);
      if (c.bottomVisible || !c.bottomVisible && !c.topVisible) setVisible(this, 1);
    },
    onBottomPassedReverse : function () {
      $('.bg-container').css('background-image', 'url(./images/bg2.jpg)');
    },
    onBottomPassed : function() {
      setVisible(this, 1);
      $('.bg-container').css('background-image', 'url(./images/bg3.jpg)');
    }
});

$('.collection-container')
.visibility({
    once       : false,
    continuous : true,
    onPassing  : function(c) {
      setVisible('.delivery-container', c.percentagePassed);
      if (c.bottomVisible || !c.bottomVisible && !c.topVisible) setVisible(this, 1);
    },
    onBottomPassedReverse : function () {
      $('.bg-container').css('background-image', 'url(./images/bg3.jpg)');
    },
    onBottomPassed : function() {
      setVisible(this, 1);
      $('.bg-container').css('background-image', 'url(./images/bg4.jpg)');
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
    onBottomPassedReverse : function () {
      $('.bg-container').css('background-image', 'url(./images/bg4.jpg)');
    },
    onBottomPassed : function() {
      setVisible(this, 1);
      $('.bg-container').css('background-image', 'url(./images/bg5.jpg)');
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
    onBottomPassedReverse : function () {
      $('.bg-container').css('background-image', 'url(./images/bg5jpg)');
    },
    onBottomPassed : function() {
      setVisible(this, 1);
      $('.bg-container').css('background-image', 'url(./images/bg6.jpg)');
    }
});

$('.cards-container')
.visibility({
    once       : false,
    continuous : true,
    onPassing  :  function(c) {
        if (c.bottomVisible || !c.bottomVisible && !c.topVisible) setVisible(this, 1);
    },
    onBottomPassedReverse : function () {
      $('.bg-container').css('background-image', 'url(./images/bg6.jpg)');
    },
    onBottomPassed : function() {
      setVisible(this, 1);
      $('.bg-container').css('background-image', 'url(./images/bg7.jpg)');
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
    let background = $(element).css('background').match(/rgba\(.*\)/) || $(element).css('background').match(/rgb\(.*\)/);
    if(!background) return false;
  
    background = background[0].replace('rgb(','rgba(');
    let parts = background.split(', ');
    let alpha = parts[3];
    if (alpha) {
      alpha = alpha.slice(0, -1);
      parts = background.split(alpha);
      background = parts[0] + percent + parts[1];
    } else {
      parts[2] = parts[2].slice(0, -1);
      parts.push(percent + ')');
      background = parts.join(', ');
    }

    return background;
}
*/
if ($(window).width() < 600) {
    $('.maps-container iframe').css('width', $(window).width() - 20 );
}
