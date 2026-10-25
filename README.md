# The Talent Factor — La guerre des talents

Présentation universitaire en français, réorganisée selon le texte fourni : **12 diapositives**. React, TypeScript, Tailwind CSS et Vite.

## Plan
1. Page de garde.
2. Le capital humain, une richesse stratégique et la problématique.
3. Définition, origine et trois notions fondamentales.
4. Les principales causes.
5. Les enjeux : gestion efficace et inefficace.
6. Les stratégies d’attraction.
7. Les raisons des départs.
8. Les stratégies de fidélisation.
9. Étude de cas fictive de Yassine, avec la vidéo fournie.
10. La guerre des talents en Tunisie.
11. Le rôle du manager.
12. Conclusion : attirer, développer, fidéliser.

Le texte de référence fourni est conservé dans CONTENU-UNIVERSITAIRE.txt. Les diapositives en retiennent les idées sous forme de textes courts, de schémas et de cartes. Les anciens encadrés séparés et le bouton Notes ne sont plus utilisés. Les noms des étudiants restent à renseigner sur la couverture.

## Utilisation
- Flèches gauche/droite, Page précédente/suivante ou espace : navigation.
- Début / Fin : première / dernière diapositive.
- S : sommaire ; B : bibliographie ; F : plein écran ; Échap : fermer une fenêtre.
- La vidéo est à la diapositive 9 (#8). Aucun son automatique. Le lecteur possède sa propre piste audio et ses commandes de lecture, de volume et de plein écran.
- Les sous-titres sont dans public/media/temoignage-fr.vtt. Cliquer sur les paroles permet d’atteindre le passage correspondant. La narration s’arrête en quittant la diapositive.
- Le scénario de l’offre concurrente est un cas pédagogique fictif ; les sous-titres restent une transcription de la vidéo fournie.
- Le format est 16:9 sur grand écran. Les mises en page se réorganisent verticalement sur mobile. Respect du réglage prefers-reduced-motion.

## Bibliographie
Ouvrages The War for Talent et The Talent Management Handbook ; sources OIT, INS Tunisie et OCDE. Liens et références dans src/data.ts et dans le panneau Références. Aucun chiffre statistique ajouté aux diapositives.

## Développement
Node.js requis. Installer avec `npm install`, lancer avec `npm run dev`, compiler avec `npm run build`.

Composants principaux : src/App.tsx (navigation), src/PresentationSlides.tsx (contenu), src/academic.css (design), src/TalentStory.tsx (vidéo et paroles).
