import React from 'react'

const MonkeyCount = () => {

  // populate an array to num from 1

  function countingMonkeys(num) {
    // console.log('monkey count', num);
    let totalMonkeys = [];

    for (let i = 1; i <= num; i++) {
      totalMonkeys.push(i);
    }
    console.log('total Monkeys', totalMonkeys);
    return totalMonkeys;
  }

  // countingMonkeys(8);


  return (
    <div>
      <h1>All fun and games with a Barrel of Monkeys</h1>
    </div>
  )
}

export default MonkeyCount
