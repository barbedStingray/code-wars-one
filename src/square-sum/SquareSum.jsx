import React from 'react'

const SquareSum = () => {

  const sumTheseSquares = [5, 2, 3];

  function sumSquares(arr) {
    console.log('lets square sums', arr);
    let squareSum = 0;

    for (let num of arr) {
      let square = num * num;
      squareSum += square;
    }
    console.log(squareSum);
    return squareSum;
  }

  // sumSquares(sumTheseSquares);


  return (
    <div>
      <h1>Square that Sum!</h1>
    </div>
  )
}

export default SquareSum
