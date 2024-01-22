import { Link } from "react-router-dom";
import { useState } from "react";

const useCounter = (startAt: number, incrementBy: number): [number, () => void] => {
    const [counter, setCounter] = useState(startAt);

    const increment = () => {
        setCounter((prevCounter) => prevCounter + incrementBy);
    };

    return [counter, increment];
};

const App = () => {
    const [counter, setCounter] = useCounter(100, 100)
    return (
        <div style={{ padding: "200px" }}>
            <button onClick={setCounter}>Click</button>
            <h1>{counter}</h1>
            <h2>Admin</h2>
            <Link to="admin/signup">Sign Up</Link>
            <Link to="admin/login">Login</Link>
            <Link to="admin/forgot-password">Forgot Password</Link>
            <Link to="admin/reset-password">Reset Password</Link>
            <h2>Team Member</h2>
            <Link to="team-member/create-password">Sign Up</Link>
            <Link to="team-member/login">Login</Link>
            <Link to="team-member/forgot-password">Forgot Password</Link>
            <Link to="team-member/reset-password">Reset Password</Link>
        </div>
    );
};

export { App, useCounter };
