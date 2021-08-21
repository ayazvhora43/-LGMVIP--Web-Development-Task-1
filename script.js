// Javascript function for bottom slider 

(function( $ ) {
    $.fn.camRollSlider = function() {
      var wrapper      = this;
      var screenRoll   = this.find('.imgs-container-roll');
      var screenItems  = this.find('.imgs-container-item');
      var barRollWrap  = this.find('.img-thumb-roll-wrap');
      var barRoll      = this.find('.img-thumb-roll');
      var barItem      = this.find('.img-thumb-roll-item');
      var barFirstItem = this.find('.img-thumb-roll-item:first-child');

      var current;
  
      function moveScreenTo(index) {
        screenRoll.css('left', -wrapper.width() * index);
      }
  
      function moveBarTo(index) {
        var barRollPos = (barRollWrap.width() / 2) 
          - (barItem.width() / 2)
          - $(barItem[index]).position().left;
  
        barRoll.css('left', barRollPos);
      }
  
      function moveToItem(target) {
        var index;
  
        if(typeof target  === 'number') {
          index = target;
        } else {
          index = $(target).index();
        }
  
        current = index;
  
        moveScreenTo(index, null);
        moveBarTo(index, null);
      }
  
      function setSizePos() {
        screenRoll.css('width', screenRoll.children().length * wrapper.width() );
        
        screenItems.css('width', wrapper.width() );
        
        barRoll.css('width', (barRoll.children().length * barFirstItem.width())
         + ((barRoll.children().length-1) * parseInt(barFirstItem.css('margin-right'))) );
  
        barRoll.css('transition', 'all');
        screenRoll.css('transition', 'all');
  
        moveToItem(current, null);
        
        setTimeout(function() {
          barRoll.css('transition', '');
          screenRoll.css('transition', '');
        }, 0);
      }
  
      current = 0;
      setSizePos();
  
      barItem.click(function() {
        moveToItem(this);
      });
  
      $(window).resize(function() {
        setSizePos();
      });
  
      return this;
    };
  }( jQuery ));
