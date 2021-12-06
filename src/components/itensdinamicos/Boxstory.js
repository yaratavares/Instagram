export default function Boxstory (object, key){
    
    return (
        <div class="story" key={key}>
            <img class= "background" src="assets/img/stories_background.jpg" />
            <img class= "foto-story" src={"assets/img/" + object.people.image} />
            <h5 class="nome-story">{object.people.name}</h5>
        </div>
    );
    
}