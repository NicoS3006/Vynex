// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".gsap-fade-in1", 
  { 
    opacity: 0,  // Start invisible
    y: 50        // Optional: Add vertical offset for a nice upwards fade
  }, 
  { 
    opacity: 1,   // Fade to fully visible
    y: 0,         // Move to the final position
    duration: 1.5, // Duration of animation
    ease: "power2.out", // Smooth easing function
    scrollTrigger: {
      trigger: ".gsap-fade-in1",  // Element to watch
      start: "top 70%",           // When top of the element hits 80% of the viewport
      end: "bottom 20%",          // When the bottom of the element is 20% from the viewport bottom
      scrub: true,                // Smooth transition when scrolling up or down
      toggleActions: "play reverse play reverse", // Ensures fade in on both scroll directions
      markers: false,             // Set to true if you want to see debug markers in the viewport
    }
  }
);


gsap.fromTo(".gsap-fade-in2", 
  { 
    opacity: 0,  // Start invisible
    y: 50        // Optional: Add vertical offset for a nice upwards fade
  }, 
  { 
    opacity: 1,   // Fade to fully visible
    y: 0,         // Move to the final position
    duration: 1.5, // Duration of animation
    ease: "power2.out", // Smooth easing function
    scrollTrigger: {
      trigger: ".gsap-fade-in2",  // Element to watch
      start: "top 70%",           // When top of the element hits 80% of the viewport
      end: "bottom 20%",          // When the bottom of the element is 20% from the viewport bottom
      scrub: true,                // Smooth transition when scrolling up or down
      toggleActions: "play reverse play reverse", // Ensures fade in on both scroll directions
      markers: false,             // Set to true if you want to see debug markers in the viewport
    }
  }
);


gsap.fromTo(".gsap-fade-in3", 
  { 
    opacity: 0,  // Start invisible
    y: 50        // Optional: Add vertical offset for a nice upwards fade
  }, 
  { 
    opacity: 1,   // Fade to fully visible
    y: 0,         // Move to the final position
    duration: 1.5, // Duration of animation
    ease: "power2.out", // Smooth easing function
    scrollTrigger: {
      trigger: ".gsap-fade-in3",  // Element to watch
      start: "top 70%",           // When top of the element hits 80% of the viewport
      end: "bottom 20%",          // When the bottom of the element is 20% from the viewport bottom
      scrub: true,                // Smooth transition when scrolling up or down
      toggleActions: "play reverse play reverse", // Ensures fade in on both scroll directions
      markers: false,             // Set to true if you want to see debug markers in the viewport
    }
  }
);


gsap.fromTo(".gsap-fade-in4", 
    { 
      opacity: 0,  // Start invisible
      y: 50        // Optional: Add vertical offset for a nice upwards fade
    }, 
    { 
      opacity: 1,   // Fade to fully visible
      y: 0,         // Move to the final position
      duration: 1.5, // Duration of animation
      ease: "power2.out", // Smooth easing function
      scrollTrigger: {
        trigger: ".gsap-fade-in4",  // Element to watch
        start: "top 70%",           // When top of the element hits 80% of the viewport
        end: "bottom 20%",          // When the bottom of the element is 20% from the viewport bottom
        scrub: true,                // Smooth transition when scrolling up or down
        toggleActions: "play reverse play reverse", // Ensures fade in on both scroll directions
        markers: false,             // Set to true if you want to see debug markers in the viewport
      }
    }
  ); 
  
  
gsap.fromTo(".gsap-fade-in5", 
    { 
      opacity: 0,  // Start invisible
      y: 50        // Optional: Add vertical offset for a nice upwards fade
    }, 
    { 
      opacity: 1,   // Fade to fully visible
      y: 0,         // Move to the final position
      duration: 1.5, // Duration of animation
      ease: "power2.out", // Smooth easing function
      scrollTrigger: {
        trigger: ".gsap-fade-in5",  // Element to watch
        start: "top 70%",           // When top of the element hits 80% of the viewport
        end: "bottom 20%",          // When the bottom of the element is 20% from the viewport bottom
        scrub: true,                // Smooth transition when scrolling up or down
        toggleActions: "play reverse play reverse", // Ensures fade in on both scroll directions
        markers: false,             // Set to true if you want to see debug markers in the viewport
      }
    }
  );  