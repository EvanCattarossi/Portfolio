document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            id: 1,
            title: "Iphone",
            description: "Ce projet est un tp que j'ai fais en autodidacte avec oppenclassroom",
            languages: ["HTML", "CSS", "JavaScript"],
            imageUrl: "assets/img/iphone.png",
            downloadLink: "https://github.com/EvanCattarossi/Iphone.git",
            visitLink: "html/iphone.html",
        },
        {
            id: 2,
            title: "Serveur de fichier ",
            description: "Voici mon projet d'entreprise qui consiste a crée un serveur de fichier pour les écoles qui font parti de la CAPI.",
            languages: ["Active diretory", "GPO","Script Powwershell"],
            imageUrl: "assets/img/svfichier.jpg",
            visitLink: "html/capi.html",
        },
        {
            id: 3,
            title: "Toya",
            description: "Toya est un bot Discord polyvalent conçu pour faciliter la gestion de serveurs et répondre aux questions des utilisateurs. Projet en cours de développement Merci de bien vouloir patienter ",
            languages: ["MySQL pour la gestion des données", "JavaScript (Node.js) avec discord.js","Python avec discord.py"],
            imageUrl: "assets/img/toya.webp",
            downloadLink: "project3.zip",
            visitLink: "https://project3.com",
        },
        {
            id: 4, // Correction de l'ID pour éviter les doublons
            title: "Appli web GSB",
            description: "Ce projet est mon projet de seconde année de BTS SIO SLAM. Il m'a permis d'apprendre a coder en PHP et mySQL et de decouvrir chartJS..",
            languages: ["HTML", "PHP","CSS", "ChartJS", "JS"],
            imageUrl: "assets/img/gsb.png",
            downloadLink: "https://github.com/EvanCattarossi/GSB-WEB.git",
            
        },
       
        {
            id: 6, // Correction de l'ID pour éviter les doublons
            title: "Appli Mobile GSB en cours",
            description: "Application mobile GSB pas encore disponible.",
            languages: ["Api", "java", "android studio"],
            imageUrl: "assets/img/gsb.png",
           
        },
        
    ];

    const galleryItems = document.getElementById('circle-gallery-items');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalLanguages = document.getElementById('modal-languages');
    const modalLinkDownload = document.getElementById('modal-link-download');
    const modalLinkVisit = document.getElementById('modal-link-visit');

    const radius = 150;
    const totalItems = projects.length;

    projects.forEach((project, index) => {
        const angle = (index / totalItems) * 2 * Math.PI;
        const x = Math.cos(angle) * radius + radius - 40;
        const y = Math.sin(angle) * radius + radius - 40;

        const img = document.createElement('img');
        img.src = project.imageUrl;
        img.alt = project.title;
        img.style.left = `${x}px`;
        img.style.top = `${y}px`;
        img.dataset.projectId = project.id;

        // Ajout du titre du projet (CORRECTION : dans la boucle)
        const titleSpan = document.createElement('span');
        titleSpan.classList.add('project-title');
        titleSpan.textContent = project.title;

        galleryItems.appendChild(img);
        galleryItems.appendChild(titleSpan); // Ajout du span après l'image
    });

    galleryItems.addEventListener('click', function(event) {
        if (event.target.tagName === 'IMG') {
            const projectId = parseInt(event.target.dataset.projectId);
            const selectedProject = projects.find(project => project.id === projectId);
            if (selectedProject) {
                openModal(selectedProject);
            }
        }
    });

    function openModal(project) {
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        modalLanguages.textContent = project.languages.join(', ');
        modalLinkDownload.href = project.downloadLink;
        modalLinkVisit.href = project.visitLink;
        modal.style.display = 'block';
    }

    window.closeModal = function() {
        modal.style.display = 'none';
    };

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});
