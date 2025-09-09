// Crear partículas flotantes
document.addEventListener('DOMContentLoaded', function() {
    const particlesContainer = document.getElementById('particles');
    const floatingContainer = document.getElementById('floating-elements');
    const colors = ['#9bc431', '#2eb198', '#616160'];
    const particleCount = 30;
    
    // Crear partículas de fondo
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Tamaño aleatorio
        const size = Math.random() * 12 + 3;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Color aleatorio
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.backgroundColor = color;
        
        // Posición inicial aleatoria
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        particle.style.left = `${posX}vw`;
        particle.style.top = `${posY}vh`;
        
        // Duración y delay aleatorios
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        particlesContainer.appendChild(particle);
    }
    
    // Crear elementos flotantes
    for (let i = 0; i < 8; i++) {
        const element = document.createElement('div');
        const type = Math.floor(Math.random() * 3);
        
        // Tamaño aleatorio
        const size = Math.random() * 12 + 8;
        
        if (type === 0) {
            element.classList.add('floating-element', 'circle');
            element.style.width = `${size}px`;
            element.style.height = `${size}px`;
        } else if (type === 1) {
            element.classList.add('floating-element', 'square');
            element.style.width = `${size}px`;
            element.style.height = `${size}px`;
        } else {
            element.classList.add('floating-element', 'triangle');
            element.style.borderLeftWidth = `${size/2}px`;
            element.style.borderRightWidth = `${size/2}px`;
            element.style.borderBottomWidth = `${size*0.85}px`;
            element.style.borderBottomColor = colors[Math.floor(Math.random() * colors.length)];
        }
        
        // Color aleatorio
        if (type !== 2) {
            const color = colors[Math.floor(Math.random() * colors.length)];
            element.style.backgroundColor = color;
        }
        
        // Posición inicial aleatoria
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        element.style.left = `${posX}vw`;
        element.style.top = `${posY}vh`;
        
        // Duración y delay aleatorios
        const duration = Math.random() * 10 + 8;
        const delay = Math.random() * 5;
        element.style.animationDuration = `${duration}s`;
        element.style.animationDelay = `${delay}s`;
        
        floatingContainer.appendChild(element);
    }
    
    // Contador regresivo
    const countdownDate = new Date("October 1, 2025 00:00:00").getTime();
    const countdownFunction = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        
        if (distance < 0) {
            clearInterval(countdownFunction);
        }
    }, 1000);
});