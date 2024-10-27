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