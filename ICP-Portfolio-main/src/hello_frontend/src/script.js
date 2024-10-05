// Toggle dark mode
const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Hamburger menu toggle
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Dynamic content loading for projects (simulating an external data source)
const projects = [
    { name: 'Ai photo tagger', description: 'tagging photos using ai.' },
    { name: 'Decentralized ipfs storage', description: 'store the files in a decentralized server using blockchain' },
    
];

const projectContainer = document.getElementById('project-container');
projects.forEach(project => {
    const projectElement = `
        <div class="project">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
        </div>
    `;
    projectContainer.innerHTML += projectElement;
});
