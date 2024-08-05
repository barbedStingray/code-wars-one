import React from 'react'

const VowelRemover = () => {

    // Remove the vowels
    const dangerousCharacters = ['a', 'e', 'i', 'o', 'u'];

    function removingVowels(word) {
        // console.log('the word is...', word);
        let consonantArray = [];
        const wordArray = word.split('');

        const identifyDanger = (character) => {
            for (let letter of dangerousCharacters) {
                if (letter === character) {
                    return true;
                }
            }
        }

        for (let char of wordArray) {
            if (!identifyDanger(char)) {
                consonantArray.push(char);
            }
        }
        // console.log('consonantArray', consonantArray);
        const consonantString = consonantArray.join('');
        console.log('consonantString', consonantString);
        return consonantString;

    }

    removingVowels('spider man');



  return (
    <div>
      <h1>Removing the Tarnished</h1>
    </div>
  )
}

export default VowelRemover
