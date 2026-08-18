document.addEventListener('DOMContentLoaded', () => {
  // Prevent loader from running multiple times
  if (document.body.dataset.loaderRun) return;
  document.body.dataset.loaderRun = 'true';

  const loader = document.getElementById('loader');
  const loaderName = document.querySelector('.loader-name');
  const progressBar = document.querySelector('.progress-bar');
  const percentage = document.querySelector('.percentage');
  const navbar = document.querySelector('.navbar');
  const fullName = 'PANDIRI CHARITHARTH';

  if (loaderName) {
    loaderName.textContent = '';
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex < fullName.length) {
        loaderName.textContent += fullName.charAt(charIndex);
        charIndex += 1;
      } else {
        clearInterval(typeInterval);
      }
    }, 70);
  }

  let progress = 0;
  const mainProfile = document.getElementById('main-profile');
  const loaderInterval = setInterval(() => {
    progress++;

    if (percentage) {
      percentage.textContent = progress + '%';
    }

    if (progressBar) {
      progressBar.style.width = progress + '%';
    }

    if (progress >= 100) {
      clearInterval(loaderInterval);

      setTimeout(() => {
        if (loader) {
          loader.classList.add('hide');
          if (mainProfile) {
            setTimeout(() => mainProfile.classList.add('show'), 220);
          }
        }
      }, 500);
    }
  }, 30);

  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');

        if (filterValue === 'all' || filterValue === category) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

  const revealItems = document.querySelectorAll('.reveal');

  const handleScroll = () => {
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 10);
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealItems.forEach((item) => observer.observe(item));

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (event) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        event.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });

  // Make project cards clickable to open dedicated pages
  document.querySelectorAll('.project-card').forEach((card) => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', (e) => {
      // Ignore clicks on links inside the card
      if (e.target.closest('a')) return;
      const page = card.getAttribute('data-page');
      if (page) window.location.href = page;
    });
  });
});