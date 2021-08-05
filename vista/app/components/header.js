import { menu } from "./menu.js";
import { titulo } from "./title.js";

export function header()
{
   const D=document,
   $header=D.createElement("header");
   $header.classList.add("header");
   $header.appendChild(titulo());
   $header.appendChild(menu());
    return $header;
}