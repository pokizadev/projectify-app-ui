import React, { useState, createContext, useContext} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const AppContext = createContext<{id: number, text: string}[]>([]);

export const AppProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    return <AppContext.Provider value={[{id: 1, text: "hi"}]}>{children}</AppContext.Provider>
}

const StyledLink = styled(Link)`
    padding: 8px;
    display: flex;
    font-size: 20px;
`;

const App = () => {
    return (
        <div style={{ padding: "100px" }}>
            <h1 style={{ marginBottom: "10px"}}>Welcome</h1>
            <h2 style={{ marginBottom: "10px" }}>Admin</h2>
            <StyledLink to="admin/signup">Sign Up</StyledLink>
            <StyledLink to="admin/login">Login</StyledLink>
            <StyledLink to="admin/forgot-password">Forgot Password</StyledLink>
            <StyledLink to="admin/reset-password">Reset Password</StyledLink>
            <h2 style={{ marginBottom: "10px"}}>Team Member</h2>
            <StyledLink to="team-member/create-password">Sign Up</StyledLink>
            <StyledLink to="team-member/login">Login</StyledLink>
            <StyledLink to="team-member/forgot-password">
                Forgot Password
            </StyledLink>
            <StyledLink to="team-member/reset-password">
                Reset Password
            </StyledLink>
        </div>
    );
};

export { App };
