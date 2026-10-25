import {writeFileSync} from 'node:fs';
import {slides,references} from './src/data.ts';
writeFileSync('PLAN-PRESENTATION.md','# La guerre des talents — Plan universitaire\n\n'+slides.map((s,i)=>`${String(i+1).padStart(2,'0')}. **${s.title}** — ${s.chapter.toLowerCase()}`).join('\n\n')+'\n\n## Sources\n\n'+references.map(r=>`- **${r.title}** — ${r.detail} [Consulter](${r.url})`).join('\n')+'\n');
