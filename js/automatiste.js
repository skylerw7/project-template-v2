
 $(function() {
$(".link1").click(function () {
        $("#container").animatescroll
         ({
            scrollSpeed: 1100,
            easing: 'easeInOutCubic'
        });
         });
       $(".link2").click(function () {
        $("#whopage").animatescroll
         ({
            scrollSpeed: 1100,
            easing: 'easeInOutCubic'
        });
         });
    $(".link3").click(function () {
        $("#whypage").animatescroll
         ({
            scrollSpeed: 1100,
            easing: 'easeInOutCubic'
        });
         });
     $(".link4").click(function () {
        $("#howpage").animatescroll
         ({
            scrollSpeed: 1100,
            easing: 'easeInOutCubic'
        });
         });
    });
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) { 
            //change yes to no
            $('p').html('The Surrealists embraced automatic drawing as way to incorporate randomness and the subconscious into their drawings, and to free themselves from artistic conventions and everyday thinking.<br><br>This technique, they felt, was a way in to access meaning and information unavailable through tradition and the conscious mind.');
        } else {
            //set h1 text to yes
            $('p').html('Automatic drawing is known by many names but could be closely compared to the act of doodling. This lets you sink into the quality and experience of making marks and developing the relationships between them which in turn lifts you out of your logical brain’s desire to make something that’s “good” or “accurate.”<br><br>It lets you tap more easily into your intuition, emotions, and the physical experience of drawing and painting.<br><br>So if you judge your own drawing ability, this technique can be very liberating because it’s so physical, there’s no wrong way to do it, and it improves your drawing skills in the process.<br><br>Most importantly, it gets you out of your head.');
        }
    });
});

    