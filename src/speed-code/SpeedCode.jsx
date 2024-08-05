import React from 'react'

const SpeedCode = () => {

  // squares vs cubes
  const squareArr = [4, 7, 6];
  const cubeArr = [2, 3, 4];

  function squaresVsCubes(squares, cubes) {
    console.log('lets compare', squares, cubes);
    let squareTotal = 0;
    let cubeTotal = 0;

    for (let num of squares) {
      let squareRoot = num * num;
      squareTotal += squareRoot;
    }

    for (let num of cubes) {
      let cubeRoot = num * num * num;
      cubeTotal += cubeRoot;
    }

    if (squareTotal > cubeTotal) {
      console.log('the squares have it!');
      return true;
    } else {
      console.log('the cubes have it!');
      return false;
    }
  }

  // squaresVsCubes(squareArr, cubeArr);

  return (
    <div>
      <h1>Speedy Code</h1>
    </div>
  )
}

export default SpeedCode
