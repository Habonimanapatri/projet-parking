/* import { Hono } from 'hono';
import { cities, parkings } from './data/staticDatabase'; 


const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app; */

/* import { Hono } from 'hono';
import { serveStatic } from '@hono/node-server/serve-static';  // Pour servir les fichiers statiques
import { HomeController } from './controllers/HomeController';
import { ReadAllCitiesController } from './controllers/parking/ReadAllCitiesController';  // Importer le contrôleur

const app = new Hono();

// Configurer le serveur statique pour les fichiers du dossier "static"
app.use('/static/*', serveStatic({ root: './static' }));

// Route pour la page d'accueil
app.get('/', HomeController);

// Associer la route GET /cities au ReadAllCitiesController
app.get('/cities', ReadAllCitiesController);

export default app; */


import { Hono } from 'hono';
import { serveStatic } from '@hono/node-server/serve-static';  // Middleware pour servir les fichiers statiques
import { HomeController } from './controllers/HomeController';
import cityRoutes from './routes/cityRoutes';
import parkingRoutes from './routes/parkingRoutes';


const app = new Hono();

// Serveur pour les fichiers statiques
app.use('/static/*', serveStatic({ root: './static' }));

// Route pour la page d'accueil
app.get('/', HomeController);

// Routes pour les villes et les parkings
app.route('/', cityRoutes);
app.route('/', parkingRoutes);

export default app;