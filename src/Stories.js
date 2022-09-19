import React from "react"

function MontagemStories(props){
    return(
        <div class="story">
            <div class="imagem">
            <img src={props.imagem}/>
            </div>
            <div class="usuario">
                {props.usuario}
            </div>
        </div>
    )
}

export default function Stories(){

    const listaStories = [
        { imagem: "assets/img/9gag.svg", usuario: "9gag" },
        { imagem: "assets/img/meowed.svg", usuario: "meowed" },
        { imagem: "assets/img/barked.svg", usuario: "barked" },
        { imagem: "assets/img/nathanwpylestrangeplanet.svg", usuario: "nathanwpylestrangeplanet" },
        { imagem: "assets/img/wawawicomics.svg", usuario: "wawawicomics" },
        { imagem: "assets/img/respondeai.svg", usuario: "respondeai" },
        { imagem: "assets/img/filomoderna.svg", usuario: "filomoderna" },
        { imagem: "assets/img/memeriagourmet.svg", usuario: "memeriagourmet" },

    ]
    return(
        <div class="stories">
          {listaStories.map((ls) => <MontagemStories imagem={ls.imagem} usuario={ls.usuario}/>)}

          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
    )
}