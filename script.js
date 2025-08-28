// script.js

// Example: Bootstrap navbar collapse works automatically via Bootstrap bundle
// Example: Carousel works automatically via data-bs attributes

// Optional: Smooth scroll for navbar links
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
  
  // Optional: Carousel autoplay pause on hover
  const carouselElement = document.querySelector('#carouselExampleIndicators');
  if (carouselElement) {
    const carousel = new bootstrap.Carousel(carouselElement, {
      interval: 4000,
      pause: 'hover'
    });
  }
  
  // You can add more scripts here if you add dynamic features later
  