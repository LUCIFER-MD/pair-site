// Initialising the canvas
var canvas = document.querySelector('#matrix-canvas'),
    ctx = canvas.getContext('2d');

// Setting the width and height of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Setting up the letters
var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
letters = letters.split('');

// Setting up the columns
var fontSize = 10,
    columns = canvas.width / fontSize;

// Setting up the drops
var drops = [];
for (var i = 0; i < columns; i++) {
    drops[i] = 1;
}

// Setting up the draw function
function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, .1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < drops.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = '#ff0000';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
            drops[i] = 0;
        }
    }
}

// Loop the animation
setInterval(draw, 33);

// Access button event listener
document.getElementById('access-button').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default link behavior

    // Show loading screen
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.remove('hidden');

    // Simulate loading time (for demonstration purposes)
    setTimeout(() => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'DCMTM' && password === 'DCMTM') { // Example credentials
            document.getElementById('success-sound').play(); // Play success sound
            setTimeout(() => {
                window.location.href = 'https://dark-cyber-matrix-team.pages.dev/'; // Redirect on success
            }, 4000); // 4 seconds delay
        } else {
            document.getElementById('incorrect-sound').play(); // Play incorrect password sound
            document.getElementById('error-message').style.display = 'block'; // Show error message
        }

        // Hide loading screen after processing
        loadingScreen.classList.add('hidden');
    }, 2000); // Simulate a 2-second loading time
});
