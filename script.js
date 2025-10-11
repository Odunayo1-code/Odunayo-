// Generate random stars
function createStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 50;
    
    for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.width = Math.random() * 3 + 1 + 'px';
    star.style.height = star.style.width;
    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    star.style.animationDuration = Math.random() * 3 + 2 + 's';
    starsContainer.appendChild(star);
    }
    }
    
    // Set default launch date (14 days from now)
    function setDefaultDate() {
    const now = new Date();
    const futureDate = new Date(now.getTime() + (14 * 24 * 60 * 60 * 1000));
    const formattedDate = futureDate.toISOString().slice(0, 16);
    document.getElementById('launchDate').value = formattedDate;
    return futureDate;
    }
    
    // Countdown timer logic
    let countdownInterval;
    
    function padZero(num) {
    return num.toString().padStart(2, '0');
    }
    
    function updateCountdown() {
    const launchDateInput = document.getElementById('launchDate').value;
    
    if (!launchDateInput) {
    return;
    }
    
    const launchDate = new Date(launchDateInput).getTime();
    const now = new Date().getTime();
    const difference = launchDate - now;
    
    if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = padZero(days);
    document.getElementById('hours').textContent = padZero(hours);
    document.getElementById('minutes').textContent = padZero(minutes);
    document.getElementById('seconds').textContent = padZero(seconds);
    } else {
    // Countdown finished
    document.getElementById('days').textContent = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    clearInterval(countdownInterval);
    }
    }
    
    function startCountdown() {
    clearInterval(countdownInterval);
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
    }
    
    // Initialize
    createStars();
    setDefaultDate();
    startCountdown();
    
    // Listen for date changes
    document.getElementById('launchDate').addEventListener('change', startCountdown);