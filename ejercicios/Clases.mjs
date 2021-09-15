const videoPlay = (id) => {
  const urlSecreta = "https://platziclon.com/" + id
  console.log("Se esta reproduciendo desde la url" + urlSecreta);
}

const videoStop = (id) => {
  const urlSecreta = "https://platziclon.com/" + id
  console.log("Se ha pausado la clase de la url" + urlSecreta);
}

export class PlatziClass {
  constructor({
    name,
    videoID
  }){
    this.name = name;
    this.videoID = videoID;
  }

  reproducir() {
    videoPlay(this.videoID)
  }

  pausar() {
    videoStop(this.videoID)
  }

}