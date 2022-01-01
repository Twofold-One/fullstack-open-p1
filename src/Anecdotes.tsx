import React, { useState } from 'react';

const Anecdotes = () => {
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
    ];

    const [selected, setSelected] = useState(0);
    const [points, setPoints] = useState(Array(anecdotes.length).fill(0));

    const handleVoteClick = () => {
        const pointsCopy = [...points];
        pointsCopy[selected] += 1;
        setPoints(pointsCopy);
        console.log(points);
    };

    const handleNextAnecdoteClick = () => {
        const random = Math.floor(Math.random() * anecdotes.length);
        setSelected(random);
    };

    const findMostVoted = (arr: Array<number>) => {
        const mostVoted = Math.max(...arr);
        const index = arr.indexOf(mostVoted);
        return index;
    };

    return (
        <div>
            <h1>Anecdotes</h1>
            <div>
                <h2>Anecdote of the day</h2>
                {anecdotes[selected]}
            </div>
            <div>
                <button onClick={handleVoteClick}>Vote</button>
                <button onClick={handleNextAnecdoteClick}>Next anecdote</button>
            </div>
            <div>
                <h2>Anecdote with most votes</h2>
                {anecdotes[findMostVoted(points)]}
            </div>
        </div>
    );
};

export default Anecdotes;
