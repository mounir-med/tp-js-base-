
const produits = [
  { nom: "Lait", prix: 10, expireLe: "2025-12-01" },
  { nom: "Yaourt", prix: 5, expireLe: "2024-01-01" },
  { nom: "Jus", prix: 8, expireLe: "2026-02-15" },
];

const aujourdHui = new Date();

const valides = produits.filter(p => new Date(p.expireLe) > aujourdHui);

const total = valides.reduce((s, p) => s + p.prix, 0);

console.log("=== GESTION DES PRODUITS ===\n");

console.log("Tous les produits :");
produits.forEach(p => {
  const dateExp = new Date(p.expireLe);
  const estValide = dateExp > aujourdHui ? "oui" : "non";
  console.log(`  ${estValide} ${p.nom} - ${p.prix} DH (expire le: ${p.expireLe})`);
});

console.log("\nProduits valides (non expirés) :");
valides.forEach(p => {
  console.log(`  • ${p.nom} - ${p.prix} DH`);
});

console.log(`\nTotal des produits valides : ${total} DH`);
console.log(`Nombre de produits valides : ${valides.length}/${produits.length}`);