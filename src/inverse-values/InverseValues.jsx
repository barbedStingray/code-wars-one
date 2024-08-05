import React from 'react'

const InverseValues = () => {

  const valueArray = [1, -2, -3, -4, 5]

  function invertValues(arr) {
    console.log('invert values of', arr);
    let flippedArray = [];

    for (let num of arr) {
      if (num === 0) {
        flippedArray.push(0)
      } else {
        flippedArray.push(-num);
      }
    }
    console.log('flippedArray', flippedArray);
    return flippedArray;
  }


  // invertValues(valueArray);

  return (
    <div>
      <h1>Flippin' Values</h1>
    </div>
  )
}

export default InverseValues
