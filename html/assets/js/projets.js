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
            description: "Voici mon projet d'entreprise qui consiste à créer un serveur de fichiers pour les écoles qui font partie de la CAPI.",
            languages: ["Active Directory", "GPO", "Script PowerShell"],
            imageUrl: "assets/img/svfichier.jpg",
            visitLink: "html/capi.html",
        },
        {
            id: 3,
            title: "Biruk",
            description: "Biruk est un deuxième portfolio personnel qui raconte mon histoire d'orphelin adopté...",
            languages: ["CSS", "JS", "HTML"],
            imageUrl: "assets/img/6anG.gif",
            downloadLink: "https://github.com/EvanCattarossi/Biruk.git",
            visitLink: "http://portfolio.evan-cattarossi.fr./",
        },
        {
            id: 4,
            title: "Appli web GSB",
            description: "Ce projet consiste à développer une application web sécurisée dédiée à la gestion des frais professionnels pour le laboratoire GSB. L'application permet aux visiteurs médicaux de saisir et de suivre facilement leurs fiches de frais. Les comptables disposent d'un espace pour vérifier, valider et gérer les remboursements de ces frais. Quant à l'administrateur, il a la possibilité de gérer les utilisateurs (ajout, suppression), de superviser l’ensemble des activités de l’application et d’accéder à des statistiques détaillées pour un meilleur pilotage. L’interface est pensée pour être intuitive, ergonomique et évolutive, avec une gestion des droits d’accès adaptée aux différents profils utilisateurs : visiteurs, comptables et administrateurs.",
            languages: ["HTML", "PHP", "CSS", "ChartJS", "JS"],
            imageUrl: "assets/img/gsb.png",
            downloadLink: "https://github.com/EvanCattarossi/GSB-WEB.git",
            visitLink: "https://cattarossievan.alwaysdata.net/",
            docLink: "https://github.com/user-attachments/files/20392069/dossier.GSb.WEB.Evan.CATTAROSSI.3.pdf"
        },
        {
            id: 6,
            title: "Appli Mobile GSB",
            description: "Ce projet vise à développer une application mobile sécurisée pour la gestion des frais professionnels au sein du laboratoire GSB. Conçue pour une utilisation terrain, l’application permet aux visiteurs médicaux de saisir leurs fiches de frais en temps réel, directement depuis leur smartphone. Les comptables peuvent consulter et traiter les demandes de remboursement de manière efficace. L’administrateur bénéficie quant à lui d’un accès aux fonctionnalités de gestion des utilisateurs (ajout, suppression) et à des statistiques globales pour suivre l'activité. L’application mobile est pensée pour être rapide, intuitive et parfaitement adaptée aux besoins de mobilité des utilisateurs, tout en respectant les niveaux d’accès propres à chaque rôle..",
            languages: ["API", "Java", "Android Studio"],
            imageUrl: "assets/img/gsb.png",
            downloadLink: "https://github.com/EvanCattarossi/GSB-mob.git",
            docLink: "https://github.com/user-attachments/files/20391849/dossier_mobile_Evan.CATTAROSSI.1.pdf"
        },
          {
            id: 5,
            title: "Jeu Devine le mot ",
            description: "voici un mini jeu devine le mot que j'ai codé lors de mon apprentissage sur openclassroom et des connaissances personnels , les mots sont en rapport avec le webdesign .",
            languages: ["CSS", "HTML", "JS"],
            imageUrl: "assets/img/logo.png",
            visitLink: "html/jeu.html",
        },
    ];

    const galleryItems = document.getElementById('circle-gallery-items');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalLanguages = document.getElementById('modal-languages');
    const modalLinkDownload = document.getElementById('modal-link-download');
    const modalLinkVisit = document.getElementById('modal-link-visit');
    const modalLinkDoc = document.getElementById('modal-link-doc');

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

        const titleSpan = document.createElement('span');
        titleSpan.classList.add('project-title');
        titleSpan.textContent = project.title;

        galleryItems.appendChild(img);
        galleryItems.appendChild(titleSpan);
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

        modalLinkDownload.href = project.downloadLink || "#";
        modalLinkDownload.style.display = project.downloadLink ? "inline-block" : "none";

        modalLinkVisit.href = project.visitLink || "#";
        modalLinkVisit.style.display = project.visitLink ? "inline-block" : "none";

        if (project.docLink) {
            modalLinkDoc.href = project.docLink;
            modalLinkDoc.style.display = "inline-block";
        } else {
            modalLinkDoc.style.display = "none";
        }

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
