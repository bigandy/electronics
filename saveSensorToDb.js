import fetch from "node-fetch";
import getSensorValues from './sensor.js';


const saveSensorToDb = async () => {

	// get sensor values
	const values = await getSensorValues();
	const { temperature, humidity } = values;
	// Save the values to the DB
	await fetch(`http://raspberrypi.local/api/db/write?temperature=${temperature}&humidity=${humidity}&type=inside`);

//	console.log('success');
};
//saveSensorToDb();

export default saveSensorToDb;
