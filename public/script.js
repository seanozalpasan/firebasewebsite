document.addEventListener('DOMContentLoaded', () => {
    const pages = {
        'landing': document.getElementById('landing-page'),
        'about': document.getElementById('about-page'),
        'sailing': document.getElementById('sailing-page'),
        'projects': document.getElementById('projects-page')
    };

    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.target.getAttribute('href').substring(1);
            navigateToPage('landing', target);
        });
    });

    // Home icons
    document.querySelectorAll('.home-icon').forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.preventDefault();
            const currentPage = document.querySelector('.page.active').id.replace('-page', '');
            navigateToPage(currentPage, 'landing');
        });
    });

    function navigateToPage(from, to) {
        const transitions = {
            'landing-about': {
                exit: 'slide-left',
                enter: 'entering-left'
            },
            'about-landing': {
                exit: 'slide-right',
                enter: 'entering-right'
            },
            'landing-sailing': {
                exit: 'slide-right',
                enter: 'entering-right'
            },
            'sailing-landing': {
                exit: 'slide-left',
                enter: 'entering-left'
            },
            'landing-projects': {
                exit: 'slide-down',
                enter: 'entering-down'
            },
            'projects-landing': {
                exit: 'slide-up',
                enter: 'entering-up'
            }
        };

        const transition = transitions[`${from}-${to}`];
        if (!transition) return;

        // Prepare entering page
        pages[to].style.display = 'block';
        pages[to].classList.add(transition.enter);

        // Trigger reflow
        void pages[to].offsetWidth;

        // Exit animation for current page
        pages[from].classList.add(transition.exit);
        pages[from].classList.remove('active');

        // Enter animation for new page
        setTimeout(() => {
            pages[to].classList.remove(transition.enter);
            pages[to].classList.add('active');
            
            // Clean up after animation
            setTimeout(() => {
                pages[from].classList.remove(transition.exit);
                pages[from].style.display = 'none';
            }, 800);
        }, 50);
    }

    // About page photo carousel
    let currentPhotoIndex = 0;
    const photos = [
        'hellyhansen.jpg',
        'goated.jpg',
        'friends.jpg',
        'egg.jpg'
    ];

    function setupPhotoCarousel() {
        const carousel = document.querySelector('.photo-carousel');
        photos.forEach(photo => {
            const img = document.createElement('img');
            img.src = photo;
            carousel.appendChild(img);
        });

        carousel.firstElementChild.classList.add('active');
        
        setInterval(() => {
            const images = carousel.querySelectorAll('img');
            images[currentPhotoIndex].classList.remove('active');
            currentPhotoIndex = (currentPhotoIndex + 1) % images.length;
            images[currentPhotoIndex].classList.add('active');
        }, 3000);
    }

    const resumeBtn = document.querySelector('.resume-btn');
    const resumeOverlay = document.getElementById('resume-overlay');
    const resumeFrame = document.getElementById('resume-frame');
    const closeResume = document.querySelector('.close-resume');

    resumeBtn.addEventListener('click', () => {
        resumeFrame.src = 'SeanOzalpasanResume.pdf'
        resumeOverlay.style.display = 'block';
    });

    closeResume.addEventListener('click', () => {
        resumeOverlay.style.display = 'none';
        resumeFrame.src = 'SeanOzalpasanResume.pdf';  // Clear the iframe source
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && resumeOverlay.style.display === 'block') {
            resumeOverlay.style.display = 'none';
            resumeFrame.src = 'SeanOzalpasanResume.pdf';
        }
    });

    // Sailing page carousel
    function setupSailingCarousel() {
        const carousel = document.querySelector('.sailing-carousel');
        const modal = document.querySelector('.modal');
        const modalImg = document.getElementById('modal-img');
        let currentImageIndex = 0;
        
        const sailingPhotos = [
            'sf1.jpg',
            'sf2.jpg',
            'sf3.jpg',
            'mont1.jpg',
            'iluvsailing.jpg'
        ];

        sailingPhotos.forEach((photo, index) => {
            const img = document.createElement('img');
            img.src = photo;
            img.addEventListener('click', () => {
                currentImageIndex = index;
                modalImg.src = photo;
                modal.style.display = 'block';
            });
            carousel.appendChild(img);
        });


        const projectModal = document.querySelector('.project-modal');
        const projectModalContent = document.querySelector('.project-modal-content');
        const closeProjectModal = document.querySelector('.close-project-modal');

        // Project data - you can modify this with your actual project information
        const proj1Desc = `
        During my time at USC SHINE, I had the honor of working with Kaixin Yang, 
        a Ph.D student under Prof. Nuzzo. Together with Kaixin, we created around 17 digital circuits using Verilog. 
        Then, with differing key lengths, we turned the original 17 circuits into 124 locked circuits, 
        using Random Logic Locking. We then collected data on these 124 circuits. 
        The end goal of these circuits was to mirror a Graph, where the logic gates were the nodes, 
        and their inputs and outputs were edges. We created scripts to come up with information about 
        their fan-in and fan-out cones, node features, and edge features in order to prepare the dataset.
         With the creation of this dataset, I created a Graph Neural Network that would predict the 
         attack runtime of any given locked circuit.
        `;

        const proj2Desc = `
        The presentation covers Atatürk's transformation of Turkey 
        from the ruins of the Ottoman Empire into a modern republic. 
        After leading the Turkish War of Independence, Atatürk established a democratic, 
        secular state guided by his philosophy of Kemalism. He pursued complete national independence, 
        modernization through education, and gender equality. 
        In foreign relations, he followed the principle "Peace at home, Peace in the world," 
        securing Turkey's sovereignty through diplomatic achievements 
        like the Montreux Convention while maintaining independence from foreign powers.
        My presentation won ATAA's Youth Science for Peace Day competition, and I was
        invited to Washington D.C. to attend the ATAA annual conference. CLICK ON THE IMAGE TO VIEW THE PRESI
        `;

        const projectData = {
            1: {
                title: "USC Summer High School Intensive in Next-Generation Engineering (SHINE)",
                description: proj1Desc,
                image: "7SHINE23-OZALPASAN-S-PosterFINAL - Sean Ozalpasan.jpg",
                pdf: "7SHINE23-OZALPASAN-S-PosterFINAL - Sean Ozalpasan.pdf"
            },
            2: {
                title: "Assembly of Turkish American Association's (ATAA) Yurtta Sulh Cihanda Sulh Presentation",
                description: proj2Desc,
                image: "yurttasulh.png",
                pdf: "Yurtta sulh Cihanda sulh.pdf"
            },
            3: {
                title: "Project Title 3",
                description: "Detailed description of project 3. Include relevant links, technologies used, and key features implemented.",
                image: "project3.jpg"
            }
        };

        // Update the modal image to be clickable
        document.querySelectorAll('.project').forEach(project => {
            project.addEventListener('click', () => {
                const projectId = project.dataset.project;
                const projectInfo = projectData[projectId];

                // Update modal content
                projectModalContent.querySelector('h3').textContent = projectInfo.title;
                projectModalContent.querySelector('.project-description').textContent = projectInfo.description;

                // Create and update image with click handler
                const modalImage = projectModalContent.querySelector('.project-image');
                modalImage.src = projectInfo.image;
                modalImage.style.cursor = 'pointer';  // Make it look clickable

                // Add click event to open PDF
                modalImage.onclick = () => {
                    window.open(projectInfo.pdf, '_blank');
                };

                // Show modal
                projectModal.style.display = 'block';
            });
        });

        // Close modal functionality
        closeProjectModal.addEventListener('click', () => {
            projectModal.style.display = 'none';
        });

        // Close modal when clicking outside
        projectModal.addEventListener('click', (e) => {
            if (e.target === projectModal) {
                projectModal.style.display = 'none';
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && projectModal.style.display === 'block') {
                projectModal.style.display = 'none';
            }
        });
        // Modal controls
        document.querySelector('.close').addEventListener('click', () => {
            modal.style.display = 'none';
        });

        document.querySelector('.prev').addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + sailingPhotos.length) % sailingPhotos.length;
            modalImg.src = sailingPhotos[currentImageIndex];
        });

        document.querySelector('.next').addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % sailingPhotos.length;
            modalImg.src = sailingPhotos[currentImageIndex];
        });

        // Add keyboard navigation
        document.addEventListener('keydown', (e) => {
            // Only handle arrow keys if modal is visible
            if (modal.style.display === 'block') {
                if (e.key === 'ArrowLeft') {
                    // Left arrow - previous image
                    currentImageIndex = (currentImageIndex - 1 + sailingPhotos.length) % sailingPhotos.length;
                    modalImg.src = sailingPhotos[currentImageIndex];
                } else if (e.key === 'ArrowRight') {
                    // Right arrow - next image
                    currentImageIndex = (currentImageIndex + 1) % sailingPhotos.length;
                    modalImg.src = sailingPhotos[currentImageIndex];
                }
            }
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Initialize carousels
    setupPhotoCarousel();
    setupSailingCarousel();
});