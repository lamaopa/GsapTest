function ShowcaseOverlapping() {
		
		
  if( $('.overlapping-gallery').length > 0 ){
    
    imagesLoaded('body', function() {
    
      
      gsap.utils.toArray('.overlapping-gallery').forEach((pinnedGallery) => {
        
        const pinnedImages = pinnedGallery.querySelectorAll('.overlapping-image');
        
        function setImagesProperties() {								
          gsap.set(pinnedImages, { height: window.innerHeight});						
        }
        
        setImagesProperties();
        
        window.addEventListener('resize', setImagesProperties);	
      
        pinnedImages.forEach((pImage, i, arr) => {
          if (i < arr.length - 1) {
            const durationMultiplier = arr.length - i - 1;
            
            
            
            ScrollTrigger.create({
              trigger: pImage,
              start: function() {
                const centerPin = (window.innerHeight - pImage.querySelector('.overlapping-image-inner').offsetHeight) / 2;
                return "top +=" + centerPin;
              },
              end: function() {
                const durationHeight = pImage.offsetHeight * durationMultiplier + (pImage.offsetHeight - pImage.querySelector('.overlapping-image-inner').offsetHeight)/2;
                return "+=" + durationHeight;
              },
              pin: true,
              pinSpacing: false,
              scrub: true,
            });
            
            const animationProperties = {
              scale: 0.75,
              opacity: 1,
              zIndex: 0,
              duration: 1,
              ease: Linear.easeNone
            };
            
            if (!isMobile()) {
              animationProperties.filter = "blur(10px)";
            }
            
            ScrollTrigger.create({
              trigger: pImage,
              start: function() {
                const centerPin = (window.innerHeight - pImage.querySelector('.overlapping-image-inner').offsetHeight) / 2;
                return "top +=" + centerPin;
              },
              end: function() {
                const durationHeight = pImage.offsetHeight + (pImage.offsetHeight - pImage.querySelector('.overlapping-image-inner').offsetHeight) / 2;
                return "+=" + durationHeight;
              },
              scrub: true,
              animation: gsap.to(pImage.querySelector('.overlapping-image-inner'), animationProperties),
            });

          }
        });
      
      });
      
    });
    
    
    if (!isMobile()) {	
            
      $(".overlapping-gallery .trigger-item").on('mouseenter', function() {
        $('#ball p').remove();
        var $this = $(this);			
        gsap.to('#ball', {duration: 0.3, borderWidth: '2px', scale: 1.4, borderColor:"rgba(255,255,255,0)", backgroundColor:"rgba(255,255,255,0.1)"});
        gsap.to('#ball-loader', {duration: 0.2, borderWidth: '2px', top: 2, left: 2});
        $("#ball").addClass("with-blur");
        $( "#ball" ).append( '<p class="center-first">' + $this.data("centerline") + '</p>' );
        $(this).find('video').each(function() {
          $(this).get(0).play();
        });								
      }).on('mouseleave', function() {	
        gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
        gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
        $("#ball").removeClass("with-blur");
        $('#ball p').remove();		
        $(this).find('video').each(function() {
          $(this).get(0).pause();
        });
      });
    
    }

    
    
    $('.trigger-item').on('click', function() {
      $("body").addClass("load-project-thumb");
      
      $('.overlapping-gallery .trigger-item').each(function(index) {
        var currentItem = $(this);
        var nextItem;
        var prevItem;
    
        if (currentItem.hasClass("above")) {
          
          nextItem = $('.overlapping-gallery .trigger-item').eq(index + 1);
    
          
          gsap.to(nextItem, {
            duration: 0.5,
            yPercent: 100,
            delay: 0.03,
            opacity: 1,
            ease: "power2.in"
          });
          
          gsap.to(currentItem, {
            duration: 0.3,
            filter: "blur(0px)",
            opacity: 1,
            ease: "power2.in"
          });
        } else {
          
          gsap.to(currentItem, {
            duration: 0.3,
            delay: 0,
            opacity: 0,
            ease: "power2.in"
          });
        }
      });
      
      
      setTimeout(function() {
        $("body").addClass("show-loader");
      }, 300);
      gsap.to('footer, .slide-date, .slide-cat', { duration: 0.5, opacity: 0, ease: Power2.easeIn });
      gsap.to('.slide-title span', { duration: 0.4, opacity: 0, yPercent:10, delay:0.1, ease: Power4.easeInOut });			
      gsap.to('#ball', { duration: 0.3, borderWidth: '4px', scale: 0.5, borderColor: '#999999', backgroundColor: 'transparent' });
      gsap.to('#ball-loader', { duration: 0.3, borderWidth: '4px', top: 0, left: 0 });
      $("#ball").removeClass("with-blur");
      $('#ball p').remove();
    });	
    
  } //End Overlapping Gallery
  
  
}// End Showcase Overlapping Gallery
