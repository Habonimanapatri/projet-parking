import { Parking } from '../../models/Parking';
import { Layout } from '../shared/Layout';  // Template commun

export const ReadAllParkingsView = (parkings: Parking[]) => (
  Layout({
    pageTitle: 'All Parkings',
    children: `
      <h1>All Parkings</h1>
      <ul>
        ${parkings.map(parking => `<li><a href="/parkings/${parking.id}">${parking.name}</a> - ${parking.numberOfSpots} spots</li>`).join('')}
      </ul>
    `
  })
);