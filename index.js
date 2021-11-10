const five = require("johnny-five");
const Raspi = require("raspi-io").RaspiIO;
const board = new five.Board({
  io: new Raspi(),
});

const fetch = require("node-fetch");

const URL_BASE = "http://raspberrypi.local";

board.on("ready", function () {
  const button1 = new five.Button("P1-7");
  const button2 = new five.Button("P1-16");

  const buttonA = new five.Button("P1-18");
  const buttonB = new five.Button("P1-22");
  const buttonC = new five.Button("P1-24");

  button1.on("press", async () => {
    try {
      // console.log("button1 pressed, toggling bedroom light(s)");
      await fetch(`${URL_BASE}/api/hue/toggle-room?room=bedroom`);
    } catch (error) {
      console.error(error);
    }
  });

  button2.on("press", async () => {
    try {
      // console.log("button2 pressed, toggling bedroom music");

      await fetch(`${URL_BASE}/api/sonos/toggle-room?room=bedroom`);
    } catch (error) {
      console.error(error);
    }
  });

  buttonA.on("press", async () => {
    try {
      console.log("buttonA pressed, 6 Music please");

      // 6MUSIC
      await fetch(
        `${URL_BASE}/api/sonos/play-favorite?favorite={%22title%22:%22BBC%20Radio%206%20Music%22,%22type%22:%22tunein%22,%22id%22:%22s44491%22}&room=bedroom`
      );
    } catch (error) {
      console.error(error);
    }
  });

  buttonB.on("press", async () => {
    try {
      console.log("buttonB pressed, FIP please");

      // 6MUSIC
      await fetch(
        `${URL_BASE}/api/sonos/play-favorite?favorite={%22title%22:%22FIP%22,%22type%22:%22mp3%22,%22url%22:%22x-rincon-mp3radio://https://t.co/kTOkwoC9lp?amp=1%22}&room=bedroom`
      );
    } catch (error) {
      console.error(error);
    }
  });

  buttonC.on("press", async () => {
    try {
      // console.log("buttonC pressed, Sonar Kollektiv please");

      // Sonar Kollektiv
      await fetch(
        `${URL_BASE}/api/sonos/play-favorite?favorite={%22title%22:%22Sonar%20Kollektiv%204%22,%22id%22:%22album:5nmkaypcnZ8Wjnos9zUgRz%22,%22type%22:%22spotify%22}&room=bedroom`
      );
    } catch (error) {
      console.error(error);
    }
  });
});
