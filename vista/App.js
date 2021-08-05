import { header } from "./app/components/header.js";

const d=document;
export function App(){
    const $ROOT=document.getElementById("root");
    $ROOT.innerHTML=``;
    $ROOT.appendChild(header());
}