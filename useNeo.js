import setPixels from "./neo.js";
import Color from "color";

let hue = 0;
setInterval(() => {
  // console.log({ hue });
  const {
    color: [r, g, b],
  } = Color(`hsl(${hue}, 100%, 50%)`).rgb();
  const {
    color: [r2, g2, b2],
  } = Color(`hsl(${hue + 100}, 100%, 50%)`).rgb();

  setPixels({ r, g, b }, { r: r2, g: g2, b: b2 });
  hue++;
}, 60);

process.on("SIGINT", function () {
  console.log({ hue });
  process.nextTick(function () {
    process.exit(0);
  });
});
