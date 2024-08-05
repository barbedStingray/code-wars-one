import React from 'react'

const FakeBinary = () => {

  const numberString = "45385593107843568";

  function convertBinary(str) {
    // console.log('string of digits', str);
    let binaryArray = [];
    const stringArray = str.split('');

    for (let num of stringArray) {
      // console.log('num', Number(num));
      if (Number(num) > 4) {
        binaryArray.push(1);
      } else {
        binaryArray.push(0);
      }
    }

    const finalString = binaryArray.join('');
    // console.log('binaryArray', binaryArray);
    console.log('finalString', finalString);
    return finalString;

  }

  // convertBinary(numberString);

  return (
    <div>
      <h1>Binary Imposter</h1>
    </div>
  )
}

export default FakeBinary
