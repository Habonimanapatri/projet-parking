/* import { Context } from 'hono';
import { parkings } from '../../data/staticDatabase';  // Importer les parkings depuis la base statique
import { Parking } from '../../models/Parking';
import { ReadOneParkingView } from '../../views/parking/ReadOneParkingView';  // Importer la vue pour un parking

export const ReadOneParkingController = (c: Context) => {
  // Extraire l'ID du parking depuis l'URL
  const { id } = c.req.param();
  const parkingId = parseInt(id, 10);

  // Rechercher le parking correspondant à l'ID
  const parking = parkings.find((p: Parking) => p.id === parkingId);

  // Si le parking est trouvé, générer la vue
  if (parking) {
    const html = ReadOneParkingView(parking);
    return c.html(html);
  }

  // Si le parking n'est pas trouvé, renvoyer une erreur 404
  return c.notFound();
}; */

import { Context } from 'hono';
import db from '../../db/sqlite';
import { ReadOneParkingView } from '../../views/parking/ReadOneParkingView';
import { parkings } from '../../data/staticDatabase';
import { Parking } from '../../models/Parking';

/* export const ReadOneParkingController = async (c: Context) => {
  const { id } = c.req.param();

  try {
    // Exécuter la requête SQL pour récupérer un parking spécifique
    const row = await db.query('SELECT * FROM parkings WHERE id = ?').get(id);

    // Si le parking n'est pas trouvé, renvoyer une erreur 404
    if (!row) {
      return c.text('Parking not found', 404);
    }

    // Générer la vue avec les détails du parking
    //const html = ReadOneParkingView(row); 
    const html = ReadOneParkingView(Parking,[]);
    return c.html(html);
  } catch (error) {
    console.error(error); 
    return c.text('Error fetching parking', 500); 
  }
}; */

export const ReadOneParkingController = async (c: Context) => {
  const { slug } = c.req.param();

  try {
    // Récupérer la ville en fonction du slug
    const query = await db.query('SELECT * FROM parkings WHERE slug = ?').as(Parking);

    const city = query.get(slug)

    if (city) {
      const html = ReadOneParkingView(Parking,[]);
      return c.html(html);
    } else {
      return c.text('City not found', 404);
    }
  } catch (error) {
    console.error(error);
    return c.text('Error fetching city', 500);
  }
};

