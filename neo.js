import ws281x from "@gbkwiatt/node-rpi-ws281x-native";
import Color from "color";

import rgb2Int from "./utils/rgb2int.js";
import colorwheel from "./utils/colorwheel.js";

const NUM_LEDS = 144;

// ---- trap the SIGINT and reset before exit
process.on("SIGINT", function () {
  ws281x.reset();

  ws281x.finalize();
  process.nextTick(function () {
    process.exit(0);
  });
});

const channel = ws281x(NUM_LEDS, { stripType: "ws2812" });

const setPixels = (color1, color2 = null) => {
  const { r, g, b } = color1;
  const mainColor = rgb2Int(r, g, b);

  let fallbackColor = 0x000000;
  if (color2) {
    const { r: r2, g: g2, b: b2 } = color2;
    fallbackColor = rgb2Int(r2, g2, b2);
  }

  const pixelData = channel.array;
  var offset = 0;
  for (var i = 0; i < NUM_LEDS; i++) {
    // pixelData[i] = colorwheel((offset + i) % 256);
    pixelData[i] = i % 2 === 0 ? mainColor : fallbackColor;
  }
  ws281x.render(pixelData);
  offset = (offset + 1) % 256;
};

console.log("Press <ctrl>+C to exit.");

export default setPixels;
