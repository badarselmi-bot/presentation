import {writeFileSync} from 'node:fs';
import {slides,sources} from './src/data.ts';
writeFileSync('NOTES-ORALES.md','# The Talent Factor — Notes orales\n\nDurée totale : 9 minutes.\n\n'+slides.map((s,i)=>`## ${String(i+1).padStart(2,'0')} — ${s.title}\n\nDurée indicative : ${s.time} secondes.\n\n${s.notes}\n`).join('\n')+'\n## Sources\n\n'+sources.map(s=>`- [${s.title}](${s.url})`).join('\n'));
