$(function(){

    $('head').append(
        '<style type="text/css">#container { display: none; } #fade, #loader { display: block; }</style>'
    );
    jQuery.event.add(window,"load",function() { // 全ての読み込み完了後に呼ばれる関数
        var pageH = $("#container").height();
            $("#fade").css("height", pageH).delay(900).fadeOut(800);
            $("#loader").delay(600).fadeOut(300);
            $("#container").css("display", "block");
    });

    var navLock = $("#globalNav"),
    offset = navLock.offset();
    $(window).scroll(function(){
        if($(window).scrollTop() > offset.top){
            navLock.addClass("fixed");
        } else {
            navLock.removeClass("fixed");
        }
    });

		$('.hov li')
            .hover(function(){
                //オーバーしたliのインデックスを取得
                var index = $('.hov li').index(this);
                //オーバーした画像URLを取得
                var imageurl = $('.hov li').eq(index).find('img').attr('src');
                //ulのクラス名を取得（空白で分割）
                className = $(this).parent().attr('class').split(" ");
                //元のメイン画像を保存しておく
                defaultImage = $('img.bigimg.' + className[1]).attr('src');
                $('img.bigimg.' + className[1]).attr('src', imageurl);
		},function(){
			$('img.bigimg.' + className[1]).attr('src', defaultImage);
		});

        $('.js-btn')
                // .js-btnをクリックすると、
                .on('click', function () {
                    // メニューとバーガー線に.openをつけ外しする
                    $('nav, .all, .btn-line')
                        .toggleClass('open'); 
            });

        $('.slider').slick({
            autoplay: true,//自動的に動き出すか。初期値はfalse。
            infinite: true,//スライドをループさせるかどうか。初期値はtrue。
            speed: 1000,//スライドのスピード。初期値は300。
            slidesToShow: 7,//スライドを画面に3枚見せる
            slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
            prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
            nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
            centerMode: true,//要素を中央ぞろえにする
            variableWidth: true,//幅の違う画像の高さを揃えて表示
            dots: true,//下部ドットナビゲーションの表示
        });

});