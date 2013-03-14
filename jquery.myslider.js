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
        this.$slides = this.$container.children(options.slideSelector);
        this.$current = this.$slides.first();

        if (options.autoStart) {
            this.play();
        }

        if (options.pauseOnHover) {
            this.$container.on('mouseenter', $.proxy(this.pause, this) );
            this.$container.on('mouseleave', $.proxy(this.play, this) );
        }

        if (options.controls) {

            this.$buttons = $('<div class="buttons"><a class="prev" href="">prev</a><a class="next" href="">next</a></div>');

            this.$container.append(this.$buttons);

            this.$buttons.children('.prev').click($.proxy(function(e){
                this.prev();
                return false;
            }, this));

            this.$buttons.children('.next').click($.proxy(function(e){
                this.next();
                return false;
            }, this));

            if(options.fadeControls) {
                this.$container.on('mouseenter', $.proxy(function() {
                    if (this.csstransitions) {
                        this.$buttons.css('opacity', 1);
                    } else {
                        this.$buttons.fadeIn('fast');
                    }
                }, this));

                this.$container.on('mouseleave', $.proxy(function() {
                    if (this.csstransitions) {
                        this.$buttons.css('opacity', 0);
                    } else {
                        this.$buttons.fadeOut('fast');
                    }
                }, this));

                if (this.csstransitions) {
                    this.$buttons.css({
                        'transition' : 'opacity 200ms',
                        '-moz-transition': 'opacity 200ms',
                        '-webkit-transition': 'opacity 200ms'
                    });
                }
            } else {
                this.$buttons.show();
            }
        }

        if (options.pager) {

            this.$pager = $('<div class="pager"></div>');

            this.$container.append(this.$pager);

            this.$slides.each($.proxy(function(index, element){
                var $link = $('<a href=""></a>');
                $link.data('slideIndex', index);

                if (index == 0) {
                    $link.addClass('active');
                }

                $link.click($.proxy(function(e){
                    var index = $(e.target).data('slideIndex');
                    this.slideTo(this.$slides.eq(index));

                    return false;
                }, this));

                this.$pager.append($link);
            }, this));

        }

        if (this.csstransitions) {
            this.$slides.css('transition', 'opacity '+options.speed+'ms');
            this.$slides.css('-moz-transition', 'opacity '+options.speed+'ms');
            this.$slides.css('-webkit-transition', 'opacity '+options.speed+'ms');
        }
    }

    Slideshow.prototype = {

        csstransitions : typeof Modernizr !== 'undefined' && Modernizr.csstransitions,
        cycling :    false,

        play : function () {
            clearInterval(this.interval);
            
            this.cycling = true;

            this.interval = setInterval($.proxy(function() {
                this.next();
            }, this), this.options.interval );

            return this;
        },

        pause : function() {
            clearInterval(this.interval);
            this.cycling = false;

            return this;
        },

        slideTo : function($slide) {
            clearInterval(this.interval);

            var $siblings = $slide.siblings(this.options.slideSelector);

            $siblings.removeClass('active');
            $slide.addClass('active');
            this.$current = $slide;

            if (this.csstransitions) {
                $slide.one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", $.proxy(function(event) {
                    this.cycling && this.play();
                }, this));
                $siblings.css('opacity', 0);
                $slide.css('opacity', 1);
            } else {
                $slide.stop(true).fadeTo(this.options.speed, 1, $.proxy(function(){
                    this.cycling && this.play();
                }, this));
                $siblings.stop(true).fadeTo(this.options.speed, 0);
            }

            if (this.options.pager) {
                var index = this.$slides.index($slide);
                var $pagerLink = this.$pager.children().eq(index);
                $pagerLink.addClass('active');
                $pagerLink.siblings().removeClass('active');
            }

            return this;
        },

        next : function () {
            var $next;

            if (this.$current.next(this.options.slideSelector).length) {
                $next = this.$current.next();
            } else {
                $next = this.$slides.first();
            }

            return this.slideTo($next);
        },

        prev : function () {
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
            fadeControls:       true,
            pauseOnHover:       false,
            pager:              true
        }, options);

        this.each(function(){
            var slideshow = new Slideshow(this, options);
            $(this).data('slideshow', slideshow);
        });

        return this;

    }

})(jQuery)