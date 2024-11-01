class Amplifier {
  turnOn() {
    console.log("Amplifier is turn on");
  }

  setVolume(level: number) {
    console.log(`Volumn is set to ${level}`);
  }
}

class DvdPlayer {
  turnOn() {
    console.log("DvdPlayer is turned on");
  }

  play(movie: string) {
    console.log(`Playing ${movie}`);
  }
}

class Projector {
  turnOn() {
    console.log("Projector is turned on");
  }

  setInput(dvdPlayer: DvdPlayer) {
    console.log("Projector input set to DvdPlayer");
  }
}

class Lights {
  dim(level: number) {
    console.log(`Lights are dimmed to ${level}`);
  }
}

class HomeTheater {
  constructor(
    private amplifier: Amplifier,
    private dvdPlayer: DvdPlayer,
    private projector: Projector,
    private lights: Lights,
  ) {}

  watchMovie(movie: string, volume: number, level: number) {
    console.log(`Get ready to watch ${movie}`);
    this.lights.dim(level);
    this.amplifier.turnOn();
    this.amplifier.setVolume(volume);
    this.dvdPlayer.turnOn();
    this.projector.setInput(this.dvdPlayer);
    this.dvdPlayer.play(movie);
  }
}

const amplifier = new Amplifier();
const dvdPlayer = new DvdPlayer();
const projector = new Projector();
const lights = new Lights();

let homeTheater = new HomeTheater(amplifier, dvdPlayer, projector, lights);

homeTheater.watchMovie("Inception", 5, 9);
