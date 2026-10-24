import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
mkdirSync('public/illustrations',{recursive:true});
const svg=(body)=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" fill="none">${body}</svg>`;
writeFileSync('public/illustrations/recrutement.svg',svg(`<circle cx="200" cy="150" r="124" fill="#F0F0E7"/><rect x="78" y="54" width="202" height="204" rx="18" fill="#F7F7F2" stroke="#181818" stroke-width="3"/><path d="M107 84h62m-62 15h40" stroke="#C8C8BA" stroke-width="5" stroke-linecap="round"/><circle cx="175" cy="143" r="27" fill="#FF6333"/><path d="M126 215v-16c0-28 22-43 49-43s49 15 49 43v16" fill="#FF6333"/><circle cx="277" cy="203" r="48" fill="#F7F7F2" stroke="#181818" stroke-width="4"/><path d="m310 238 35 35" stroke="#181818" stroke-width="12" stroke-linecap="round"/><path d="m257 203 14 14 25-29" stroke="#FF6333" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><path d="M312 64v26m-13-13h26" stroke="#FF6333" stroke-width="3"/>`));
writeFileSync('public/illustrations/mobilite.svg',svg(`<circle cx="194" cy="147" r="117" fill="#F0F0E7"/><circle cx="194" cy="147" r="97" stroke="#BDBDB0" stroke-width="2"/><ellipse cx="194" cy="147" rx="49" ry="97" stroke="#BDBDB0" stroke-width="2"/><path d="M98 147h192M111 100h165M111 194h165" stroke="#BDBDB0" stroke-width="2"/><path d="M165 249C65 219 71 91 174 62c57-17 119 0 150 40" stroke="#FF6333" stroke-width="3" stroke-dasharray="6 7"/><path d="m303 99 28 10-3-29" stroke="#FF6333" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M191 102c-22 0-40 18-40 40 0 30 40 68 40 68s40-38 40-68c0-22-18-40-40-40Z" fill="#FF6333"/><circle cx="191" cy="140" r="13" fill="#F7F7F2"/><rect x="225" y="215" width="95" height="44" rx="22" fill="#181818"/><text x="272" y="244" fill="#F7F7F2" font-family="Arial,sans-serif" font-size="22" text-anchor="middle" letter-spacing="4">TN</text><circle cx="85" cy="235" r="5" fill="#FF6333"/>`));
let main=readFileSync('src/main.tsx','utf8');
main=main.replace('X,Printer,ArrowUpRight','X,ArrowUpRight');
main=main.replace(/<button onClick=\{\(\)=>window\.print\(\)\} title="Imprimer les 10 diapositives \/ PDF">.*?<\/button>/,'');
main=main.replace('<Users size={37}/><strong>Une promesse','<img className="recruitment-image" src="./illustrations/recrutement.svg" alt="Profil de candidat sélectionné à la loupe"/><strong>Une promesse');
main=main.replace('<div className="tn">TN<span>↗</span></div>','<img className="mobility-image" src="./illustrations/mobilite.svg" alt="Mobilité des compétences tunisiennes à travers le monde"/>');
writeFileSync('src/main.tsx',main);
let css=readFileSync('src/style.css','utf8');
css+=`\n/* Apparitions sobres rejouées à chaque nouvelle diapositive. */
@keyframes talent-fade-in{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
@keyframes talent-image-in{from{opacity:0;transform:translateY(12px) scale(.97)}to{opacity:1;transform:translateY(0) scale(1)}}
@keyframes talent-line-in{from{opacity:0;transform:scaleX(0)}to{opacity:1;transform:scaleX(1)}}
main.slide h1,main.slide h2{animation:talent-fade-in .65s ease-out .08s both}
main.slide .subtitle,main.slide .intro,main.slide .definition,main.slide .eyebrow{animation:talent-fade-in .65s ease-out .2s both}
main.slide .cover-art,main.slide .depart>svg,main.slide .local-art,main.slide .attract-core{animation:talent-image-in .85s cubic-bezier(.2,.65,.3,1) .22s both}
main.slide .attract-core{animation-name:talent-core-in}
@keyframes talent-core-in{from{opacity:0;transform:translate(-50%,-46%) scale(.95)}to{opacity:1;transform:translate(-50%,-50%) scale(1)}}
main.slide .cards article,main.slide .quadrant,main.slide .journey article,main.slide .depart-list>div,main.slide .formula>div,main.slide .local-challenges p{animation:talent-fade-in .65s ease-out both}
main.slide :is(.cards article,.quadrant,.journey article,.depart-list>div,.formula>div,.local-challenges p):nth-child(1){animation-delay:.18s!important}
main.slide :is(.cards article,.quadrant,.journey article,.depart-list>div,.formula>div,.local-challenges p):nth-child(2){animation-delay:.28s!important}
main.slide :is(.cards article,.quadrant,.journey article,.depart-list>div,.formula>div,.local-challenges p):nth-child(3){animation-delay:.38s!important}
main.slide :is(.cards article,.quadrant,.journey article,.depart-list>div,.formula>div,.local-challenges p):nth-child(4){animation-delay:.48s!important}
main.slide :is(.journey article,.formula>div):nth-child(n+5){animation-delay:.58s!important}
main.slide .question,main.slide .caption,main.slide .retention,main.slide .bottom-insight,main.slide .local-solutions,main.slide .conclusion blockquote,main.slide .thanks{animation:talent-fade-in .7s ease-out .55s both}
main.slide .journey:before{transform-origin:left;animation:talent-line-in .9s ease-out .2s both}
main.slide .competition{animation:talent-image-in .8s ease-out .2s both}
.recruitment-image{display:block;width:9cqw;height:7cqw;object-fit:contain}.attract-core{gap:.2cqw}.attract-core strong{font-size:.95cqw}
.mobility-image{display:block;width:100%;height:19cqw;object-fit:contain}.local-art .location{margin-top:.5cqw}
@media(prefers-reduced-motion:reduce){main.slide *,main.slide *:before{animation:none!important;transition:none!important}}
@media print{main.slide *,main.slide *:before{animation:none!important}}
`;
writeFileSync('src/style.css',css);
let readme=readFileSync('README.md','utf8').replace(/^- Exporter PDF.*\r?\n/m,'');readme+='\nIllustrations vectorielles locales dans public/illustrations, avec apparitions progressives. Le bouton Exporter PDF a été retiré.\n';writeFileSync('README.md',readme);
