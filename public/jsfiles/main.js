document.addEventListener('DOMContentLoaded', () => {
    const pages = {
        'landing': document.getElementById('landing-page'),
        'about': document.getElementById('about-page'),
        'sailing': document.getElementById('sailing-page'),
        'projects': document.getElementById('projects-page'),
        'kazakhstan': document.getElementById('kazakhstan-page')
    };

    //NAVIGATION AND RESUME
    {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = e.target.getAttribute('href').substring(1);
                navigateToPage('landing', target, pages);
            });
        });
    
        document.querySelectorAll('.home-icon').forEach(icon => {
            icon.addEventListener('click', (e) => {
                e.preventDefault();
                const currentPage = document.querySelector('.page.active').id.replace('-page', '');
                navigateToPage(currentPage, 'landing', pages);
            });
        });
    
        // Initialize resume functionality
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
    }

    import('./carousels.js').then(module => {
        module.initCarousels();
    });

    import('./projects.js').then(module => {
        module.initProjects();
    });
});

function navigateToPage(from, to, pages) {
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
        },
        'landing-kazakhstan': {
            exit: 'slide-up',
            enter: 'entering-up'
        },
        'kazakhstan-landing': {
            exit: 'slide-down',
            enter: 'entering-down'
        }
    };

    const transition = transitions[`${from}-${to}`];
    if (!transition) return;

    pages[to].style.display = 'block';
    pages[to].classList.add(transition.enter);

    void pages[to].offsetWidth;

    pages[from].classList.add(transition.exit);
    pages[from].classList.remove('active');

    setTimeout(() => {
        pages[to].classList.remove(transition.enter);
        pages[to].classList.add('active');
        
        setTimeout(() => {
            pages[from].classList.remove(transition.exit);
            pages[from].style.display = 'none';
        }, 800);
    }, 50);
}