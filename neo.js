import ws281x from "@gbkwiatt/node-rpi-ws281x-native";
import Colour from "color";

import rgb2Int from "./utils/rgb2int.js";
// import colorwheel from "./utils/colorwheel";

const NUM_LEDS = 144;
const SPEED = 10;

// ---- trap the SIGINT and reset before exit
process.on("SIGINT", function () {
  ws281x.reset();
  process.nextTick(function () {
    process.exit(0);
  });
});

const setPixels = (r = 255, g = 0, b = 0) => {
  const channel = ws281x(NUM_LEDS, { stripType: "ws2812" });
  const pixelData = channel.array;
  // ---- animation-loop
  // var offset = 0;
  for (var i = 0; i < NUM_LEDS; i++) {
    // pixelData[i] = colorwheel((offset + i) % 256);
    pixelData[i] = i % 3 ? rgb2Int(r, g, b) : 0x000000;
  }
  ws281x.render(pixelData);
  //   offset = (offset + 1) % 256;
};

setPixels(255, 0, 200);

console.log("Press <ctrl>+C to exit.");
