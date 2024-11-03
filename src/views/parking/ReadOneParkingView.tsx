import { Parking } from '../../models/Parking';
import { Layout } from '../shared/Layout';  // Template commun

export const ReadOneParkingView = (parking: Parking) => (
  Layout({
    pageTitle: parking.name,
    children: `
      <h1>${parking.name}</h1>
      <p>Number of spots: ${parking.numberOfSpots}</p>
      <p>Hourly Rate: ${parking.hourlyRate}€/hour</p>
      <p>Opened: ${parking.opened ? 'Yes' : 'No'}</p>
      <p>Location: (${parking.location.latitude}, ${parking.location.longitude})</p>
    `
  })
);