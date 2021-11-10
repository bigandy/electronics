import sensorLib from "node-dht-sensor";
const {promises: sensor} = sensorLib;
// var sensor = require("node-dht-sensor").promises;

async function getSensorValues() {
  try {
    const { temperature, humidity } = await sensor.read(22, 26);
    console.log(
      `temperature: ${temperature.toFixed(1)}°C, ` +
        `humidity: ${humidity.toFixed(1)}%`
    );

    return {
      temperature,
      humidity,
    };
  } catch (e) {
    // console.error("Failed to read sensor data:", err);
    throw new Error(e);
  }
}
// getSensorValues();

export default getSensorValues;
