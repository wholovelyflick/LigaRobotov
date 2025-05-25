// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('fade-out');
    setTimeout(() => { preloader.style.display='none'; }, 500);
  });
  
  // Mobile menu
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('nav');
  mobileBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    mobileBtn.innerHTML = nav.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
  });
  
  // Header scroll
  window.addEventListener('scroll', () => {
    document.querySelector('header').classList.toggle('scrolled', window.scrollY > 50);
  });
  
  // Tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const tab = btn.dataset.tab;
      document.querySelectorAll('.tab-content').forEach(c => {
        c.classList.toggle('active', c.id === tab);
      });
    });
  });
  
  // Intersection observer for animations
  const observerOptions = { 
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.section-title, .section-subtitle, .about-text, .about-image, .team-member, .feature-card, .gallery-item, .contact-info, .contact-form').forEach(el => {
    observer.observe(el);
  });
  
  // Particles
  function createParticles() {
    const container = document.getElementById('particles');
    for(let i=0; i<30; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 5 + 2;
      p.style.width = p.style.height = size + 'px';
      p.style.left = Math.random() * 100 + '%';
      p.style.bottom = '-' + size + 'px';
      p.style.animationDuration = (Math.random() * 15 + 10) + 's';
      p.style.animationDelay = Math.random() * 5 + 's';
      p.style.opacity = Math.random() * 0.5 + 0.3;
      container.appendChild(p);
    }
  }
  createParticles();
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if(target) {
        window.scrollTo({ 
          top: target.offsetTop - 80, 
          behavior: 'smooth' 
        });
        if(nav.classList.contains('active')) {
          nav.classList.remove('active');
          mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
      }
    });
  });
  
  // Form
  document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    e.target.reset();
  });