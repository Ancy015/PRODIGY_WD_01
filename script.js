document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenu.querySelector('i').classList.toggle('fa-bars');
            mobileMenu.querySelector('i').classList.toggle('fa-xmark');
        });
    }

    // Sticky Header Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.padding = '20px 0';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.02)';
        }
    });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple Testimonial Slider Simulation
    let currentTestimonial = 2;
    const totalTestimonials = 15;
    const navCounter = document.querySelector('.testimonial-nav span span');

    if (navCounter) {
        document.querySelector('.fa-chevron-right')?.addEventListener('click', () => {
            if (currentTestimonial < totalTestimonials) {
                currentTestimonial++;
                navCounter.textContent = currentTestimonial;
            }
        });

        document.querySelector('.fa-chevron-left')?.addEventListener('click', () => {
            if (currentTestimonial > 1) {
                currentTestimonial--;
                navCounter.textContent = currentTestimonial;
            }
        });
    }

    // Form Submission (Mock)
    const newsletterBtn = document.querySelector('.newsletter-form button');
    if (newsletterBtn) {
        newsletterBtn.addEventListener('click', () => {
            const email = document.querySelector('.newsletter-form input').value;
            if (email) {
                alert(`Thank you for subscribing, ${email}!`);
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
});
