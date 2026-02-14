let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    // Sab images ko hide karo
    slides.forEach(img => img.classList.remove("active"));
    
    // Index ko handle karo
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;

    // Sirf current image dikhao
    slides[currentSlide].classList.add("active");
}

function moveSlide(step) {
    currentSlide += step;
    showSlide(currentSlide);
}

// Automatic Change (har 3 second baad)
setInterval(() => {
    moveSlide(1);
}, 3000);

// Initial call
showSlide(currentSlide);


/* popup deliver to paki */
const locationBtn = document.getElementById('location-btn');
const modal = document.getElementById('location-modal');
const overlay = document.getElementById('modal-overlay');
const closeBtn = document.getElementById('close-modal');
const doneBtn = document.getElementById('done-btn');

// Modal kholne ke liye
locationBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    overlay.style.display = 'block';
});

// Modal band karne ke liye (Cross, Done button ya Overlay par click karne se)
const closeModal = () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
};

closeBtn.addEventListener('click', closeModal);
doneBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

/* login popup */
const signinNav = document.getElementById('signin-nav');
const bodyOverlay = document.getElementById('modal-overlay'); // Wahi purana overlay use karenge

signinNav.addEventListener('mouseenter', () => {
    bodyOverlay.style.display = 'block';
});

signinNav.addEventListener('mouseleave', () => {
    bodyOverlay.style.display = 'none';
});
/* logo ke nichay all ka menue */
const sidebarTrigger = document.querySelector(".panel-all");
const sidebar = document.getElementById("sidebar-container");
const sidebarClose = document.getElementById("sidebar-close");
const sidebarOverlay = document.getElementById("sidebar-overlay");

// Menu kholne ke liye
sidebarTrigger.addEventListener("click", () => {
    sidebar.classList.add("active");
    sidebarOverlay.style.display = "block";
    document.body.style.overflow = "hidden"; // Screen scroll band karne ke liye
});

// Menu band karne ke liye
const closeSidebar = () => {
    sidebar.classList.remove("active");
    sidebarOverlay.style.display = "none";
    document.body.style.overflow = "auto";
};

sidebarClose.addEventListener("click", closeSidebar);
sidebarOverlay.addEventListener("click", closeSidebar);