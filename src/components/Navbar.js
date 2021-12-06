export default function Navbar (){
const icones = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"]

return (
    <header>
       <div class= "centralizada">
            <div class= "itens-lateral-esquerda">
                <div class= "camera">
                    <ion-icon name="logo-instagram"></ion-icon>
                </div>
                <div class= "barrinha"></div>
                <div class="logo">
                    <img src="assets/img/logo.png" />
                </div>
            </div> 
            <div class= "logo-mobile">
                <img src="assets/img/logo.png" />
            </div>   
            <div class="barra-de-pesquisa">
                <input type="text" id="procurar" placeholder="Pesquisar"/>
            </div>
            <div class="itens-lateral-direita">
                {icones.map((icon) => <ion-icon name={icon}></ion-icon>)}
            </div>
        </div>
    </header>
    );
}