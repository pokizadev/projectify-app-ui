import { Link } from "react-router-dom";

const App = () => {
    return (
        <>
            <h1>You are at Home</h1>
            <Link to="admin/signup">Sign Up</Link>
            <Link to="admin/login">Login</Link>
            <Link to="admin/forgot-password">Forgot Password</Link>
            <Link to="admin/reset-password">Reset Password</Link>
        </>
    );
};

export { App };
