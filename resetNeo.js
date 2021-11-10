import ws281x from "@gbkwiatt/node-rpi-ws281x-native";

const NUM_LEDS = 144;

const resetPixels = () => {
  const channel = ws281x(NUM_LEDS, { stripType: "ws2812" });

  ws281x.reset();
  ws281x.finalize();
};
resetPixels();
