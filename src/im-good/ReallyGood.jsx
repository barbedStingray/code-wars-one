import React from 'react'

const ReallyGood = () => {

    // see if you're better than your peers
    const yourScore = 93;
    const peerScores = [90, 86, 99, 95, 91];

    function amIBetter(yours, peers) {
        console.log('lets compare', yours, peers);
        
        const findPeerAverage = (peers) => {
            let peerTotal = 0;
            const peerCount = peers.length;
            for (let score of peers) {
                peerTotal += score;
            }
            // console.log('peerTotal', peerTotal);
            return peerTotal/peerCount;
        }

        const peerAverage = findPeerAverage(peers);
        // console.log('peerAverage', peerAverage);

        if (yours > peerAverage) {
            console.log('im so good');
            return true;
        } else {
            console.log('maybe not...');
            return false;
        }
    }

    amIBetter(yourScore, peerScores);

  return (
    <div>
      <h1>Am I though? </h1>
    </div>
  )
}

export default ReallyGood
