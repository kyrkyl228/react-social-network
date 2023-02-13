import logo from './logo.svg';
import './App.css';
import Page from './components/Page/Page';
import Nav from './components/Nav/Nav';


const App = () => {
    return(
        <div className='page'>
            {/* Возможно стоит создать компоненту хэд */}
            <Nav />
            <div className='contentWrapper'>
                <Page /> 
            </div>
        </div>
    );
}


export default App;
