// Smooth scroll for navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Parallax effect for background logo and neon circles
const bgLogo = document.querySelector('.bg-logo');
const circles = document.querySelectorAll('.circle');
window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  bgLogo.style.transform = `translate(-50%, -50%) scale(${1 + scroll/5000})`;
  circles.forEach((c, i) => {
    c.style.transform = `translateY(${scroll/(10+i*2)}px) scale(1)`;
  });
});

// Fade-in on scroll for sections
const faders = document.querySelectorAll('.fade-in');
const options = { threshold: 0.3 };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    }
  });
}, options);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
