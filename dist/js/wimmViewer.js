(function($) {
    $.fn.WimmViewer = function (options) {

        var self = this;

        //Style
        $(self).addClass('wimm_carousel');
        options = options || {};

        options.miniatureWidth = options.miniatureWidth || 200;
        options.miniatureHeight = options.miniatureHeight || 150;
        options.miniatureSpace = options.miniatureSpace || 5;
        options.nextText = options.nextText || 'NEXT <span class="fa fa-caret-right"></span>';
        options.prevText = options.prevText || '<span class="fa fa-caret-left"></span> PREV';
        options.onImgChange = typeof options.onImgChange === 'function' ? options.onImgChange : function(){};
        options.onNext = typeof options.onNext === 'function' ? options.onNext : function(){};
        options.onPrev = typeof options.onPrev === 'function' ? options.onPrev : function(){};
        options.viewerMaxHeight = options.viewerMaxHeight || false;
        options.startIndex = options.startIndex || 0;
        options.render3d = options.render3d || false;

        if (options.render3d) {
            $(self).addClass('render3d');

        }

        var MAX_CAROUSEL_WIDTH = (options.miniatureSpace+options.miniatureWidth) * $(self).find('.item').length;




        var carousel = $(self).find('.carousel'),
            carouselInner = $(self).find('.carousel_inner'),
            firstMiniature = $($(self).find('.item')[options.startIndex]);

        var cursor = (options.miniatureSpace*2 + options.miniatureWidth) * (options.startIndex-1);
        if (cursor <0) cursor =0;

        $(carouselInner).css('left',-cursor+'px');

        $(self).append('<div class="mainImg"></div>');

        var mainPicture = $(self).find('.mainImg');

        $(carousel).append(
            '<div class="next">'+options.nextText +'</div>'+
            '<div class="prev">'+options.prevText +'</div>'
        );

        var  nextButton = $(self).find('.next'),
            prevButton = $(self).find('.prev');

        if (cursor == 0) $(prevButton).hide();

        //Init first picture
        $(firstMiniature).addClass('active');

        var isPrev = true;

        $(self).find('.item').each(function(){

            if (isPrev && !$(this).hasClass('active')) {
                $(this).addClass('isPrev');
            }
            else if ( $(this).hasClass('active')) {
                isPrev = false;
            }
            else {
                $(this).addClass('isNext');

            }

        });

        var firstImageUrl = $(firstMiniature).attr('data-url');
        $(mainPicture).append('<img src='+firstImageUrl+' />');

        if (options.viewerMaxHeight) {
            $(mainPicture).find('img').css('maxHeight',options.viewerMaxHeight);
        }

        $(self).find('.item').each(function(){
            $(this).click(function(){
                options.onImgChange();
                var imageUrl = $(this).attr('data-url');
                $(mainPicture).find('img').attr('src',imageUrl);
                $(self).find('.active').removeClass('active');
                $(this).addClass('active');
                var isPrev = true;
                $(self).find('.item').removeClass('isPrev').removeClass('isNext').each(function(){

                    if (isPrev && !$(this).hasClass('active')) {
                        $(this).addClass('isPrev');
                    }
                    else if ( $(this).hasClass('active')) {
                        isPrev = false;
                    }
                    else {
                        $(this).addClass('isNext');

                    }


                })
            });
            $(this).css({
                width: options.miniatureWidth+'px',
                height: options.miniatureHeight+'px',
                marginRight: options.miniatureSpace+'px',
                marginLeft: options.miniatureSpace+'px'

            });
        });
        $(carouselInner).css({
            marginLeft: -options.miniatureSpace+'px',
            marginRight: -options.miniatureSpace+'px'

        });


        $(nextButton).click(function(){

            if ( $(carouselInner).width() + cursor  <= MAX_CAROUSEL_WIDTH) {
                cursor += options.miniatureSpace*2 + options.miniatureWidth;
                $(carouselInner).css('left',-cursor+'px');
                options.onNext();
                if (!( $(carouselInner).width() + cursor  <= MAX_CAROUSEL_WIDTH)) {
                    $(nextButton).hide();
                }
                $(prevButton).show();
            }
        });

        $(prevButton).click(function(){

            if ( cursor  > 0) {
                cursor -= options.miniatureSpace*2 + options.miniatureWidth;
                $(carouselInner).css('left',-cursor+'px');
                options.onPrev();
                if (cursor <= 0){
                    $(prevButton).hide();
                }
                $(nextButton).show();


            }
        })
    }
})(jQuery);