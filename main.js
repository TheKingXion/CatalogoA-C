// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav a, .hero-content a")
  
    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        // Only apply to links that point to an ID on the page
        const targetId = this.getAttribute("href")
        if (targetId.startsWith("#")) {
          e.preventDefault()
  
          const targetElement = document.querySelector(targetId)
          if (targetElement) {
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
              document.querySelector("nav").classList.remove("active")
            }
  
            // Scroll to the target element
            window.scrollTo({
              top: targetElement.offsetTop - 80, // Offset for header
              behavior: "smooth",
            })
  
            // Update active link
            navLinks.forEach((navLink) => navLink.classList.remove("active"))
            this.classList.add("active")
          }
        }
      })
    })
  
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector(".mobile-menu")
    const nav = document.querySelector("nav")
  
    if (mobileMenuButton && nav) {
      mobileMenuButton.addEventListener("click", () => {
        nav.classList.toggle("active")
      })
  
      // Close menu when clicking outside
      document.addEventListener("click", (e) => {
        if (!nav.contains(e.target) && !mobileMenuButton.contains(e.target) && nav.classList.contains("active")) {
          nav.classList.remove("active")
        }
      })
    }
  
    // Set active link based on scroll position
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY
  
      // Get all sections
      const sections = document.querySelectorAll("section[id]")
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id")
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach((link) => {
            link.classList.remove("active")
            if (link.getAttribute("href") === `#${sectionId}`) {
              link.classList.add("active")
            }
          })
        }
      })
    })
  
    // Contact form submission
    const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Tu número de WhatsApp en formato internacional (ej: +56912345678 sin espacios)
    //const phoneNumber = "56984716060"; 

    // Crear el texto del mensaje
    //const whatsappMessage = `Hola, quiero hablar con ustedes para: `;

    // Codificar para URL
    //const encodedMessage = encodeURIComponent(whatsappMessage);

    // Crear enlace de WhatsApp
    //const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Abrir WhatsApp
    //window.open(whatsappURL, '_blank');

    contactForm.reset();
  });
}

  
    // Add animation on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".brand-card, .product-card, .contact-info, .contact-form")
  
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight
  
        if (elementPosition < windowHeight - 100) {
          element.style.opacity = "1"
          element.style.transform = "translateY(0)"
        }
      })
    }
  
    // Set initial styles
    const elementsToAnimate = document.querySelectorAll(".brand-card, .product-card, .contact-info, .contact-form")
    elementsToAnimate.forEach((element) => {
      element.style.opacity = "0"
      element.style.transform = "translateY(20px)"
      element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
    })
  
    // Run on load
    animateOnScroll()
  
    // Run on scroll
    window.addEventListener("scroll", animateOnScroll)
  })
  
  // Responsive image handling
  function handleResponsiveImages() {
    const deviceWidth = window.innerWidth
    const images = document.querySelectorAll(".product-image")
  
    images.forEach((image) => {
      // Get the original URL
      const backgroundImage = image.style.backgroundImage
      if (!backgroundImage) return
  
      const match = backgroundImage.match(/url$$['"]?([^'"]+)['"]?$$/)
      if (!match) return
  
      const originalUrl = match[1]
      let newUrl = originalUrl
  
      // Adjust image quality based on device width
      if (deviceWidth <= 480) {
        // Mobile - smaller images
        newUrl = originalUrl.replace("w=1350", "w=480").replace("q=80", "q=70")
      } else if (deviceWidth <= 768) {
        // Tablet - medium images
        newUrl = originalUrl.replace("w=1350", "w=768").replace("q=80", "q=75")
      } else if (deviceWidth <= 1366) {
        // Laptop - slightly reduced quality
        newUrl = originalUrl.replace("w=1350", "w=1200").replace("q=80", "q=80")
      } else if (deviceWidth > 1920) {
        // TV and large screens - higher quality
        newUrl = originalUrl.replace("w=1350", "w=1920").replace("q=80", "q=90")
      }
  
      // Set the new background image
      if (newUrl !== originalUrl) {
        image.style.backgroundImage = `url('${newUrl}')`
      }
    })
  }
  
  // Run on load and resize
  window.addEventListener("load", handleResponsiveImages)
  window.addEventListener("resize", handleResponsiveImages)
  
  // Detect device type for touch optimization
  function detectDeviceType() {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0
  
    if (isTouchDevice) {
      document.body.classList.add("touch-device")
  
      // Make buttons and interactive elements larger on touch devices
      const interactiveElements = document.querySelectorAll(".btn, select, input, .product-card, .brand-card")
      interactiveElements.forEach((element) => {
        element.classList.add("touch-friendly")
      })
    }
  }
  
  // Run device detection on load
  window.addEventListener("load", detectDeviceType)
  
  // Handle orientation changes
  window.addEventListener("orientationchange", () => {
    // Small delay to ensure the browser has updated dimensions
    setTimeout(() => {
      handleResponsiveImages()
  
      // Adjust layout for orientation
      if (window.innerHeight < 500) {
        document.body.classList.add("landscape")
      } else {
        document.body.classList.remove("landscape")
      }
    }, 200)
  })
  
  // Initialize orientation class
  window.addEventListener("load", () => {
    if (window.innerHeight < 500) {
      document.body.classList.add("landscape")
    }
  })
  
