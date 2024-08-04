import React from 'react'

const StringRepeat = () => {

    function stringRepeat(str, num) {
        console.log('string, repeat', str, num);
        let repeatArray = [];

        // loop solution
        for (let i = num; i > 0; i--) {
          repeatArray.push(str);
        }
        // console.log('repeatArray', repeatArray);
        const finalArray = repeatArray.join(' ');
        console.log('finalArray', finalArray);
        return finalArray;



        // non loop solution
        // let newString = Array(num).fill(str).join(' ');
        // console.log('newString', newString);
        // return newString;

    }

    stringRepeat('Batman', 4);


  return (
    <div>
      <h1>Repeat the String</h1>
    </div>
  )
}

export default StringRepeat
