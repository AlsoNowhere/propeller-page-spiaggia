    $(function() {
    // Set timing out for slide track (prevent more sliding while currently cliding).
        timeOut = 1;

    // Run functions for document ready and window resizing.
        $(document).ready(function(){ secondBackgroundTop(); });
        $(window).resize(function(){ secondBackgroundTop(); });

        function secondBackgroundTop() {
            H = $(".top-content").height();
            $(".social-background:eq(0)").css({'height': H+'px'});
            T = $(".top-content").height()+$(".quick-links").height();
            H = $(".sign-up").height()+$(".twitter").height()+$(".instagram").height()+$(".facebook").height();
            $(".social-background:eq(1)").css({'top': T+'px','height': H+'px'});
        }

    // When moving the slide track to the left.
        function slideTrackLeft() {
            L = $(".instagram-slider-track").css('left');
            if (L != '-1260px') {
                $(".instagram-slider-track").stop().animate({left: '-=210'},400);
            }
            else {
                $(".instagram-slider-track").stop().animate({left: '0px'},400);
            }
        }

    // When moving the slide track to the right.
        function slideTrackRight() {
            L = $(".instagram-slider-track").css('left');
            if (L != '0px') {
                $(".instagram-slider-track").stop().animate({left: '+=210'});
            }
            else {
                $(".instagram-slider-track").stop().animate({left: '-1260px'});
            }
        }

    // Interval setting the automatic moving of the slide track on a timer.
        setInterval(function(){
            if (timeOut == 1) {
                slideTrackLeft();
            }
        },5000);

    // Action to run when clicking on instagram left arrow.
        $(document).on("click",".instagram-arrow-left",function(){
            if (timeOut != 2) {
                timeOut = 2;
                slideTrackLeft();
                setTimeout(function(){
                    timeOut = 0;
                },450);
                setTimeout(function(){
                    if (timeOut != 2) {
                        timeOut = 1;
                    }
                },5000);
            }
        });

    // Action to run when clicking on instagram right arrow.
        $(document).on("click",".instagram-arrow-right",function(){
            if (timeOut != 2) {
                timeOut = 2;
                slideTrackRight();
                setTimeout(function(){
                    timeOut = 0;
                },400);
                setTimeout(function(){
                    if (timeOut != 2) {
                        timeOut = 1;
                    }
                },5000);
            }
        });

    // Activate the selection for appropriate selection boxes.
        $(document).on("click",".sign-up-input-box-smallValue:eq(1)",function(){
            $("#SUDay").toggleClass('visible');
            $("#SUMonth").removeClass('visible');
        });
        $(document).on("click",".sign-up-input-box-smallValue:eq(2)",function(){
            $("#SUDay").removeClass('visible');
            $("#SUMonth").toggleClass('visible');
        });

        $(document).on("click",".sign-up-input-box-smallValue:eq(1) ul li",function(){
            $("#SU-day-value").text($(this).html());
        });
        $(document).on("click",".sign-up-input-box-smallValue:eq(2) ul li",function(){
            $("#SU-month-value").text($(this).html());
        });

        $(document).on("click",".footer-inputBox-label:eq(7)",function(){
            C = $("#FODay").css('visibility');
            if (C == 'hidden') { $("#FODay").css({'visibility': 'visible'}); }
            else if (C == 'visible') { $("#FODay").css({'visibility': 'hidden'}); }
            $("#FOMonth").css({'visibility': 'hidden'});
        });
        $(document).on("click",".footer-inputBox-label:eq(8)",function(){
            C = $(".footer-dropDown-options:eq(1)").css('visibility');
            if (C == 'hidden') { $(".footer-dropDown-options:eq(1)").css({'visibility': 'visible'}); }
            else if (C == 'visible') { $(".footer-dropDown-options:eq(1)").css({'visibility': 'hidden'}); }
            $("#FODay").css({'visibility': 'hidden'});
        });

        $(document).on("click",".footer-inputBox-label:eq(7) ul li",function(){
            $("#FO-day-value").text($(this).html());
        });
        $(document).on("click",".footer-inputBox-label:eq(8) ul li",function(){
            $("#FO-month-value").text($(this).html());
        });

    // Set initial gap (margin top) for facebook images.
        k = 10;

    // Define function for adding one line of facebook photos. the line is shuffled each time the page loads, with an aim to show off the variety of people liking this page on facebook.
        function addFacebookPhotos() { console.log(k);
            facebookPhotos = 0; facebookPhotos = [];
            for (i=1;i<=9;facebookPhotos.push("ImgRes2/facebook_thumb_0"+i+++".png"));
            for (;i<=18;facebookPhotos.push("ImgRes2/facebook_thumb_"+i+++".png"));
            for (i=facebookPhotos.length-1;i>=0;i--) { j = parseInt(Math.random()*i); x = facebookPhotos[i]; facebookPhotos[i] = facebookPhotos[j]; facebookPhotos[j] = x; };
            for (i=0;i<=facebookPhotos.length-1;i++) {
                T = k+(i%3)*15;
                L = i*58;
                $(".facebook-photos-wrapper").append('<div class="facebook-photo"><img src="'+facebookPhotos[i]+'" style="width:100%"></div>');
                $(".facebook-photo:last").css({'top': T+'px','left': L+'px'});
            }
            k += 80;
        }
        
    // Run the function for three lines here.
        addFacebookPhotos();
        addFacebookPhotos();
        addFacebookPhotos();
    });
