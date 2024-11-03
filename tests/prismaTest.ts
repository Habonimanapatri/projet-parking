import { PrismaClient } from '@prisma/client';


// Initialiser Prisma Client
const prisma = new PrismaClient();

async function main() {
  try {
    // Exécuter une requête pour récupérer toutes les villes
    const cities = await prisma.city.findMany();
    console.log('Liste des villes :', cities);
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
  } finally {
    // Déconnexion du client Prisma
    await prisma.$disconnect();
  }
}

// Exécuter la fonction main
main();
