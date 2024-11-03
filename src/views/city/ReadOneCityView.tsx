import { City } from '../../models/City';
import { Parking } from '../../models/Parking';
import { Layout } from '../shared/Layout';  // Template commun

export const ReadOneCityView = (city: City, parkings: Parking[]) => (
  Layout({
    pageTitle: city.name,
    children: `
      <h1>${city.name}, ${city.country}</h1>
      <p>Location: (${city.location.latitude}, ${city.location.longitude})</p>
      <h2>Parkings in ${city.name}</h2>
      <ul>
        ${parkings.map(parking => `<li>${parking.name} - ${parking.numberOfSpots} spots - ${parking.hourlyRate}€/hour</li>`).join('')}
      </ul>
    `
  })
);