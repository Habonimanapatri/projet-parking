import { City } from '../models/City';
import { Parking } from '../models/Parking';
import {type GPS } from '../models/types';

const aixProvenceGPS: GPS = { latitude: 43.533329, longitude: 5.43333 };
const laSpeziaGPS: GPS = { latitude: 44.238366, longitude: 9.6912326 };
const aachenGPS: GPS = { latitude: 50.776351, longitude: 6.083862 };
const lagunaGPS: GPS = { latitude: 28.487180709838867, longitude: -16.313879013061523 };
const newcastleGPS: GPS = { latitude: 54.9738474, longitude: -1.6131572 };

export const cities = [
    new City(1, 'Aix-en-Provence', 'France', aixProvenceGPS, [1]),
    new City(2, 'La Spezia', 'Italy', laSpeziaGPS, [2, 3]),
    new City(3, 'Aachen', 'Germany', aachenGPS, [4]),
    new City(4, 'San Cristóbal de La Laguna', 'Spain', lagunaGPS, [5]),
    new City(5, 'Newcastle upon Tyne', 'UK', newcastleGPS, [6, 7])
];

export const parkings = [
    new Parking(1, 'A', 1, aixProvenceGPS, 100, 4.5),
    new Parking(2, 'B', 2, laSpeziaGPS, 50, 3),
    new Parking(3, 'C', 2, laSpeziaGPS, 80, 2.5),
    new Parking(4, 'D', 3, aachenGPS, 40, 2.8),
    new Parking(5, 'E', 4, lagunaGPS, 70, 3.1),
    new Parking(6, 'F', 5, newcastleGPS, 60, 2.4),
    new Parking(7, 'G', 5, newcastleGPS, 90, 3.2)
];