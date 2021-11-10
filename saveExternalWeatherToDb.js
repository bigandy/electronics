import fetch from "node-fetch";
import getSensorValues from "./sensor.js";

const saveExternalWeatherToDb = async () => {
  // get sensor values
  const { temperature, humidity } = await fetch(
    `http://raspberrypi.local/api/weather/get-weather`
  )
    .then((res) => res.json())
    .then(({ result }) => result);

  //   console.log({ temperature, humidity });
  //   Save the values to the DB
  await fetch(
    `http://raspberrypi.local/api/db/write?temperature=${temperature}&humidity=${humidity}&type=outside`
  );

  //	console.log('success');
};
// saveExternalWeatherToDb();

export default saveExternalWeatherToDb;
