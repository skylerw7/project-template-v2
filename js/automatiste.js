
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
        
          if($(this).scrollTop() > 0){

            $('.navbar').animate({
                height: "100vh"
            });
            $('.description').animate({
              color: "rgba(255,255,255,1)"
            });
        }
        if ($(this).scrollTop() > 0 && $(this).scrollTop() < 500) { 
            $('p').html('Automatic drawing is known by many names but could be closely compared to the act of doodling. This lets you sink into the quality and experience of making marks and developing the relationships between them which in turn lifts you out of your logical brain’s desire to make something that’s “good” or “accurate.”<br><br>It lets you tap more easily into your intuition, emotions, and the physical experience of drawing and painting.<br><br>So if you judge your own drawing ability, this technique can be very liberating because it’s so physical, there’s no wrong way to do it, and it improves your drawing skills in the process.<br><br>Most importantly, it gets you out of your head.');
        } else if($(this).scrollTop() > 500 && $(this).scrollTop() < 1400) {
            //set h1 text to yes
            $('p').html('Les Automatistes were a group of Québécois artistic dissidents from Montreal, Quebec, Canada. The movement was founded in the early 1940s by painter Paul-Émile Borduas. Les Automatistes were so called because they were influenced by Surrealism and its theory of automatism. <br><br>Members included Marcel Barbeau, Roger Fauteux, Claude Gauvreau, Jean-Paul Riopelle, Pierre Gauvreau, Fernand Leduc, Jean-Paul Mousseau, Marcelle Ferron and Françoise Sullivan.Les Automatistes embraced automatic drawing as a way to incorporate randomness and the subconscious into their drawings, and to free themselves from artistic conventions and everyday thinking.<br><br>This technique, they felt, was a way in to access meaning and information unavailable through tradition and the conscious mind.');
        } 
        else if($(this).scrollTop() > 1400 && $(this).scrollTop() < 2500) {
            //set h1 text to yes
            $('p').html('When creative block hits, it can be a serious problem for artists and designers. Creating for the sake of money, homework, or likes can be exhausting and cause you to spend less time on things that will refresh your energy and allow you to be more mindful when you are making. <br><br>Being able to draw quickly and freely will greatly increase your ability to design more original work. By following a practice that includes this meditation like experience you can really loosen up before launching into a project! <br> <br>The most creative ideas are available when you enter a state of openness and are able to explore without doubt or overthinking.<br><br>');
        } 
         else if($(this).scrollTop() > 2500 && $(this).scrollTop() < 3500) {
            //set h1 text to yes
            $('p').html('As the great Bob Ross said, embrace the Happy Accidents. Let the lines and gestures you create influence your next move without thinking about what the whole is becoming. <br><br> On the right you can practice with your cursor but it is highly encouraged to get off the computer and draw using pencils, markers, paints, or anything that can make marks quickly and loose. <br><br> No erasing is allowed and you must just let the mind work its magic.<br><br>It can be easy to fall into habits of turning marks into objects or recognizable things, so much like meditation, when you find yourself drawing a giraffe, a shoe, or a face, recognize what you are doing and pull yourself back into a state of free exploration and abstraction.');
        } 
        
        else {
            $('p').html('Automatic drawing is known by many names but could be closely compared to the act of doodling. This lets you sink into the quality and experience of making marks and developing the relationships between them which in turn lifts you out of your logical brain’s desire to make something that’s “good” or “accurate.”<br><br>It lets you tap more easily into your intuition, emotions, and the physical experience of drawing and painting.<br><br>So if you judge your own drawing ability, this technique can be very liberating because it’s so physical, there’s no wrong way to do it, and it improves your drawing skills in the process.<br><br>Most importantly, it gets you out of your head.')
        }
    });
});


 
