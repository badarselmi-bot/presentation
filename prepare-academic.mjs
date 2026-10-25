import {readFileSync,writeFileSync} from 'node:fs';
const source=readFileSync('src/main.tsx','utf8');const start=source.indexOf('function Person('),end=source.indexOf('const causes=');if(start<0||end<0)throw Error('Illustration introuvable');writeFileSync('src/People.tsx',source.slice(start,end).replace('function People(','export function People('));
