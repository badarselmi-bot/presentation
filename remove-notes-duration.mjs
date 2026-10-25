import {readFileSync,writeFileSync} from 'node:fs';
const path='src/main.tsx';const source=readFileSync(path,'utf8');const line='<small>{pad(index+1)} / {slides.length} · {slides[index].time} secondes · Total : 9 min 50 s</small>';if(!source.includes(line))throw new Error('Ligne de durée introuvable');writeFileSync(path,source.replace(line,''));
