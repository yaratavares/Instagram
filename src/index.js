import ReactDOM from 'react-dom';

import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'

function App (){
    return (
        <div>
            <Navbar />
            <Main />
            <Footer />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));