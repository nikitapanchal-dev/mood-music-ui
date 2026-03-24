const songs = {
    happy: ["Tor", "Dhai Litar Dudh", "Three Sixty", "Boom Boom", "Seet Lehar", "To The Moon", "Sira"],

    sad: ["Voices", "Dil Di Dua", "Surma", "Pyaar Ae", "Gods Art", "Mere Kol", "By My Side"],

    chill: ["Giddha Anthem", "Nachdi", "Sirra", "Queen", "Vass Chal Da", "Jaan Jaan", "Ik Tara"]
}

let happyBtn = document.querySelector("#happy")
let sadBtn = document.querySelector("#sad")
let chillBtn = document.querySelector("#chill")
let musicList = document.querySelector(".list")
let nowPlaying = document.querySelector(".now-playing")

let buttons = [happyBtn, sadBtn, chillBtn]
happyBtn.addEventListener("click", function () {
    removeActive()
    happyBtn.classList.add("active")
    showSongs("happy")
})

sadBtn.addEventListener("click", function () {
    removeActive()
    sadBtn.classList.add("active")
    showSongs("sad")
})

chillBtn.addEventListener("click", function () {
    removeActive()
    chillBtn.classList.add("active")
    showSongs("chill")
})

function showSongs(mood) {
    let colors = {
        happy: "#f5276c86",
        sad: "#276cf598",
        chill: "#7712c998"
    }
    document.body.style.backgroundColor = colors[mood]

    musicList.innerHTML = ""

    // Get songs from object
    let moodSongs = songs[mood]

    // loop songs
    moodSongs.forEach(function (e) {
        let list = document.createElement("li")
        list.addEventListener("click", function () {
            nowPlaying.innerText = "Playing: " + e
        })
        // Adding Text
        list.innerText = e

        // Song shows on screen
        musicList.appendChild(list)
    })
}
// show default message when page load
musicList.innerHTML = "<li>Select a mood to see songs</li>"

function removeActive() {
    buttons.forEach(function (btn) {
        btn.classList.remove("active")
    })
}