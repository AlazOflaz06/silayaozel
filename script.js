// Arka Planda Yüzen Kalpler Oluşturma
function createFloatingHearts() {
  const container = document.getElementById('heartsContainer');
  const heartIcons = ['💖', '✨', '🃏', '💣', '⭐'];

  for (let i = 0; i < 25; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart-particle');
    heart.innerText = heartIcons[Math.floor(Math.random() * heartIcons.length)];
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 4 + 's';
    heart.style.fontSize = Math.random() * 15 + 15 + 'px';
    heart.style.animationDelay = Math.random() * 5 + 's';

    container.appendChild(heart);
  }
}

// Yumuşak Kaydırma
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth'
  });
}

// "Hayır" Butonunun Kaçma Efekti (Chester Şakası)
function moveButton() {
  const noBtn = document.getElementById('noBtn');
  const x = Math.random() * (window.innerWidth - 150) - (window.innerWidth / 2 - 75);
  const y = Math.random() * (window.innerHeight - 100) - (window.innerHeight / 2 - 50);

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// "Evet" Butonuna Basıldığında Çalışacak Sürpriz
function acceptApology() {
  const resultMessage = document.getElementById('resultMessage');
  const buttonGroup = document.querySelector('.button-group');

  buttonGroup.style.display = 'none';
  resultMessage.classList.remove('hidden');

  // Kutlama Efekti İçin Renkli Kalp Yağmuru
  for (let i = 0; i < 50; i++) {
    setTimeout(createBurstHeart, i * 30);
  }
}

function createBurstHeart() {
  const heart = document.createElement('div');
  heart.innerText = '🎉';
  heart.style.position = 'fixed';
  heart.style.left = '50%';
  heart.style.top = '50%';
  heart.style.fontSize = '24px';
  heart.style.pointerEvents = 'none';
  
  const destinationX = (Math.random() - 0.5) * window.innerWidth;
  const destinationY = (Math.random() - 0.5) * window.innerHeight;

  document.body.appendChild(heart);

  const animation = heart.animate([
    { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
    { transform: `translate(${destinationX}px, ${destinationY}px) scale(0)`, opacity: 0 }
  ], {
    duration: 1000,
    easing: 'cubic-bezier(0,0,0.2,1)'
  });

  animation.onfinish = () => heart.remove();
}

// Sayfa Yüklendiğinde Başlat
window.addEventListener('DOMContentLoaded', () => {
  createFloatingHearts();
});

