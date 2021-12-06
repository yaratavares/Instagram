export default function Meuperfil (object) {
    return (
        <div class="meu-perfil">
            <img src={"assets/img/" + object.people.image}/>
            <div class="meu-usuario">
                <strong>{object.people.name_page}</strong>
                <p>{object.people.name}</p>
            </div>
        </div>
    );
}