function calculateAge() {
    // Set the start date and time
    const startDate = new Date('October 1, 2006 16:00:00'); // 4:00 PM in 24-hour format
    const now = new Date();
    const ageInMilliseconds = now - startDate;

    // Calculate years, days, hours, minutes, and seconds
    const years = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)); // Considering leap years
    const days = Math.floor((ageInMilliseconds % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ageInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ageInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ageInMilliseconds % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById('age').innerText = `I am ${years} years, ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds old`;
}

// Update the age every second
setInterval(calculateAge, 1000);
