// import logo from './logo.svg';
import './App.css';
import './index.css';
import logo from './logo.svg'
import { useSelector,useDispatch } from 'react-redux';
import { increment, decrement } from './redux/actions/counter';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <header className='App-header'>
        <img src={logo} className="App-logo" alt='logo'/>
        <p>Aplikasi penumlahan dan pengurangan super canggih!</p>
        <button onClick={() => dispatch(increment())}>tambah 1</button>
        <button onClick={() => dispatch(decrement())}>kurang 1</button>
        nilai saat ini: {counter.value}
      </header>
    </div>
    
  );
}

export default App;
