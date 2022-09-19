import React from "react"

export default function Usuario(){
    const fotoPadrao = "assets/img/catanacomics.svg"
    const [nome, setNome] = React.useState("")
    const [foto, setFoto] = React.useState(fotoPadrao)

    function inserirFoto(){
        const fotoPrompt = prompt("Insira o link de uma foto aqui!")
        setFoto(fotoPrompt)
    }

    function inserirNome(){
        const nomePrompt = prompt("Diga seu nome de usuário")
        setNome(nomePrompt)
    }

    return(
        <div class="usuario">
          <img onClick={inserirFoto} src={foto}/>
          <div class="texto">
            <strong>{nome}</strong>
            <span>
              @{nome}
              <ion-icon onClick={inserirNome} name="pencil"></ion-icon>
            </span>
          </div>
        </div>
    )
}