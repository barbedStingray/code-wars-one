import React from 'react'

const SearchDuplicates = () => {


    function findMultiples(base, limit) {
        // console.log('base and limit', base, limit);
        let multiples = [];        

        for (let i = base; i <= limit; i++) {
            // console.log('this is i', i);
            if (i % base === 0) {
                multiples.push(i);
            }
        }
        console.log(multiples);
        return multiples;
    }

    // findMultiples(4, 28);

  return (
    <div>
      <h1>Find All the Duplicates</h1>
    </div>
  )
}

export default SearchDuplicates
