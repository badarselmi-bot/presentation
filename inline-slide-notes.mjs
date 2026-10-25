import {readFileSync,writeFileSync} from 'node:fs';
let main=readFileSync('src/main.tsx','utf8');main=main.replace('Grid2X2,NotebookPen,X','Grid2X2,X').replace("import {slides,sources} from './data';","import {slides,sources} from './data';\nimport {slideExplanations} from './slideExplanations';");
main=main.replace(",[notes,setNotes]=useState(false)",'');main=main.replace("setNotes(false);",'').replace("if(e.key.toLowerCase()==='n')setNotes(v=>!v);",'');
main=main.replace(/<button onClick=\{\(\)=>setNotes\(v=>!v\)\}.*?<\/button>/,'');
const start=main.indexOf('{notes&&<aside');const end=main.indexOf('<dialog ref={dialog}',start);if(start<0||end<0)throw Error('Panneau introuvable');main=main.slice(0,start)+main.slice(end);
main=main.replace("const pad=(n:number)=>String(n).padStart(2,'0');",`const pad=(n:number)=>String(n).padStart(2,'0');
function SlideExplanation({i}:{i:number}){const explanation=slideExplanations[i];return <aside className="slide-explanation" aria-label="Explication de la diapositive"><span>{explanation.label}</span><p>{explanation.text}</p>{i===2&&<a href={sources[0].url} target="_blank" rel="noreferrer">Source : McKinsey ↗</a>}{i===8&&<a href={sources[1].url} target="_blank" rel="noreferrer">Source : OCDE, 2025 ↗</a>}</aside>}
`);
main=main.replace('<Content i={index}/><div className="slide-foot">','<div className="slide-content"><Content i={index}/></div><SlideExplanation i={index}/><div className="slide-foot">');main=main.replace('<Content i={i}/><div className="slide-foot">','<div className="slide-content"><Content i={i}/></div><SlideExplanation i={i}/><div className="slide-foot">');
main=main.replace('Sources dans les notes.','Source : OCDE, 2025.');writeFileSync('src/main.tsx',main);
