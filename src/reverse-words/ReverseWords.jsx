import React from 'react'

const ReverseWords = () => {

    const one = 'Hello World!';
    const two = "Yoda doesn't speak like this";
    const three = 'foobar';
    const four = 'kata editor';
    const five = 'row row row your boat';
    const six = '';

    function reverseWords(str) {
        console.log('checking string', str);
        let revArray = [];
        let strArray = str.split(' ');

        for (let i = strArray.length - 1; i >= 0; i--) {
            // console.log('this is I', i);
            let word = strArray[i];
            // console.log(word);
            revArray.push(word);
        }
        // console.log(revArray);
        let finalArray = revArray.join(' ');
        console.log('finalArray', finalArray);

        return finalArray;
    }

    // reverseWords(one);
    reverseWords(two);





  return (
    <div>
      <h1>Reverse the Word Strings</h1>
    </div>
  )
}

export default ReverseWords
