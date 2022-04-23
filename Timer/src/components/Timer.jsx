import { useState, useEffect } from 'react'
import "./Timer.css";


function Timer(props) {

    const [timer, setTimer] = useState(props.start);

    useEffect(() => {
        const id = setInterval(() => {
            setTimer((prevValue) => {
                if (prevValue >= props.end) {
                    clearInterval(id)
                    return 0;
                }
                return prevValue + 1;
            })
        }, 1000);

        return () => {
            clearInterval(id);
        }

    }, []);

    return (
        <div className="timer-div">
            <h1>{`${timer <= 9 ? 0 : ""}${timer}`}</h1>
        </div>
    )
}

export default Timer;