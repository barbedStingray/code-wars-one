import React from 'react'

const FootballScore = () => {

    const matchScores = ['0:1','3:2','0:3','4:4','1:2','1:3','1:4','3:3','2:4','3:4'];
    // win 3 loss 0 tie 1

    function calculateOverall(arr) {
        console.log('calculating match points', arr);
        let teamPoints = 0;

        for (let match of arr) {
            console.log('match is', match);
            const matchSplit = match.split('');

            if (Number(matchSplit[0]) > Number(matchSplit[2])) {
                teamPoints += 3;
            } else if (Number(matchSplit[0]) === Number(matchSplit[2])) {
                teamPoints += 1;
            } else {
                console.log('sorry, you lost');
            }
        }
        console.log('teamPoints', teamPoints);
        return teamPoints;
    }

    calculateOverall(matchScores);


    return (
        <div>
            <h1>Lets play some footyball</h1>
        </div>
    )
}

export default FootballScore
