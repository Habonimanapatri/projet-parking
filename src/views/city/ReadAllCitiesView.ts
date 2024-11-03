import { City } from '../../models/City';

export const ReadAllCitiesView = (cities: City[]) => {
  return `
    <ul>
      ${cities.map(city => `<li>${city.name}</li>`).join('')}
    </ul>
  `;
};