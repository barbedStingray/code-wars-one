import React from 'react'

const StringRepeat = () => {

    function stringRepeat(str, num) {
        // console.log('string, repeat', str, num);
        let newString = Array(num).fill(str).join(' ');
        console.log('newString', newString);
        return newString;
    }

    // stringRepeat('Batman', 2);




  return (
    <div>
      <h1>Repeat the String</h1>
    </div>
  )
}

export default StringRepeat
