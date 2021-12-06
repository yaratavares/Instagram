import Boxstory from "./itensdinamicos/Boxstory";

export default function Storys (){
  
    const peoples = [
        {
            image: ["9gag 1.png"],
            name: ["9gag"]
        },
        {
            image: ["meowed 1.png"],
            name: ["meowed"]
        },
        {
            image: ["barked 1.png"],
            name: ["barked"]
        },
        {
            image: ["nathanwpylestrangeplanet 1.png"],
            name: ["nathanwpyle..."]
        },
        {
            image: ["wawawiwacomicsa 1.png"],
            name: ["wawawiwac..."]
        },
        {
            image: ["respondeai 1.png"],
            name: ["respondeai"]
        },
        {
            image: ["filomoderna 1.png"],
            name: ["filomoderna"]
        },
        {
            image: ["memeriagourmet 1.png"],
            name: ["memeriago."]
        }
    ];

    return (
        <section class="storys">
            <div class="seta">
                    <img src="assets/img/Vector.png" />
                </div>
            {peoples.map((c,i) => <Boxstory people={c} key={"A"+i}/> )}
        </section>
);

}