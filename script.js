document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const proposalCard = document.getElementById('proposalCard');
    const successMessage = document.getElementById('successMessage');
    const musicPrompt = document.getElementById('musicPrompt');
    const playMusicBtn = document.getElementById('playMusicBtn');
    const skipMusicBtn = document.getElementById('skipMusicBtn');
    const audio = document.getElementById('loveSong');

    let noCount = 0;
    const maxYesSize = 90; 

    const noMessages = [
        "Ha krdo na ❤️",
        "Soch lo 🥺",
        "Firse soch lo 😢",
        "Pakka naa? 🥲",
        "Ache se soch le 🥲",
        "Chand k tukde ha krde 💗",
        "Ek baar aur soch lo! 😖",
        "Mere jaisa ni milega koi ",
        "1 Min wait kr fir soch 🙂",
        "Sach m mana kar rhi ho? 😭"
    ];

    function startTypingEffect() {
        typeText("typingText", "Will you be my Valentine?");
    }

    playMusicBtn.addEventListener('click', () => {
        audio.play();
        musicPrompt.style.display = 'none';
        startTypingEffect(); // Start typing after music choice
    });

    skipMusicBtn.addEventListener('click', () => {
        musicPrompt.style.display = 'none';
        startTypingEffect(); // Start typing even if skipped
    });

    yesButton.addEventListener('click', () => {
        proposalCard.style.display = 'none';
        successMessage.style.display = 'block';
        typeText("successText", "Yaaay! I love you the square of infinity! ❤️", () => {
            document.querySelector(".fade-text").style.opacity = "1";
        });
    });

    noButton.addEventListener('click', () => {
        noCount++;

        noButton.innerText = noMessages[Math.min(noCount, noMessages.length - 1)];

        const newYesSize = Math.min(100 + (noCount * 20), maxYesSize);
        yesButton.style.fontSize = `${newYesSize}%`;
        yesButton.style.padding = `${0.5 + (noCount * 0.2)}rem ${1 + (noCount * 0.2)}rem`;

        const newNoSize = Math.max(100 - (noCount * 10), 20);
        noButton.style.fontSize = `${newNoSize}%`;
        noButton.style.padding = `${Math.max(0.5 - (noCount * 0.05), 0.3)}rem ${Math.max(1 - (noCount * 0.1), 0.5)}rem`;

        const maxX = window.innerWidth - noButton.offsetWidth;
        const maxY = window.innerHeight - noButton.offsetHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noButton.style.position = 'fixed';
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });

    function typeText(elementId, text, callback) {
        const element = document.getElementById(elementId);
        let index = 0;
        element.innerHTML = "";

        function typeNext() {
            if (index < text.length) {
                element.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeNext, 70);
            } else if (callback) {
                setTimeout(callback, 500);
            }
        }
        
        typeNext();
    }
});

// Balloon effect
document.addEventListener('DOMContentLoaded', () => {
    const balloonContainer = document.getElementById('balloon-container');
    const balloonTypes = ['🎈', '❤️']; 

    function createBalloon() {
        for (let i = 0; i < 3; i++) { 
            const balloon = document.createElement('div');
            balloon.classList.add('balloon');
            balloon.innerText = balloonTypes[Math.floor(Math.random() * balloonTypes.length)];
            balloon.style.left = Math.random() * 100 + "vw";
            balloon.style.animationDuration = (Math.random() * 3 + 2) + "s";
            balloon.style.fontSize = Math.random() * 25 + 20 + "px";

            balloonContainer.appendChild(balloon);

            setTimeout(() => {
                balloon.remove();
            }, 5000);
        }
    }

    setInterval(createBalloon, 100); 
});
