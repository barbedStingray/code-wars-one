import React from 'react'

const SumPositive = () => {

  const intArray = [-1, 5, -3, 2, 6, -7, 4];

  function sumThePositives(arr) {
    // console.log('positiveSum', arr);
    let positiveSum = 0;

    for (let num of arr) {
      if (num > 0) {
        positiveSum += num;
      }
    }
    console.log('positiveSum', positiveSum);
    return positiveSum;

  }

  // sumThePositives(intArray);

  return (
    <div>
      <h1>Only Positivity Here</h1>
    </div>
  )
}

export default SumPositive
