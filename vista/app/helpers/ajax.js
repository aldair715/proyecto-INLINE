const d=document;
export async function ajax(props)
{
    //sacamos en varias variables a nuestro props
    let [url,body,method,header,cbSuccess,mode]=props;
    await fetch(url,{
        body,
        method,
        header,
        mode,
        cbSuccess
    }).then(
        res=>res.ok
        ?res.json()
        :Promise.reject(res)
    ).then(json=>{
        cbSuccess(json);
    }).catch(error=>{
        let mensaje=error.statusText || "OCURRIO UN ERROR";
        document.getElementById("main").innerHTML=`
        <div class="error_DOM">
            <h1>
                ERROR: ${error.status}
                <br>
                ${mensaje}
            </h1>
        </div>`;
        d.querySelector(".loader").style.display=`none`;
    })
    
}