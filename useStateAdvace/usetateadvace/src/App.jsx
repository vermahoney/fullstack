import { useState } from "react";

const  app=()=>{

  const [num, setNum]= useState(2);
  function increasenum(){
    setNum(num+1);
    
  }
   function decreasenum(){
    setNum(num-1);
    
  }
   function jumpby5(){
    setNum(num+5);
    
  }

  return(
    <>
   <h1>{num}</h1>
   <button onClick={increasenum}>increase</button>
   <button onClick={decreasenum}>decrease</button>
   <button onClick={jumpby5}>jump by 5</button>
    </>
  )
}

export default app;