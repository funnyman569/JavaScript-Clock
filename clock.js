function updateClock() {
    //Allow the clock to rotate
    const now = new Date();

    //gets values from OS
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    //Converts values in to percentages
    let secondsPercentage = seconds / 60;
    let hoursPercentage = hours % 12;
    let minutesPercentage = minutes / 60;

    //Takes percentages and converts them to a value relevant to a cirlce (within 360 degrees)
    let minutesDegree = minutes * 6; // 360 degrees / 60 minutes
    let hoursDegree = (hoursPercentage + minutesPercentage) * 30; // 360 degrees / 12 hours
    let secondsDegree = (secondsPercentage * 360); // 360 degrees / 60 seconds

    // Update hand rotations
    document.querySelector('.hourHand').style.transform = `translate(-50%, -100%) rotate(${hoursDegree}deg)`;
    document.querySelector('.minuteHand').style.transform = `translate(-50%, -100%) rotate(${minutesDegree}deg)`;
    document.querySelector('.secondHand').style.transform = `translate(-50%, -100%) rotate(${secondsDegree}deg)`;
}

//Updates the clock every 500 miliseconds
setInterval(updateClock, 500);

//initialization of function
updateClock();


  


