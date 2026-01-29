// Cart logic
let count = 0;
const cartDisplay = document.getElementById('cart-count');
const addButtons = document.querySelectorAll('.add-btn');

addButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Increment count
        count++;
        cartDisplay.innerText = count;

        // Visual feedback on button
        const originalText = btn.innerText;
        btn.innerText = "✓ Added to Cart";
        btn.style.borderColor = "#c6a355";
        btn.style.color = "#c6a355";

        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.borderColor = "white";
            btn.style.color = "white";
        }, 1500);
    });
});

// Simple Alert for Cart Button
function toggleCart() {
    alert("You have " + count + " items in your cart. Proceed to checkout via WhatsApp for fast delivery!");
}

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);