const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(
  ".service-card, .pricing-card, .maintenance-card, .portfolio-card, .testimonial-card, .industry-card",
);

hiddenElements.forEach((el) => observer.observe(el));
