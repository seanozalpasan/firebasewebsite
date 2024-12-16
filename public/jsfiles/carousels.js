export function initCarousels() {
    setupPhotoCarousel();
    setupSailingCarousel();
    setupKazakhstanCarousel();
}

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
        img.loading = "lazy";
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
        img.loading = "lazy";
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
        if (modal.style.display === 'block') {
            if (e.key === 'ArrowLeft') {
                currentImageIndex = (currentImageIndex - 1 + sailingPhotos.length) % sailingPhotos.length;
                modalImg.src = sailingPhotos[currentImageIndex];
            } else if (e.key === 'ArrowRight') {
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

function setupKazakhstanCarousel() {
    let currentPhotoIndex = 0;
    const kazakhstanPhotos = [
        'kzstuff/kzp1.jpg',
        'kzstuff/speech.jpg',
        'kzstuff/horse2.JPG',
        'kzstuff/alfarabi.JPG',
        'kzstuff/bazaar.JPG',
        'kzstuff/bestgroup.JPG',
        'kzstuff/birthday.JPG',
        'kzstuff/camel.JPG',
        'kzstuff/camii.JPG',
        'kzstuff/cansen.JPG',
        'kzstuff/googlemaps.PNG',
        'kzstuff/grapes.JPG',
        'kzstuff/groupPhoto.JPG',
        'kzstuff/hawk.jpg',
        'kzstuff/heykel.JPG',
        'kzstuff/horse.JPG',
        'kzstuff/madagascar.JPG',
        'kzstuff/nature.JPG',
        'kzstuff/shakshuka.JPG',
        'kzstuff/snowgroup.JPG',
        'kzstuff/turkistan.JPG',
        'kzstuff/vekil.JPG',
        'kzstuff/withtheguard.JPG'
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