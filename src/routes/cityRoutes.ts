import { Hono } from 'hono';
import { ReadAllCitiesController } from '../controllers/parking/ReadAllCitiesController';
import { ReadOneCityController } from '../controllers/parking/ReadOneCityController';

const cityRoutes = new Hono();

// Route pour afficher toutes les villes
cityRoutes.get('/cities', ReadAllCitiesController);

// Route pour afficher les détails d'une ville spécifique via son "slug"
cityRoutes.get('/cities/:slug', ReadOneCityController);

export default cityRoutes;