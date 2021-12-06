import Osposts from "./itensdinamicos/Osposts";

export default function Posts () {
    const posts = [
        {
            image: "meowed 1.png",
            name: "meowed",
            image_post: "gato-telefone 1.jpg",
            curtida_principal_name: "respondeai",
            curtida_principal_foto: "respondeai 1.png",
            curtidas: "outras 101.523 pessoas"
        },
        {
            image: "barked 1.png",
            name: "barked",
            image_post: "dog 1.jpg",
            curtida_principal_name: "adorable_animals",
            curtida_principal_foto: "adorableanimals 1.png",
            curtidas: "outras 99.159 pessoas"
        },
        {
            image: "meowed 1.png",
            name: "meowed",
            image_post: "gato-telefone 1.jpg",
            curtida_principal_name: "respondeai",
            curtida_principal_foto: "respondeai 1.png",
            curtidas: "outras 101.523 pessoas"
        },
    ]

    return (
        <div>
            {posts.map((c,i) => <Osposts post={c} key={"C"+i}/> )}
        </div>
    );
}
    
