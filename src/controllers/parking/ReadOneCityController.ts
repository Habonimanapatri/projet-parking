/* import { Context } from 'hono';
import { cities, parkings } from '../../data/staticDatabase';  // Importer les villes et parkings depuis la base statique
import { City } from '../../models/City';
import { ReadOneCityView } from '../../views/city/ReadOneCityView';  // Importer la vue pour afficher les détails d'une ville

export const ReadOneCityController = (c: Context) => {
  // Extraire le slug des paramètres de l'URL
  const { slug } = c.req.param();

  // Rechercher la ville correspondant au slug
  const city = cities.find((city: City) => city.slug === slug);

  // Si la ville est trouvée, générer la vue avec ses détails
  if (city) {
   
    const cityParkings = parkings.filter(parking => parking.city_id === city.id);

    // Générer la vue en utilisant la ville et ses parkings
    const html = ReadOneCityView(city, cityParkings);
    return c.html(html);
  }

  // Si la ville n'est pas trouvée, retourner une erreur 404
  return c.notFound();
}; */


import { Context } from 'hono';
import db from '../../db/sqlite';
import { City } from '../../models/City';
import { ReadOneCityView } from '../../views/city/ReadOneCityView';


export const ReadOneCityController = async (c: Context) => {
  const { slug } = c.req.param();

  try {
    // Récupérer la ville en fonction du slug
    const query = await db.query('SELECT * FROM cities WHERE slug = ?').as(City);

    const city = query.get(slug)

    if (city) {
      const html = ReadOneCityView(city,[]);
      return c.html(html);
    } else {
      return c.text('City not found', 404);
    }
  } catch (error) {
    console.error(error);
    return c.text('Error fetching city', 500);
  }
};