export default function Footer (){
    const icones = ["home-sharp", "search-outline", "add-circle-outline", "heart-outline", "person-outline"];
    
    return (
        <footer>
            {icones.map((icon, i) => <ion-icon name={icon} key = {"J" +i}></ion-icon>)}
        </footer>
    );
}