// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Dark Mode Toggle
const darkToggle = document.getElementById('darkModeToggle');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Sticky Navbar
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('sticky', window.scrollY > 80);
});

// Search Filter
const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('#layananList .card');

searchInput.addEventListener('input', () => {
  const val = searchInput.value.toLowerCase();
  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(val) ? 'block' : 'none';
  });
});


// FAB buka WhatsApp langsung
document.querySelector('.fab').addEventListener('click', () => {
  window.open('https://api.whatsapp.com/send?phone=6281265537736&text=Halo%20Auto%20Lapanlapan%2C%20saya%20ingin%20booking%20layanan.', '_blank');
});