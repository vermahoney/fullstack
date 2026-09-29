function app(){
  let count =0;

  function increaseNumber(){
    count++;
    console.log(count);
  }

  return(
    <>
    <p>counter:{count}</p>
    <button onClick={increaseNumber}>increment</button>
    </>
  )
}

export default app;