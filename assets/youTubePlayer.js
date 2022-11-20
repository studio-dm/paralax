function callVideo(videoID){
    const playerTemplate = `
    <iframe width="${screen.width}" height="${screen.height}" src="https://www.youtube.com/embed/?autoplay=1&controls=0&playlist=${videoID}&color=white"
       frameborder="0" allowfullscreen></iframe>
    `;
    //const playerTemplate = `
    //<img src="assets/PlayStation-Emblem.png" width="500">
   // `;
    document.getElementById("vid1").insertAdjacentHTML("beforeend", playerTemplate);
}
const playList = "'3JFcRRftxzM','evN6DIGPIJM','mCHUw7ACS8o', 'NAOKzvL8dgk'"
//Array for single play randomly
const musicVideo = ["Iss9xKyqAeA", "syIUmrSJWAU", "u8pVZ5hTGJQ", "4aeETEoNfOg", "LCdltGg4EzM", "evN6DIGPIJM", "3JFcRRftxzM"];
const random = Math.floor(Math.random() * musicVideo.length);
//callVideo(musicVideo[random]);
callVideo(playList);

var i = 0;
var txt = 'Lorem ipsum dummy text blabla Lorem ipsum dummy text blabla Lorem ipsum dummy text blabla Lorem ipsum dummy text blabla.';
var howFast = 50;

function typeWriter() {

  if (i < txt.length) {
    document.getElementById("message").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, howFast);
    document.getElementById("message").style.display = "block"; 
  
}else{
  
  
  window.scrollTo(0, 0);
}
  
}
