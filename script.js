// Chester Şans Kutusu Mesaj Listesi
const chestRewards = [
  "🃏 Chester'ın Şakası: Seni affetmemek imkansız! (Kupalar senin oldu)",
  "💣 Patlayıcı Tatlılık: Sıla'nın gülüşü aradaki tüm sorunları yok etti!",
  "🍬 Şeker Takviyesi: Bu kutudan Sıla'ya sonsuz kahve ve çikolata sözü çıktı!",
  "👑 Kraliçe Tacı: Oyundaki ve kalbimdeki tek MVP sensin!",
  "⭐ Süper Yıldız: Sıla bugün %100 oranla dünyanın en tatlı insanı seçildi!"
];

// Arka Plan Parçacık Yağmuru
function initParticles() {
  const container = document.getElementById('heartsContainer');
  const icons = ['💖', '✨', '🃏', '💣', '⭐', '🍓'];

  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.innerText = icons[Math.floor(Math.random() * icons.length)];
    
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDuration = (Math.random() * 3 + 4) + 's';
    particle.style.fontSize = (Math.random() * 15 + 16) + 'px';
    particle.style.animationDelay = Math.random() * 5 + 's';

    container.appendChild(particle);
  }
}

// Yumuşak Sayfa Kaydırma
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Kutudan Sürpriz Mesaj Çekme
function openChest() {
  const chestText = document.getElementById('chestText');
  const randomReward = chestRewards[Math.floor(Math.random() * chestRewards.length)];
  
  chestText.style.opacity = '0';
  setTimeout(() => {
    chestText.innerText = randomReward;
    chestText.style.opacity = '1';
  }, 200);
}

// Hayır Butonunun Kaçma Efekti
function dodgeButton() {
  const noBtn = document.getElementById('noBtn');
  const x = Math.random() * (window.innerWidth - 180) - (window.innerWidth / 2 - 90);
  const y = Math.random() * (window.innerHeight - 120) - (window.innerHeight / 2 - 60);

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// Barışma Kabul Edildiğinde
function acceptPeace() {
  document.querySelector('.decision-buttons').style.display = 'none';
  document.getElementById('celebrationModal').classList.remove('hidden');

  // Ekranı Kaplayan Konfeti Patlaması
  for (let i = 0; i < 70; i++) {
    setTimeout(createConfetti, i * 20);
  }
}

function createConfetti() {
  const confetti = document.createElement('div');
  const emojis = ['🎉', '✨', '💖', '👑', '🏆'];
  confetti.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  confetti.style.position = 'fixed';
  confetti.style.left = '50%';
  confetti.style.top = '50%';
  confetti.style.fontSize = '26px';
  confetti.style.pointerEvents = 'none';
  confetti.style.zIndex = '9999';

  const destX = (Math.random() - 0.5) * window.innerWidth;
  const destY = (Math.random() - 0.5) * window.innerHeight;

  document.body.appendChild(confetti);

  const animation = confetti.animate([
    { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
    { transform: `translate(${destX}px, ${destY}px) scale(0)`, opacity: 0 }
  ], {
    duration: 1200,
    easing: 'cubic-bezier(0, 0.2, 0.8, 1)'
  });

  animation.onfinish = () => confetti.remove();
}

// Başlatıcı
window.addEventListener('DOMContentLoaded', () => {
  initParticles();
});
