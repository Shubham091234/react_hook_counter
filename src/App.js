import React,{useState} from 'react';
import "./index.css";


const App = ()=> {

  const [count, setCount] = useState(0);

  const Add = ()=>{

    setCount(count +1);
};

  return (
<>
<div className='main'>
  
<h1 className='heading'> {count} </h1>
<button onClick={Add} className='but'>Click Me</button>

</div>
</>
  ); 
  
};

export default App;