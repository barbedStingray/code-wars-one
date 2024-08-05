import React from 'react'

const PipeProblem = () => {

  const brokenPipes = [-1, 2, 4, 5, 8, 12, 15];

  function fixPipes(arr) {
    console.log('pipe Array', arr);
    let newPipes = [];
    // for an array not in ascending order, sort here

    const ceiling = arr[arr.length - 1];
    const floor = arr[0];
    // console.log('last index', lastIndex);
    for (let i = floor; i <= ceiling; i++) {
      // console.log('this is i', i);
      newPipes.push(i);
    }
    console.log('newPipes', newPipes);
    return newPipes;
  }

  // fixPipes(brokenPipes);


  return (
    <div>
      <h1>Pipe Problem</h1>
    </div>
  )
}

export default PipeProblem
