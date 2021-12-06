export default function Sugestaoperfis (object, key){
    
    return (
        <div class= "sugestao-perfis" key={key}>
            <div class="perfil">
                <img src={"assets/img/" + object.people.image} />
                <div>
                    <strong>{object.people.name}</strong>
                    <p>{object.people.status}</p>
                </div>
            </div>
            <div class="botao-seguir">Seguir</div>
        </div>
    );
}