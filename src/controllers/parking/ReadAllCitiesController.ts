/* import { Context } from "hono";
import { cities} from '../../data/staticDatabase';
import { ReadAllCitiesView} from '../../views/city/ReadAllCitiesView';

export const ReadAllCitiesController = (c: Context) => {
    
    const html = ReadAllCitiesView(cities);  // Générer la vue en utilisant les données
    return c.html(html);
  }; */

import { Context } from 'hono';
import db from '../../db/sqlite';
import { City } from '../../models/City';
import { ReadAllCitiesView } from '../../views/city/ReadAllCitiesView';

export const ReadAllCitiesController = async (c: Context) => {
  try {
    // Exécuter la requête SQL pour récupérer les villes depuis SQLite
    const query = await db.query('SELECT * FROM cities').as(City);

    // Convertir les données SQLite en instances de City
    const cities = query.all();
    
    //rows.map(row => new City(row.id, row.name, row.country, JSON.parse(row.location)));

    // Générer la vue avec les villes
    const html = ReadAllCitiesView(cities);
    return c.html(html);
  } catch (error) {
    console.error(error);
    return c.text('Error fetching cities', 500);
  }
};