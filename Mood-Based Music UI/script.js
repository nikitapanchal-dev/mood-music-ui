const songs = {
    happy: ["Tor", "Dhai Litar Dudh", "Three Sixty", "Boom Boom", "Seet Lehar", "To The Moon", "Sira"],
    sad: ["Voices", "Dil Di Dua", "Surma", "Pyaar Ae", "Gods Art", "Mere Kol", "By My Side"],
    chill: ["Giddha Anthem", "Nachdi", "Sirra", "Queen", "Vass Chal Da", "Jaan Jaan", "Ik Tara"]
};

const buttons = document.querySelectorAll(".mood-btn button");
const musicList = document.querySelector(".list");
const nowPlaying = document.querySelector(".now-playing");

// Show songs function
function showSongs(mood) {

    const colors = {
        happy: "#f5276c86",
        sad: "#276cf598",
        chill: "#7712c998"
    };

    document.body.style.backgroundColor = colors[mood];

    musicList.innerHTML = "";

    songs[mood].forEach(function (song) {
        const li = document.createElement("li");

        li.innerText = song;

        li.addEventListener("click", function () {
            nowPlaying.innerText = "Playing: " + song;
        });

        musicList.appendChild(li);
    });
}

// Remove active class
function removeActive() {
    buttons.forEach(function (btn) {
        btn.classList.remove("active");
    });
}

// Button click handling
buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        removeActive();
        btn.classList.add("active");
        showSongs(btn.id);
    });
});

// Default state on load
showSongs("happy");
document.querySelector("#happy").classList.add("active");
