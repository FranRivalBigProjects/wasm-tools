const res=document.getElementById('res');
function run(){
let txt=(document.getElementById('input').value||'').toLowerCase();
let val=document.getElementById('value').value;
let out='Analysis:\n';

if(txt.includes('module')) out+='- Module structure detected\n';
if(txt.includes('memory')) out+='- Linear memory usage\n';
if(txt.includes('import')||txt.includes('export')) out+='- Import/export boundary\n';
if(txt.includes('loop')||txt.includes('call')) out+='- Execution flow operations\n';

if(val){
  out+='- Metric: '+val+'\n';
}

out+='- Optimize binary size, memory, and performance\n';

res.innerText=out;
}