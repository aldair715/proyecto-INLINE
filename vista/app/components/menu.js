export function menu()
{
    const D=document,
    $menu=D.createElement("nav");
    $menu.classList.add("menu");
    $menu.innerHTML=`
        <a href="#">INICIO</a>
        <a href="#/search_doctor">BUSCAR DOCTOR</a>
        <a href="#/search_especialidad">BUSCAR ESPECIALIDAD</a>
    `;
    return $menu;
}