/**
 * Seed script for local development environment.
 */

export async function seedDevelopmentData() {
  console.log("Seeding development database with Phase 1 course and default roles...");
  // Seeding logic here
  console.log("Seed completed.");
}

if (require.main === module) {
  seedDevelopmentData().catch(console.error);
}
