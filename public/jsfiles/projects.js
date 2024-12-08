export function initProjects() {
    const projectModal = document.querySelector('.project-modal');
    const projectModalContent = document.querySelector('.project-modal-content');
    const closeProjectModal = document.querySelector('.close-project-modal');


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

        const proj8Desc = `
            I developed a data analysis project examining Russia's rule of law trends 
            using World Justice Project (WJP) data. Using Python, Plotly, and scikit-learn, 
            I built interactive dashboards and predictive models to analyze eight key factors, 
            including government constraints, corruption levels, and civil justice metrics. 
            The visualization system displays historical patterns while a machine learning 
            component forecasts future trends, complete with confidence scores for each prediction. 
            This project was created as part of my AP Comparative Government coursework, 
            combining data science techniques with political analysis to understand 
            governance patterns in the Russian Federation.`


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
            title: "Analyzing the Rule of Law in Russia since 2015",
            description: proj8Desc,
            image: "projectstuff/russiapaperPredictions.png",
            pdf: "https://github.com/seanozalpasan/apgovrussiaproj"
        },
        9: {
            title: "More coming soon...",
            description: "More coming soon!",
            image: "",
            pdf: "https://github.com/seanozalpasan/"
        }
    };

    document.querySelectorAll('.project').forEach(project => {
        project.addEventListener('click', () => {
            const projectId = project.dataset.project;
            const projectInfo = projectData[projectId];

            projectModalContent.querySelector('h3').textContent = projectInfo.title;
            projectModalContent.querySelector('.project-description').textContent = projectInfo.description;

            const modalImage = projectModalContent.querySelector('.project-image');
            modalImage.src = projectInfo.image;
            modalImage.style.cursor = 'pointer';

            modalImage.onclick = () => {
                window.open(projectInfo.pdf, '_blank');
            };

            projectModal.style.display = 'block';
        });
    });

    closeProjectModal.addEventListener('click', () => {
        projectModal.style.display = 'none';
    });

    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            projectModal.style.display = 'none';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectModal.style.display === 'block') {
            projectModal.style.display = 'none';
        }
    });
}