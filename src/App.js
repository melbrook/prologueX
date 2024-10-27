import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';

function App() {

  const scrollTop = (() => window.scrollTo({top: 0, behavior: 'smooth'}));
  const scrollBottom =(() => window.scrollTo({left: 0, top: document.body.scrollHeight, behavior:'smooth'}))

  return (
    <div className="App">
        <h1 className='head'>
        Prologue 
        </h1>
        <div className="timestamps">

        <p className='timestamp'>
        September 26, 2024, 11:23 PM, CST

        </p>
        <p className='timestamp'>
      September 27, 2024, 3:36 PM, GMT+7

        </p>
        </div>
       <Home />
 

       <footer className='footr'>
        <span>You already know</span>
       </footer>
       <div className="arrows">
        <span onClick={scrollTop}>
        <BsArrowUp size={18}/> 
        </span>
        <span className='arrow-bottom' onClick={scrollBottom}>
          <BsArrowDown size={18}/>
        </span>
       </div>
    </div>
  );
}

export default App;
