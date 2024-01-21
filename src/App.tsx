import { Link } from "react-router-dom";

const App = () => {
    return (
        <>
            <h1>You are at Home</h1>
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

        </>
    );
};

export { App };
