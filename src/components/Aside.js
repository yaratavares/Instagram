import Meuperfil from "./itensdinamicos/Meuperfil";
import Sugestaoperfis from "./itensdinamicos/Sugestaoperfis";

export default function (){
const peoples = [
    {
        image: "badvibesmemes 1.png",
        name: "bad.vibes.memes",
        status: "Segue você"
    },
    {
        image: "chibirdart 1.png",
        name: "chibirdart",
        status: "Segue você"
    },
    {
        image: "razoesparaacreditar 1.png",
        name: "azoesparaacreditar",
        status: "Novo no instagram"
    },
    {
        image: "adorableanimals 1.png",
        name: "adorable_animals",
        status: "Segue você"
    },
    {
        image: "smallcutecats 1.png",
        name: "smallcutecats",
        status: "Segue você"
    }
];

const meuPerfil = {
    image : "catanacomics 1.png",
    name_page: "catanacomics",
    name: "Catana"
}

    return (
        <aside>
            <Meuperfil people = {meuPerfil}/>
            <div class= "sugestao">
                <p class="direita">Sugestões para você</p>
                <p class="esquerda">Ver tudo</p>
            </div>
            {peoples.map((c,i) => <Sugestaoperfis people={c} key={"B" + i}/> )}
            <div class="menu">
                <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                    Termos • Localizações • Contas mais relevantes • Hashtags • 
                    Idioma</p>
            </div>
            <div class="reservado">
                <p> © 2021 INSTAGRAM DO FACEBOOK</p>
            </div>
        </aside>
    );
}