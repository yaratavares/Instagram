export default function Osposts (object, key){
    return (
        <section class="post" key = {key}>
            <div class="post-superior">
                <div class= "post-superior-esquerda">
                    <img src={"assets/img/" + object.post.image} />
                    <p>{object.post.name}</p>
                </div>
                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
            </div>
            <Imagem tipo= {object.post.image_post}/> 
            
            <div class="barra-interação">
                <div class= "direita">
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div class= "esquerda">
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>
            <div class= "curtidas">
                <img src={"assets/img/" + object.post.curtida_principal_foto} />
                <p>Curtido por <strong>{object.post.curtida_principal_name}</strong> e <strong>{object.post.curtidas}</strong></p>
            </div>
        </section>
    );
}

function Imagem (object){
    let tag;

    if ((object.tipo).includes("video")){
        tag = (
            <video class= "video-principal" volume="false" muted controls autoPlay>
                <source src={"assets/" + object.tipo} />
            </video>)
    } else {
        tag = <img class= "foto-principal" src={"assets/" + object.tipo} />
    }

    return (
        tag
    );
}