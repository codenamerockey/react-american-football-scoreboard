import React, { useState } from 'react';

const Buttons = () => {
  const [homescore, setHomeScore] = useState(0);

  const [awayscore, setAwayScore] = useState(0);

  return (
    <section className='buttons'>
      <div className='homeButtons'>
        {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
        <button
          onClick={() => setHomeScore(homescore + 7)}
          className='homeButtons__touchdown'
        >
          Home Touchdown
        </button>
        <button
          onClick={() => setHomeScore(homescore + 3)}
          className='homeButtons__fieldGoal'
        >
          Home Field Goal
        </button>
      </div>
      <div className='awayButtons'>
        <button
          onClick={() => setAwayScore(awayscore + 7)}
          className='awayButtons__touchdown'
        >
          Away Touchdown
        </button>
        <button
          onClick={() => setAwayScore(awayscore + 3)}
          className='awayButtons__fieldGoal'
        >
          Away Field Goal
        </button>
      </div>
    </section>
  );
};

export default Buttons;
