import React from 'react'

const ReduceGrow = () => {

    const intArray = [2, 2, 4, 4];

    function multiplyIntegers(arr) {
        // console.log('integer array', arr);
        let multiply = 1;

        for (let num of arr) {
            multiply *= num;
        }

        console.log('multiply', multiply);
        return multiply;
    }

    // multiplyIntegers(intArray);


  return (
    <div>
      <h1>You must get smaller to get bigger</h1>
    </div>
  )
}

export default ReduceGrow
