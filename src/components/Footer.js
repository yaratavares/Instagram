export default function Footer (){
    const icones = ["home-sharp", "search-outline", "add-circle-outline", "heart-outline", "person-outline"];
    
    return (
        <footer>
            {icones.map((icon) => <ion-icon name={icon}></ion-icon>)}
        </footer>
    );
}