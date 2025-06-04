document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        const offset = document.querySelector('header').offsetHeight;

        window.scrollTo({
            top: targetSection.offsetTop - offset,
            behavior: 'smooth'
        });
    });
});


// Toggle Dark Mode
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const themeButton = document.querySelector('.theme-toggle');
    themeButton.textContent = document.body.classList.contains('dark-theme') ? '🌞' : '🌙';
}
 

// Dark Mode Toggle
const themeToggleBtn = document.querySelector('.theme-toggle'); // Find the button to toggle dark mode
const bodyElement = document.body;

// Check for dark mode preference in localStorage
if (localStorage.getItem('theme') === 'dark') {
    bodyElement.classList.add('dark-theme');
    themeToggleBtn.textContent = '🌞'; // Change button text to "light mode"
}

// Add event listener to the theme toggle button
themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-theme');

    // Save the user's theme preference in localStorage
    if (bodyElement.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.textContent = '🌞'; // Change button text to "light mode"
    } else {
        localStorage.setItem('theme', 'light');
        themeToggleBtn.textContent = '🌙'; // Change button text to "dark mode"
    }
});


// Get the dark mode toggle button and theme status element
const themeToggleButton = document.querySelector('.theme-toggle');
const themeStatus = document.getElementById('theme-status');

// Check the current theme on page load
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeStatus.textContent = 'Current Mode: Dark';
}

// Toggle theme on button click
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    themeStatus.textContent = `Current Mode: ${theme.charAt(0).toUpperCase() + theme.slice(1)}`;

    // Save the theme preference in localStorage
    localStorage.setItem('theme', theme);
});

// Map of certificate IDs to PDF paths
const certificates = {
    'cert-wb': {
        pdf: 'certificate/WebDevelopmentFundamentals-IBM.pdf',
        title: 'Web Development Fundamentals'
    },
    'cert-ai': {
        pdf: 'certificate/GettingStartedwithArtificialIntellige-IBM.pdf',
        title: 'Getting Started with Artificial Intellige'
    },
    'cert-bcg': {
        pdf: 'certificate/BCG_certificate.pdf',
        title: 'GenAI job Stimulation'
    },
    'cert-dt': {
        pdf: 'certificate/Accenture certificate.pdf',
        title: 'Developer and Technology Job Simulation'
    },
    'cert-sa': {
        pdf: 'certificate/AWS certificate.pdf',
        title: 'Solution Architecture Job Simulation'
    },
    'cert-na': {
        pdf: 'certificate/National Association of State Boards of Accountancy (NASBA).pdf',
        title: 'What Is Generative AI?'
    },
    'cert-linkedin ai': {
        pdf: 'certificate/linkedin-Agentic Ai.pdf',
        title: 'Fundamentals of Agentic AI: Business Implications and Ethical Insights'
    },
    'cert-linkedin prompt': {
        pdf: 'certificate/linkedin-Prompt engineering.pdf',
        title: 'Introduction to Prompt Engineering for Generative AI (2023)'
    },
    'cert-next': {
        pdf: 'certificate/next certificate.pdf',
        title: 'Responsive Web Design'
    },
    'cert-pubspeak': {
        pdf: 'certificate/Public Speaking Certificate.pdf',
        title: 'Public Speaking Course: Improve Your Speaking Skills Fast'
    },
<<<<<<< HEAD
    'cert-tcs': {
        pdf: 'certificate/TcsIon.pdf',
=======
     'cert-tcs': {
        pdf: 'TcsIon.pdf',
>>>>>>> 1d1ba3313b012e1b109eec6d6850e47c164a24b9
        title: 'TCS iON Career Edge - Young Professional'
    }
};


function openCertificate(certId) {
    const modal = document.getElementById('certModal');
    const certIframe = document.getElementById('certPdf');
    const downloadLink = document.getElementById('certDownloadLink');

    // Update the iframe and download link
    certIframe.src = certificates[certId].pdf;
    downloadLink.href = certificates[certId].pdf;
    downloadLink.download = certificates[certId].title + '.pdf';

    // Display the modal
    modal.style.display = 'flex';
}

function closeCertificate() {
    const modal = document.getElementById('certModal');
    const certIframe = document.getElementById('certPdf');

    // Reset the iframe source and hide the modal
    certIframe.src = '';
    modal.style.display = 'none';
}



console.log('%c🎉 Hello 🎉', 'color: purple; font-size: 20px;');

// Trigger Surprise Page on key combination
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.shiftKey && event.key === 'S') {
        window.location.href = 'surprise.html';  // Redirect to surprise page
    }
});


// Scroll-based animation
window.addEventListener('scroll', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add('animate');
        }
    });
});

// Check if an element is in the viewport
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}



window.addEventListener('scroll', function() {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Function to check if the element is in the viewport (trigger earlier)
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    // Trigger the animation when the top of the element is 150px before the bottom of the viewport
    return rect.top <= window.innerHeight - 150 && rect.bottom >= 0;
}

// Function to add the 'visible' class when the element is in view
function handleScroll() {
    const elements = document.querySelectorAll('.hidden');
    elements.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

// Add the scroll event listener
window.addEventListener('scroll', handleScroll);

// Call the function once to show content if it's already in view
handleScroll();

window.onload = function() {
    window.scrollTo(0, 0);  // Ensure the page starts at the top (if needed)
}