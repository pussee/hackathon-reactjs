import React, {Component} from "react";
import YtComp from "../../component/YtComp/YtComp";

class Home extends Component {
    render(){
        return(
            <div>
                <p>Ilmi Component</p>
                <hr/>
                <YtComp 
                    time="07.40"
                    title="Eijirou Kirishima"
                    desc="Pria berambut merah yang tamvan"
                    img="https://i.pinimg.com/originals/62/a4/af/62a4afcd2514d0441bceb5a824dd12a2.jpg"/>
                <YtComp 
                    time="08.02"
                    title="Katsuki Bakugou"
                    desc="Laki2 yang suka meledak ledak"
                    img="https://vignette.wikia.nocookie.net/doblaje/images/c/c1/Katsuki_Bakugo.png/revision/latest?cb=20180127151128&path-prefix=es"/>
                <YtComp 
                    time="05.04"
                    title="Denki Kaminari"
                    desc="Idiot"
                    img="https://stickytrigger.com/wp-content/uploads/2020/12/Denki-Kaminari2.jpg"/>
                <YtComp 
                    time="04.12"
                    title="Hanta Sero"
                    desc="Solasi"
                    img="https://tse2.mm.bing.net/th?id=OIP.oMbDWsQOYYFTwYsQM5D5QwHaId&pid=Api&P=0&h=220"/>
            </div>
            
        )
    }
}

export default Home;