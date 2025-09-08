// Crear partículas flotantes
document.addEventListener('DOMContentLoaded', function() {
    const particlesContainer = document.getElementById('particles');
    const floatingContainer = document.getElementById('floating-elements');
    const colors = ['#9bc431', '#2eb198', '#616160'];
    const particleCount = 40;
    
    // Crear partículas de fondo
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Tamaño aleatorio
        const size = Math.random() * 20 + 5;
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
    for (let i = 0; i < 12; i++) {
        const element = document.createElement('div');
        const type = Math.floor(Math.random() * 3);
        
        // Tamaño aleatorio
        const size = Math.random() * 20 + 10;
        
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
    
    // Efecto de movimiento del logo con el mouse
    const logoContainer = document.getElementById('logo-container');
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.clientX) / 25;
        const y = (window.innerHeight / 2 - e.clientY) / 25;
        
        logoContainer.style.transform = `translate(${x}px, ${y}px)`;
    });
    
    // Efecto de escritura para el texto
    const textElement = document.querySelector('.animated-text');
    const text = textElement.textContent;
    textElement.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            textElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    setTimeout(typeWriter, 1000);
});