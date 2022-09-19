import React from "react"

function MontagemPosts(props){
    let [salvarIcon,setSalvarIcon] = React.useState("bookmark-outline")
    function salvaPost(){
        if(salvarIcon === "bookmark-outline"){
            setSalvarIcon("bookmark")
        }else{
            setSalvarIcon("bookmark-outline")}
    }
let [curtirIcon,setCurtirIcon] = React.useState("heart-outline")
let [curtidas, setCurtidas] = React.useState(props.numeroCurtidas)
let [classeCurtidas, setClasseCurtidas] = React.useState("")

function curtePost(){
    curtidas = curtidas.toString().replace(".","")
    curtidas = parseInt(curtidas)
if(curtirIcon === "heart-outline"){
    setCurtirIcon("heart")
    curtidas ++
    setClasseCurtidas("vermelho")
    setCurtidas(curtidas)
}
else{
    setCurtirIcon("heart-outline")
    curtidas --
    setClasseCurtidas("")
    setCurtidas(curtidas)
}
}


    return(
        <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src={props.imagemPerfil} />
                {props.usuario}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img onClick={curtePost} src={props.imagemPrincipal} />
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon onClick={curtePost} name={curtirIcon} class={classeCurtidas} ></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon onClick ={salvaPost} name={salvarIcon}></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src="assets/img/respondeai.svg" />
                <div class="texto">
                  Curtido por <strong>{props.curtidaPrincipal}</strong> e <strong>outras {curtidas} pessoas</strong>
                </div>
              </div>
            </div>
          </div>
    )
}


export default function Posts() {
const listaPosts = [
    {imagemPerfil: "assets/img/meowed.svg", usuario:"meowed", imagemPrincipal:"assets/img/gato-telefone.svg", curtidaPrincipal:"respondeai", numeroCurtidas:"101.523"},
    {imagemPerfil: "assets/img/barked.svg", usuario:"barked", imagemPrincipal:"assets/img/dog.svg", curtidaPrincipal:"adorable_animals", numeroCurtidas:"99.159"}
]


    return(
        <div class="posts">
          {listaPosts.map((lp) => <MontagemPosts imagemPerfil ={lp.imagemPerfil} usuario={lp.usuario} imagemPrincipal={lp.imagemPrincipal} curtidaPrincipal={lp.curtidaPrincipal} numeroCurtidas={lp.numeroCurtidas}/>)}
        </div>
    )
}