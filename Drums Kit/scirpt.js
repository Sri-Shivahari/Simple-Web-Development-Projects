const kits = ["crash", "kick", "snare", "tom"];

const containerEl = document.querySelector(".container");

kits.forEach(kit => {
    const btnEl = document.createElement("button");
    btnEl.classList.add("btn");
    btnEl.innerText = kit;
    btnEl.style.backgroundImage = `url(images/${kit}.png)`;

    const audioEl = document.createElement("audio");
    audioEl.src = `sounds/${kit}.mp3`;
    
    // Play sound on button click
    btnEl.addEventListener("click", () => {
        audioEl.play();
    });

    containerEl.appendChild(btnEl);
    containerEl.appendChild(audioEl);
});
