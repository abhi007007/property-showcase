// script.js

// Load projects from JSON
async function loadProjects() {
    const response = await fetch('projects.json');
    const projects = await response.json();
    displayProjects(projects);
}

function displayProjects(projects) {
    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        projectItem.innerHTML = `<h3>${project.title}</h3><button onclick='viewDetails(${project.id})'>View Details</button>`;
        projectList.appendChild(projectItem);
    });
}

// Handle navigation between listing and detail pages
function viewDetails(projectId) {
    // Logic to navigate to the project detail page
    window.location.href = `project-details.html?id=${projectId}`;
}

// Manage image galleries
function initGallery(images) {
    const gallery = document.getElementById('image-gallery');
    images.forEach(img => {
        const imgElement = document.createElement('img');
        imgElement.src = img;
        imgElement.onclick = () => openImage(img);
        gallery.appendChild(imgElement);
    });
}

function openImage(image) {
    // Logic to open image in a modal
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    modalImg.src = image;
    modal.style.display = 'block';
}

// Process contact forms
function processContactForm(event) {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(event.target);
    // Logic to handle form submission (e.g., sending data to a server)
    alert('Contact form submitted!');
}

// Event listeners
window.onload = loadProjects;
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', processContactForm);
}