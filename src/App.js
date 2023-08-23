import React,{useState} from 'react';
import "./index.css";


const App = ()=> {

//   const [count, setCount] = useState(0);

//   const Add = ()=>{

//     setCount(count +1);
// };


let time=new Date().toLocaleTimeString();
const [ctime, newtime] = useState(time);

const Updatetime = ()=>{
  let time=new Date().toLocaleTimeString();
  newtime(time);
}

setInterval(Updatetime, 1000)

  return (
 <>
{/* // <div className='main'>
  
// <h1 className='heading'> {count} </h1>
// <button onClick={Add} className='but'>Click Me</button>

// </div> */}
<h1 className='time'>{time}</h1>
</>
  ); 
  
};

export default App;