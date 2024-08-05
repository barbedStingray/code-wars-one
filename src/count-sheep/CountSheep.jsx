import React from 'react'

const CountSheep = () => {

    // count sheep up to N

    function countingSheep(num) {
        // console.log('counting sheep...', num);
        let sheepArray = [];

        for (let i = 1; i <= num; i++) {
            sheepArray.push(`${i} sheep...`);
        }
        // console.log('sheepArray', sheepArray);
        const sheepText = sheepArray.join('');
        console.log('sheepText', sheepText);
    }

    countingSheep(9);

    return (
        <div>
            <h1>One sheep two sheep red sheep blue sheep...</h1>
        </div>
    )
}

export default CountSheep
