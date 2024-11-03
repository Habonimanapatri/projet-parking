/* import { Context } from 'hono';
import { parkings } from '../../data/staticDatabase';  // Importer les parkings depuis la base statique
import { ReadAllParkingsView } from '../../views/parking/ReadAllParkingsView';  // Importer la vue des parkings

export const ReadAllParkingsController = (c: Context) => {
  
  const html = ReadAllParkingsView(parkings);
  return c.html(html);
}; */

import { Context } from 'hono';
import db from '../../db/sqlite';
import { ReadAllParkingsView } from '../../views/parking/ReadAllParkingsView';

export const ReadAllParkingsController = async (c: Context) => {
  try {
    // Exécuter la requête SQL pour récupérer les parkings depuis SQLite
    const rows = db.query('SELECT * FROM parkings').all();

    // Si aucune donnée n'est trouvée, gérer l'absence de résultats
    if (!rows.length) {
      return c.text('No parkings found', 404);
    }

    // Générer la vue avec les parkings
    const html = ReadAllParkingsView(rows);
    return c.html(html);
  } catch (error) {
    console.error(error); 
    return c.text('Error fetching parkings', 500); 
  }
};