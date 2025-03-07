// Toggle Menu Functionality
const toggleMenu = () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
};


// Ensure menu closes when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector('.nav-links').classList.remove("active");
    });
});

// Tab Switching Functionality with Smooth Transition
const tablinks = document.querySelectorAll(".tab-links");
const tabcontents = document.querySelectorAll(".tab-contents");

function opentab(event, tabname) {
    tablinks.forEach(tab => tab.classList.remove("active-link"));
    tabcontents.forEach(tab => {
        tab.classList.remove("active-tab");
        tab.style.opacity = 0;  // Set opacity to 0 before transition
    });

    event.currentTarget.classList.add("active-link");
    const activeTab = document.getElementById(tabname);
    activeTab.classList.add("active-tab");

 setTimeout(() => {
        activeTab.style.opacity = 1;  // Fade in after active-tab is added
    }, 100); 
}





// Popup Functionality with Smooth Fade In/Out
const show = (id) => {
    const popup = document.getElementById(id);
    popup.style.display = 'block';
    setTimeout(() => popup.style.opacity = 1, 10);
};

const hide = (id) => {
    const popup = document.getElementById(id);
    popup.style.opacity = 0;
    setTimeout(() => popup.style.display = 'none', 300);
};


// Form Validation
const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", function (e) {
        let email = document.querySelector("input[type='email']").value;
        if (!email.includes("@")) {
            alert("Please enter a valid email.");
            e.preventDefault();
        }
    });
}


// Fireflies Animation
document.addEventListener('DOMContentLoaded', () => {
    const firefliesContainer = document.querySelector('.fireflies');

    for (let i = 0; i < 25; i++) {
        let firefly = document.createElement('div');
        firefly.className = 'firefly';
        
        // Random positions
        firefly.style.left = Math.random() * 100 + 'vw';
        firefly.style.top = Math.random() * 100 + 'vh';
        
        // Random size and animation delay
        firefly.style.width = firefly.style.height = Math.random() * 5 + 5 + 'px';
        firefly.style.animationDuration = Math.random() * 5 + 3 + 's';
        firefly.style.animationDelay = Math.random() * 5 + 's';
        
        firefliesContainer.appendChild(firefly);
    }
});

    function openModal(modalId) {
        document.getElementById(modalId).style.display = "block";
    }

    function closeModal(modalId) {
        document.getElementById(modalId).style.display = "none";
    }

    // Close the modal if clicked outside of content
    window.onclick = function (event) {
        const modals = document.querySelectorAll(".modal");
        modals.forEach((modal) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        });
    };