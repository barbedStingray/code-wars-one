import React from 'react'

const Grasshopper = () => {
  // write a function to find the summation from 1 to num

  function grasshopped(num) {
    // console.log('num', num);
    let solution = 0;

    for (let i = num; i > 0; i--) {
      solution += i;
      // console.log('solution', solution);
    }
    console.log('solution', solution);
    return solution;
  }

  // grasshopped(76);



  return (
    <div>
      <h1>Young Grasshopper</h1>
    </div>
  )
}

export default Grasshopper
