import { Database } from 'bun:sqlite';

// Créer une nouvelle instance de la base de données SQLite
const db = new Database('parking.sqlite');

export default db;
