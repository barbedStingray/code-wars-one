import React from 'react'

const RemoveElement = () => {
    // remove every second element of any given array

    const elementsArray = ['coconut', 'mango', 'coconut', 'mango', 'coconut', 'mango'];

    function alternateRemove(arr) {
        console.log('remove array', arr);
        let alternateArray = [];
        
        for (let i = 0; i < arr.length; i++) {
            if (i % 2 === 0) {
                // console.log('pushing to array', i);
                alternateArray.push(arr[i]);
            }
        }

        console.log('alternateArray', alternateArray);
        return alternateArray;

    }

    // alternateRemove(elementsArray);


  return (
    <div>
      <h1>Remove that Element!</h1>
    </div>
  )
}

export default RemoveElement
