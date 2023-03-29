import './App.css';
import CurrentBlock from './components/CurrentBlock/CurrentBlock';
import BlockDetail from './components/BlockDetail/BlockDetail';
import BlockInput from './components/BlockInput/BlockInput';

function App() {
    return (
        <div className='App'>
            <CurrentBlock />
            <BlockInput />
            <BlockDetail />
        </div>
    );
}

export default App;
