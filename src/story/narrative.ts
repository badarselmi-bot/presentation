export const narrativeScenes = [
  {title:'Salut, moi c’est Yassine.',label:'FAIRE CONNAISSANCE',mood:'Naturel et sympathique',text:"Salut, moi c'est Yassine, j'ai 27 ans et je suis développeur en Tunisie.",icon:'person'},
  {title:'Motivé… puis des questions.',label:'LES PREMIÈRES EXPÉRIENCES',mood:'De l’enthousiasme à la réflexion',text:"Quand j'ai commencé mon travail, j'étais vraiment motivé. Mais après quelque temps, j'ai commencé à me poser des questions sur mon avenir.",icon:'work'},
  {title:'Une autre entreprise me contacte.',label:'L’OFFRE CONCURRENTE',mood:'Surpris, puis attentif',text:"Un jour, j'ai reçu une proposition d'une autre entreprise, avec un meilleur salaire.",icon:'offer'},
  {title:'Et si je partais ?',label:'LE MOMENT DU DOUTE',mood:'Hésitant et préoccupé',text:"J'ai sérieusement pensé à partir.",icon:'doubt'},
  {title:'Mon manager m’a écouté.',label:'LE DIALOGUE CHANGE LA SUITE',mood:'Écouté et rassuré',text:"Mais mon manager a pris le temps de m'écouter. Il m'a proposé une formation, de nouvelles responsabilités et un véritable plan d'évolution. J'ai aussi obtenu plus de flexibilité pour mieux équilibrer mon travail et ma vie personnelle.",icon:'growth'},
  {title:'J’ai choisi de rester.',label:'UN AVENIR À CONSTRUIRE',mood:'Confiant et reconnu',text:"Finalement, j'ai décidé de rester. Pas seulement pour le salaire, mais parce que je me sentais reconnu et que je pouvais construire mon avenir dans cette entreprise.",icon:'stay'}
] as const;
const wordCount=(text:string)=>text.trim().split(/\s+/).length;
const totalWords=narrativeScenes.reduce((n,s)=>n+wordCount(s.text),0);
export const sceneDurations=narrativeScenes.map(s=>50*wordCount(s.text)/totalWords);
export const lessonLevers=['Reconnaissance','Formation','Évolution professionnelle','Équilibre entre vie professionnelle et personnelle'];
export const lessonQuote='Un talent ne reste pas uniquement pour son salaire. Il reste aussi lorsqu’il se sent valorisé et qu’il peut évoluer.';
