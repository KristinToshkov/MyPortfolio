function setAnimationFlag() {
    sessionStorage.setItem('animationFlag', 'true');
  }

function revealProjects() {
    // Add reveal class to all project items
    document.querySelectorAll('.project-item').forEach(function(item) {
        item.classList.add('reveal');
    });
    document.querySelectorAll('.projects-button').forEach(function(item) {
        item.classList.remove('reveal-button');
        item.classList.add('reveal-out');
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    const projectItem = document.querySelector('.galactica-box');
    const hoverAudio = document.getElementById('galactica-sound');
    
    let fadeInterval;

    // Function to fade in audio
    function fadeIn(audio, maxVolume, duration) {
        clearInterval(fadeInterval);
        let volume = 0;
        audio.volume = volume;
        audio.play();

        const fadeStep = maxVolume / (duration / 50); // adjust 50 to control the speed of fading
        fadeInterval = setInterval(() => {
            if (volume < maxVolume) {
                volume += fadeStep;
                audio.volume = Math.min(volume, maxVolume);
            } else {
                clearInterval(fadeInterval);
            }
        }, 50);
    }

    // Function to fade out audio
    function fadeOut(audio, duration) {
        clearInterval(fadeInterval);
        let volume = audio.volume;
        
        const fadeStep = volume / (duration / 50); // adjust 50 to control the speed of fading
        fadeInterval = setInterval(() => {
            if (volume > 0) {
                volume -= fadeStep;
                audio.volume = Math.max(volume, 0);
            } else {
                audio.pause();
                clearInterval(fadeInterval);
            }
        }, 50);
    }

    projectItem.addEventListener('mouseenter', () => {
        fadeIn(hoverAudio, 0.01, 1000); // Set to fade in to 20% volume over 1 second
    });

    projectItem.addEventListener('mouseleave', () => {
        fadeOut(hoverAudio, 1000); // Set to fade out over 1 second
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
  const projectItem = document.querySelector('.pysilon-box');
  const hoverAudio = document.getElementById('pysilon-sound');
  
  let fadeInterval;

  // Function to fade in audio
  function fadeIn(audio, maxVolume, duration) {
      clearInterval(fadeInterval);
      let volume = 0;
      audio.volume = volume;
      audio.play();

      const fadeStep = maxVolume / (duration / 50); // adjust 50 to control the speed of fading
      fadeInterval = setInterval(() => {
          if (volume < maxVolume) {
              volume += fadeStep;
              audio.volume = Math.min(volume, maxVolume);
          } else {
              clearInterval(fadeInterval);
          }
      }, 50);
  }

  // Function to fade out audio
  function fadeOut(audio, duration) {
      clearInterval(fadeInterval);
      let volume = audio.volume;
      
      const fadeStep = volume / (duration / 50); // adjust 50 to control the speed of fading
      fadeInterval = setInterval(() => {
          if (volume > 0) {
              volume -= fadeStep;
              audio.volume = Math.max(volume, 0);
          } else {
              audio.pause();
              clearInterval(fadeInterval);
          }
      }, 50);
  }

  projectItem.addEventListener('mouseenter', () => {
      fadeIn(hoverAudio, 0.03, 1000); // Set to fade in to 20% volume over 1 second
  });

  projectItem.addEventListener('mouseleave', () => {
      fadeOut(hoverAudio, 1000); // Set to fade out over 1 second
  });
});
  

document.addEventListener('DOMContentLoaded', (event) => {
  const projectItem = document.querySelector('.movie-box');
  const hoverAudio = document.getElementById('movie-sound');
  
  let fadeInterval;

  // Function to fade in audio
  function fadeIn(audio, maxVolume, duration) {
      clearInterval(fadeInterval);
      let volume = 0;
      audio.volume = volume;
      audio.play();

      const fadeStep = maxVolume / (duration / 50); // adjust 50 to control the speed of fading
      fadeInterval = setInterval(() => {
          if (volume < maxVolume) {
              volume += fadeStep;
              audio.volume = Math.min(volume, maxVolume);
          } else {
              clearInterval(fadeInterval);
          }
      }, 50);
  }

  // Function to fade out audio
  function fadeOut(audio, duration) {
      clearInterval(fadeInterval);
      let volume = audio.volume;
      
      const fadeStep = volume / (duration / 50); // adjust 50 to control the speed of fading
      fadeInterval = setInterval(() => {
          if (volume > 0) {
              volume -= fadeStep;
              audio.volume = Math.max(volume, 0);
          } else {
              audio.pause();
              clearInterval(fadeInterval);
          }
      }, 50);
  }

  projectItem.addEventListener('mouseenter', () => {
      fadeIn(hoverAudio, 0.05, 1000); // Set to fade in to 20% volume over 1 second
  });

  projectItem.addEventListener('mouseleave', () => {
      fadeOut(hoverAudio, 1000); // Set to fade out over 1 second
  });
});

document.addEventListener('DOMContentLoaded', (event) => {
  const projectItem = document.querySelector('.arg-box');
  const hoverAudio = document.getElementById('arg-sound');
  
  let fadeInterval;

  // Function to fade in audio
  function fadeIn(audio, maxVolume, duration) {
      clearInterval(fadeInterval);
      let volume = 0;
      audio.volume = volume;
      audio.play();

      const fadeStep = maxVolume / (duration / 50); // adjust 50 to control the speed of fading
      fadeInterval = setInterval(() => {
          if (volume < maxVolume) {
              volume += fadeStep;
              audio.volume = Math.min(volume, maxVolume);
          } else {
              clearInterval(fadeInterval);
          }
      }, 50);
  }

  // Function to fade out audio
  function fadeOut(audio, duration) {
      clearInterval(fadeInterval);
      let volume = audio.volume;
      
      const fadeStep = volume / (duration / 50); // adjust 50 to control the speed of fading
      fadeInterval = setInterval(() => {
          if (volume > 0) {
              volume -= fadeStep;
              audio.volume = Math.max(volume, 0);
          } else {
              audio.pause();
              clearInterval(fadeInterval);
          }
      }, 50);
  }

  projectItem.addEventListener('mouseenter', () => {
      fadeIn(hoverAudio, 0.01, 1000); // Set to fade in to 20% volume over 1 second
  });

  projectItem.addEventListener('mouseleave', () => {
      fadeOut(hoverAudio, 1000); // Set to fade out over 1 second
  });
});

var isCooldown = false;

document.getElementById('discord-box').addEventListener('click', function() {
    // If the function is on cooldown, return early
    if (isCooldown) return;

    // Set the cooldown flag to true
    isCooldown = true;

    // Use the Clipboard API to copy text to the clipboard
    navigator.clipboard.writeText('termito0').then(function() {
        // Show custom alert
        var customAlert = document.getElementById('custom-alert');
        customAlert.classList.add('reveal-custom-alert');

        // Remove the class after animation completes
        setTimeout(function() {
            customAlert.classList.remove('reveal-custom-alert');
        }, 3000); // Match this duration with the animation duration in CSS

        // Reset the cooldown after a few seconds
        setTimeout(function() {
            isCooldown = false;
        }, 3000); // 5000 milliseconds cooldown period
    }).catch(function(error) {
        console.error('Error copying text: ', error);

        // Reset the cooldown flag on error to allow subsequent attempts
        isCooldown = false;
    });
});

