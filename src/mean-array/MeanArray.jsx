import React from 'react'

const MeanArray = () => {

    // return the mean of an array rounded down
    const schoolReport = [90, 88, 96, 74, 91];

    function schoolAverage(arr) {
        // console.log('school Report', arr);
        let totalScore = 0;
        const classesTaken = arr.length;
        
        for (let score of arr) {
            totalScore += score;
        }
        // console.log('totalScore', totalScore);

        const academicAverage = Math.floor(totalScore/classesTaken);
        console.log('academicAverage',academicAverage);
        return academicAverage;
    }

    // schoolAverage(schoolReport);


  return (
    <div>
      <h1>Mean Machine Array</h1>
    </div>
  )
}

export default MeanArray
