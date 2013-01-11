/**
 * mySlider (http://github.com/stefanotorresi/myslider)
 *
 * Copyright (c) 2013 Stefano Torresi (http://stefanotorresi.it)
 * See the file LICENSE.txt for copying permission.
 * ************************************************
 */

(function($){
    
    var Slideshow = function (container, options) {
        this.$container = $(container);
        this.options = options;
        this.cycling = false;
        this.$slides = this.$container.children(this.options.slideSelector);
        this.$current = this.$slides.first();
        
        if (this.options.autoStart) {
            this.play();
        }
        
        if (this.options.pauseOnHover) {  
            this.$container.on('mouseenter', $.proxy(this.pause, this) );
            this.$container.on('mouseleave', $.proxy(this.play, this) );
        }
        
        if (this.options.controls) {
            
            this.$container.append('<div class="buttons"><a class="prev" href="">prev</a><a class="next" href="">next</a></div>');
            
        
            this.$container.find('.buttons .next').click($.proxy(function(e){
                this.next();
                return false;
            }, this));

            this.$container.find('.buttons .prev').click($.proxy(function(e){
                this.prev();
                return false;
            }, this));
        }
    }
    
    Slideshow.prototype = {
        
        play : function () {
            
            this.cycling = true;

            this.interval = setInterval($.proxy(function() { 
                this.next();
            }, this), this.options.interval );

            return this;
        },

        pause: function() {
            
            clearInterval(this.interval);
            this.interval = null;

            return this;
        },

        slideTo: function($slide) {                
            this.pause();

            $slide.stop(true).fadeTo(this.options.speed, 1, $.proxy(function(){

                this.cycling && this.play();

            }, this));

            $slide.siblings(this.options.slideSelector).removeClass('active').stop(true).fadeTo(this.options.speed, 0);

            $slide.addClass('active');

            this.$current = $slide;

            return this;                
        },

        next: function () {
            var $next;

            if (this.$current.next(this.options.slideSelector).length) {
                $next = this.$current.next();
            } else {
                $next = this.$slides.first();
            }

            return this.slideTo($next);
        },

        prev: function () {                
            var $prev;

            if (this.$current.prev(this.options.slideSelector).length) {
                $prev = this.$current.prev();
            } else {
                $prev = this.$slides.last();
            }

            return this.slideTo($prev);
        }
        
    }
    
    $.fn.mySlider = function (options) {
        
        options = $.extend({
            interval :          5000,
            speed :             1000,
            slideSelector :     '.slide',
            autoStart :         true,
            controls:           true,
            pauseOnHover:       false
        }, options);
        
        this.each(function(){
            var slideshow = new Slideshow(this, options);
            $(this).data('slideshow', slideshow);
        });
        
        return this;
        
    }
    
})(jQuery)