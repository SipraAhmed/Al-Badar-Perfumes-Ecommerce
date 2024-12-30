// Back-to-Top Button Functionality
const backToTopButton = document.getElementById('back-to-top');

// Show Back-to-Top Button on Scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll to Top on Button Click
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Add to Cart Functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');
let cartCount = 0;
const cartLink = document.getElementById('cart-link');

addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
        cartCount++;
        updateCartCount();
        alert("Added to cart!");
    });
});

// Function to update the cart count
function updateCartCount() {
    cartLink.innerHTML = `<i class="fas fa-shopping-cart"></i> Cart (${cartCount})`;
}

// Contact Form Validation
const contactForm = document.querySelector('#contact form');

contactForm.addEventListener('submit', function (event) {
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (!name || !email || !message) {
        alert('All fields are required!');
        event.preventDefault();
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert('Please enter a valid email address!');
        event.preventDefault();
        return;
    }

    alert('Message sent successfully!');
});

// Dynamic Navigation Highlights
const navLinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});
