//going to add kz stuff
document.addEventListener('DOMContentLoaded', () => {
    const pages = {
        'landing': document.getElementById('landing-page'),
        'about': document.getElementById('about-page'),
        'sailing': document.getElementById('sailing-page'),
        'projects': document.getElementById('projects-page'),
        'kazakhstan': document.getElementById('kazakhstan-page')
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

    // Navigating from and to page
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
    function setupPhotoCarousel() {
        let currentPhotoIndex = 0;
        const photos = [
            'aboutphotos/sanf.JPG',
            'aboutphotos/friends.jpg',
            'aboutphotos/wmom.JPG',
            'aboutphotos/scenic.jpg',
            'aboutphotos/insta.jpg',
            'aboutphotos/speaker.jpg',
            'aboutphotos/inthecar.JPG',
            'aboutphotos/porkbellyyum.jpg',
            'aboutphotos/academicex.jpg',
            'aboutphotos/suited.jpg',
            'aboutphotos/dentist.jpg',
            'aboutphotos/robotics.jpg',
            'aboutphotos/galajacket.jpg',
            'aboutphotos/shinepres.jpg'
        ];
        
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
        }, 1600);
    }


    // Sailing page carousel
    function setupSailingCarousel() {
        const carousel = document.querySelector('.sailing-carousel');
        const modal = document.querySelector('.modal');
        const modalImg = document.getElementById('modal-img');
        let currentImageIndex = 0;
        
        const sailingPhotos = [
            'sailingphotos/sf1.jpg',
            'sailingphotos/sf2.jpg',
            'sailingphotos/sf3.jpg',
            'sailingphotos/mont1.jpg',
            'sailingphotos/hiking.jpg',
            'sailingphotos/iluvsailing.jpg',
            'sailingphotos/boat.JPG',
            'sailingphotos/newport.JPG',
            'sailingphotos/ogsailing.JPG',
            'sailingphotos/sandiegoboat.jpg'
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

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                modal.style.display = 'none';
            }
        });
    }

    // Resume setup might need to change
    function resumeSetup() {
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

    // Projects setup
    function projectsSetup(){
        const projectModal = document.querySelector('.project-modal');
        const projectModalContent = document.querySelector('.project-modal-content');
        const closeProjectModal = document.querySelector('.close-project-modal');
    
        // Project data - you can modify this with your actual project information
        const proj1Desc = `
            During my time at USC SHINE, I had the honor of working with Kaixin Yang, 
            a Ph.D student under Prof. Nuzzo. Together with Kaixin, we created around 17 digital circuits using Verilog. 
            Then, with differing key lengths, we turned the original 17 circuits into 124 locked circuits, 
            using Random Logic Locking. We then collected data on these 124 circuits. 💻
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
            In foreign relations, he followed the principle "Peace at home 🏡, Peace in the world 🌍," 
            securing Turkey's sovereignty through diplomatic achievements 
            like the Montreux Convention while maintaining independence from foreign powers.
            My presentation won ATAA's Youth Science for Peace Day competition, and I was
            invited to Washington D.C. to attend the ATAA annual conference. Click on the image to open the presentation | 
            Copy the link to watch my segment: https://youtu.be/kNDXeqv6-fM?t=440
            `;
    
        const proj3Desc = `
            Over the summer I took a deep dive into Cyber Security. I did a 3 week 21 hr/wk program where
            I learned a lot of the important topics in CyberSec, and completed mini-projects with a group.
            After the program concluded, the interest stuck, and I asked one of the boot camp mentors to shadow me as I made this 
            mock-Keylogger. A Keylogger is a type of malware that people can accidentally install which tracks
            things like keystrokes, mouse movements, and screen activity. My keylogger tracked all of these things, as well as having the functionality 
            of taking a screenshot if the script detected keywords. After 10 screenshots, the Keylogger script would send me an email of all screenshots,
            keyboard, and mouse data.
            My mentor appreciated my work ethic and passion so much, that they offered me a job if I might need one in college 🙏 
            | Click on the image to get to the project GitHub link
            `;
    
        const proj4Desc = `
            The presentation "What Turkish Youth Want For Our Future" 
            addresses the aspirations and challenges facing Turkish youth today. 
            It emphasizes key values such as multilateralism, inclusion, solidarity, peace, and resilience. 
            The talk discusses issues around foreign policy representation and cultural identity, 
            proposing solutions through community events, cultural clubs, and education. 
            The presentation also touches on the importance of staying informed about 
            Turkish current events, foreign policy, and international relations, 
            highlighting the role of young Turkish people in shaping their community's future 🇹🇷 Click on the image to open the presentation | Copy this link to watch my segment!
             https://youtu.be/YpAaGGvcPBg?t=371
            `;
    
        const proj5Desc = `
            As a part of one my physics labs, I leveraged AI to create
            3D & 2D visualizations of the lab data. The data was collected by me and my lab partner, all 513 data points
            were collected manually 😮‍💨 | Click on the image to get to the project GitHub link
            `;
    
        const proj6Desc = `
            The Village Institutes (1940-1954) were an innovative Turkish educational program that trained over 
            17,000 teachers to combat rural illiteracy. Students learned practical skills alongside academics 📚 in self-sustaining institutes, 
            creating a new generation of rural educators who transformed their communities through 
            increased literacy and modern farming methods. This model offers valuable lessons 
            for addressing modern educational challenges in developing regions. | Click on the image to open the presentation!
            `;
    
        const proj7Desc = `
            The Turkish Straits (Çanakkale and Istanbul) have been strategically vital waterways 
            connecting the Black Sea to the Aegean. After centuries of Ottoman control, 
            Turkey gained favorable governance through the 1936 Montreux Convention 📜, 
            which has helped maintain regional stability by allowing Turkey to regulate maritime 
            traffic and enforce neutrality during conflicts, from World War II to present-day events. | Click on the image to open the presentation!
            `
    
        const projectData = {
            1: {
                title: "USC Summer High School Intensive in Next-Generation Engineering (SHINE)",
                description: proj1Desc,
                image: "projectstuff/7SHINE23-OZALPASAN-S-PosterFINAL - Sean Ozalpasan.jpg",
                pdf: "projectstuff/7SHINE23-OZALPASAN-S-PosterFINAL - Sean Ozalpasan.pdf"
            },
            2: {
                title: "Assembly of Turkish American Association's (ATAA) Yurtta Sulh Cihanda Sulh Presentation",
                description: proj2Desc,
                image: "projectstuff/yurttasulh.png",
                pdf: "projectstuff/Yurtta sulh Cihanda sulh.pdf"
            },
            3: {
                title: "Making a Keylogger malware to understand how evil Cybercriminals are",
                description: proj3Desc,
                image: "projectstuff/keylogbiggerimage.png",
                pdf: "https://github.com/seanozalpasan/KeyLogProj"
            },
            4: {
                title: "“Prosperous Future for All Through Multilateral Dialogue” in support of (April 24) International Day of Multilateralism and Diplomacy for Peace (A/RES/73/127)",
                description: proj4Desc,
                image: "projectstuff/24aprilpres.png",
                pdf: "projectstuff/SeanOzalpasanATAANisan24Pres.pdf"
            },
            5: {
                title: "3D & 2D Electric Potential Visualization",
                description: proj5Desc,
                image: "projectstuff/3dvis.png",
                pdf: "https://github.com/seanozalpasan/PhysicsPotentialLab"
            },
            6: {
                title: "Using the Village Institute System As A Case Study On Education",
                description: proj6Desc,
                image: "projectstuff/detailednov17pres.png",
                pdf: "projectstuff/ATAANov2024Presentation.pdf"
            },
            7: {
                title: "The Question of Diplomacy Of The Straits",
                description: proj7Desc,
                image: "projectstuff/turkeyVall.png",
                pdf: "projectstuff/diplomacyofthestraits.pdf"
            },
            8: {
                title: "More coming soon...",
                description: "More coming soon!",
                image: "",
                pdf: "https://github.com/seanozalpasan/"
            },
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
    }


    function setupKazakhstanCarousel() {
        let currentPhotoIndex = 0;
        const kazakhstanPhotos = [
            'kzstuff/kzp1.jpg'
        ];
        
        const carousel = document.querySelector('#kazakhstan-page .photo-carousel');
        
        if (kazakhstanPhotos.length === 0) {
            const placeholder = document.createElement('div');
            placeholder.style.textAlign = 'center';
            placeholder.style.padding = '2rem';
            placeholder.style.color = '#ff9955';
            placeholder.innerHTML = 'Photos from the event will be added here soon!';
            carousel.appendChild(placeholder);
            return;
        }
        
        kazakhstanPhotos.forEach(photo => {
            const img = document.createElement('img');
            img.src = photo;
            carousel.appendChild(img);
        });
    
        if (carousel.firstElementChild) {
            carousel.firstElementChild.classList.add('active');
        }
        
        setInterval(() => {
            const images = carousel.querySelectorAll('img');
            if (images.length > 0) {
                images[currentPhotoIndex].classList.remove('active');
                currentPhotoIndex = (currentPhotoIndex + 1) % images.length;
                images[currentPhotoIndex].classList.add('active');
            }
        }, 2300);
    }

    // call all functions
    setupPhotoCarousel();
    setupSailingCarousel();
    resumeSetup();
    projectsSetup();
    setupKazakhstanCarousel();
});