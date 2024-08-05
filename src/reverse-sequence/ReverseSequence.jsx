import React from 'react'

const ReverseSequence = () => {

  // build an array that returns num to 1

  function countDown(num) {
    console.log('begin countdown', num);
    let newSequence = [];

    for (let i = num; i > 0; i--) {
      newSequence.push(i);
    }
    console.log('newSequence', newSequence);
    return newSequence;
  }

  // countDown(11);


  return (
    <div>
      <h1>let's build a reverse sequence</h1>
    </div>
  )
}

export default ReverseSequence
