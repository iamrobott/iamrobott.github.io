const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const waveContainer = document.querySelector('.wave-container');

// Create waves
for (let i = 0; i < 3; i++) {
    const wave = document.createElement('div');
    wave.className = 'wave';
    wave.style.animationDelay = `${i * 0.5}s`;
    waveContainer.appendChild(wave);
}

function toggleTheme() {
    const isDark = body.classList.contains('dark');
    body.classList.toggle('dark');
    body.classList.toggle('light');
    themeToggle.textContent = isDark ? '🌞' : '🌙';
    
    // Trigger wave animation
    waveContainer.style.transform = `scale(${isDark ? 1.2 : 0.8})`;
    setTimeout(() => {
        waveContainer.style.transform = 'scale(1)';
    }, 500);
}

themeToggle.addEventListener('click', toggleTheme);