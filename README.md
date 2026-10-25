# The Talent Factor
Présentation universitaire en français — React, TypeScript, Tailwind CSS et Vite.

## Lancer
Avec Node.js installé : `npm install`, puis `npm run dev`. Ouvrir l’URL indiquée.
Production : `npm run build`, puis `npm run preview`.

## Utiliser
- Flèches gauche/droite, Page précédente/suivante ou espace : navigation.
- Début / Fin : première / dernière diapositive.
- S : sommaire ; F : plein écran ; Échap : fermer les panneaux.

Durée prévue : 9 min 50 s, avec le témoignage de 50 secondes. Les notes et les sources sont consultables sur chaque diapositive et exclues de l’impression. Aucun chiffre statistique n’est utilisé. Le cas tunisien est explicitement fictif. Les références sont dans src/data.ts. Les illustrations sont des SVG originaux intégrés. Inter est chargé depuis Google Fonts avec Arial en secours. Respect du réglage de réduction des animations.

Illustrations vectorielles locales dans public/illustrations, avec apparitions progressives. Le bouton Exporter PDF a été retiré.

La diapositive 10 présente le témoignage fictif de Yassine sous forme de personnage animé. La lecture utilise une voix française de synthèse disponible dans le navigateur, avec transcription par séquence. Si aucune voix française n’est disponible, l’animation fonctionne sans son avec un message explicite. Il ne s’agit pas d’un fichier vidéo MP4. Le scénario complet est dans TEMOIGNAGE-VIDEO.md. La conclusion devient la diapositive 11.


Avatar humain : portraits photoréalistes fictifs créés par ImageGen, quatre expressions liées au récit, transitions en fondu et mouvements de caméra subtils. Aucun mouvement réel des lèvres ni synchronisation labiale. Asset local : public/illustrations/yassine-human-expressions.png. Prompt dans ASSET-AVATAR.md.

## Séquence narrative actuelle
La diapositive Yassine est une mini-interview SVG/CSS en six scènes (27 ans), avec le script demandé, des sous-titres progressifs, un lecteur visuel de 50 secondes, la synthèse pédagogique et les commandes Lecture/Pause/Recommencer/Son. La voix française est vérifiée via Web Speech API ; durée audio indicative, synchronisation approximative. Pas de son automatique. Sources réutilisables dans src/story/. La mise en page reste en 16:9 sur vidéoprojecteur et se réorganise sur mobile. Les portraits photographiques de la version précédente ne sont plus utilisés.

## Vidéo fournie (version actuelle)
La diapositive 10 utilise désormais le MP4 fourni dans public/media/temoignage-fourni.mp4 (41 secondes). L’avatar et sa voix de synthèse sont remplacés. Les sous-titres français proviennent d’une transcription automatique locale et sont stockés dans public/media/temoignage-fr.vtt. Le panneau de paroles est synchronisé avec la vidéo et permet de rechercher un passage en cliquant sur une phrase. Source du texte : src/story/videoCaptions.json ; transcription lisible : PAROLES-VIDEO.md. Aucun lancement automatique du son. La ligne de durée des notes a été retirée dans toutes les diapositives.

## Explications intégrées
Les idées des anciennes notes sont désormais condensées dans un encadré visible sur chacune des onze diapositives. Le bouton, le panneau et le raccourci N des notes ont été supprimés. Les références sont visibles sur les diapositives Définition et Tunisie. Le texte intégral des notes est conservé dans NOTES-ORALES.md ; les synthèses de projection sont dans src/slideExplanations.ts.
