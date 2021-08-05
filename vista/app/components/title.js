import zoom_api from "../helpers/zoom_api.js";

export function titulo()
{
    const D=document,
    $h1=D.createElement("h1");
    $h1.classList.add("titulo");
    $h1.innerHTML=`
        <a href="${zoom_api.NAME_URL}" target="_blank">
        ${zoom_api.NAME.toUpperCase()}
        </a>
    `;
    return $h1;
}