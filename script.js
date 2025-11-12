let currentPage = 1;
let imagesScrollListenerAdded = false;

function nextPage(pageNum) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(p => {
    p.classList.remove('active');
    p.style.display = 'none'; // hide all pages
  });

  const next = document.getElementById('page' + pageNum);
  if (!next) {
    console.warn('No page with id:', 'page' + pageNum);
    return;
  }

  next.classList.add('active');
  next.style.display = 'flex'; // show the next page
  currentPage = pageNum;

  // Trigger special effects
  if (pageNum === 4) showImagesOnScroll();
  if (pageNum === 8) startCountdown();
}

/* 🌸 Initially show only page1 safely */
window.onload = () => {
  // Ensure every .page is hidden, then show the one that should be active
  const pages = document.querySelectorAll('.page');
  pages.forEach((p, i) => {
    p.style.display = p.classList.contains('active') ? 'flex' : 'none';
  });

  // if none is marked active, show page1
  if (document.querySelectorAll('.page.active').length === 0) {
    const p1 = document.getElementById('page1');
    if (p1) {
      p1.classList.add('active');
      p1.style.display = 'flex';
    }
  }
};

/* 💕 Page 4 — Image reveal on scroll (attach listener only once) */

function showImagesOnScroll() {
  const images = document.querySelectorAll('#page4 img');
  images.forEach(img => img.classList.add('show'));  // turant photo dikhao
}

/* 🎉 Page 8 — Countdown Animation */
function startCountdown() {
  const page = document.getElementById('page8');
  if (!page) return;

  const elements = page.querySelectorAll('h1, h2, h3, h4, h5, h6');
  let i = 0;

  function showNext() {
    if (i < elements.length) {
      elements[i].classList.add('show-count');
      i++;
      setTimeout(showNext, 1000);
    }
  }

  // Reset any previous classes so countdown can run again cleanly
  elements.forEach(el => el.classList.remove('show-count'));
  showNext();
}

/* 🎵 Background Music Control */
function startMusic() {
  const music = document.getElementById('bg-music');
  if (music) {
    music.play().catch(err => console.log('Autoplay blocked:', err));
  }
}