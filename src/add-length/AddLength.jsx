import React from 'react'

const AddLength = () => {

    const theWords = "It is within reach"

    function addLength(str) {
        let lengthList = [];
        const stringArray = str.split(' ');

        for (let item of stringArray) {
            const length = item.length;
            lengthList.push(`${item} ${length}`);
        }
        console.log(lengthList);
        return lengthList;
    }

    // addLength(theWords);

  return (
    <div>
      <h1>Let's add some longevity</h1>
    </div>
  )
}

export default AddLength
