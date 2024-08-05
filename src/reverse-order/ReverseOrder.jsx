import React from 'react'

const ReverseOrder = () => {

    const forwardsNumber = 143228;

    function reverseOrder(num) {
        console.log('your number is...', num);
        const numberString = String(num);
        const numArray = numberString.split('');
        let reverseArray = [];

        for (let ber of numArray) {
            reverseArray.unshift(Number(ber));
        }
        console.log('reverseArray', reverseArray);
        return reverseArray;
    }

    // reverseOrder(forwardsNumber);



  return (
    <div>
      <h1>Back it up</h1>
    </div>
  )
}

export default ReverseOrder
