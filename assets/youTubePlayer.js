function callVideo(videoID){
    const playerTemplate = `
    <iframe width="280" height="158" src="https://www.youtube.com/embed/?autoplay=1&controls=0&playlist=${videoID}&color=white"
        frameborder="0" allowfullscreen></iframe>
    `;
    document.getElementById("vid1").insertAdjacentHTML("beforeend", playerTemplate);
}

const musicVideo = ["Iss9xKyqAeA", "syIUmrSJWAU", "u8pVZ5hTGJQ", "4aeETEoNfOg", "LCdltGg4EzM", "dVM8_jAL86w"];
const random = Math.floor(Math.random() * musicVideo.length);
callVideo(musicVideo[random]);
