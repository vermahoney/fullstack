import React from 'react'

const App = () => {

  function btwclicked(){
    console.log('button is clicked ');
  }
  return (
    <div>
      <button onDoubleClick={btwclicked}></button>
    </div>
  )
}

export default App
