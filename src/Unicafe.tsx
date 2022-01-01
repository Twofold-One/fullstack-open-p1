import { MouseEventHandler, useState } from 'react';

interface ButtonProps {
    text: string;
    onClick: MouseEventHandler;
}

interface StatLineProps {
    text: string;
    score: number;
}

interface StatisitcsProps {
    good: number;
    neutral: number;
    bad: number;
}

const Button = ({ text, onClick }: ButtonProps) => {
    return <button onClick={onClick}>{text}</button>;
};

const StatLine = ({ text, score }: StatLineProps) => {
    return <p>{`${text} ${score}`}</p>;
};

const Statistics = ({ good, neutral, bad }: StatisitcsProps) => {
    const total = good + neutral + bad;
    const average = (good - bad) / total;
    const positive = good / total;

    if (good + neutral + bad === 0) {
        return (
            <div>
                <p>No feedback given</p>
            </div>
        );
    }

    return (
        <div>
            <div>
                <h2>Statistics</h2>
                <StatLine text={'good'} score={good} />
                <StatLine text={'neutral'} score={neutral} />
                <StatLine text={'bad'} score={bad} />
                <StatLine text={'total'} score={total} />
                <StatLine text={'average'} score={Number(average.toFixed(2))} />
                <StatLine
                    text={'positive'}
                    score={Number(positive.toFixed(2))}
                />
            </div>
        </div>
    );
};

const Unicafe = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleGoodBtnClick = () => {
        setGood(good + 1);
    };

    const handleNeutralBtnClick = () => {
        setNeutral(neutral + 1);
    };

    const handleBadBtnClick = () => {
        setBad(bad + 1);
    };

    return (
        <div>
            <h1>Unicafe</h1>
            <div>
                <h2>Give feedback</h2>
                <Button onClick={handleGoodBtnClick} text={'good'} />
                <Button onClick={handleNeutralBtnClick} text={'neutral'} />
                <Button onClick={handleBadBtnClick} text={'bad'} />
            </div>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    );
};

export default Unicafe;
