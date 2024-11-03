import { City } from '../../models/City';
import { Layout } from '../shared/Layout';  // Template commun

type ReadAllCitiesViewProps = {
  cities: City[];
};

export const ReadAllCitiesView = ({ cities }: ReadAllCitiesViewProps) => (
    <Layout pageTitle="All Cities">
      <ul>
        {cities.map((city) => (
          <li key={city.id}>
            <a href={`/cities/${city.slug}`}>{city.name}</a>
          </li>
        ))}
      </ul>
    </Layout>
  );
  