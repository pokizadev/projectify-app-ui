import React, { useState, createContext, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Badge, Icon } from "./design-system";
import { Checkbox, LinearProgress, Switch } from "./design-system";

export const AppContext = createContext<{ id: number; text: string }[]>([]);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
    children
}) => {
    return (
        <AppContext.Provider value={[{ id: 1, text: "hi" }]}>
            {children}
        </AppContext.Provider>
    );
};

const StyledLink = styled(Link)`
    padding: 8px;
    display: flex;
    font-size: 20px;
`;

const App = () => {
    const [value, setValue] = useState(false);
    return (
        <div style={{ padding: "100px" }}>
            <h1 style={{ marginBottom: "10px" }}>Welcome</h1>
            <h2 style={{ marginBottom: "10px" }}>Admin</h2>
            <StyledLink to="admin/sign-up">Sign Up</StyledLink>
            <StyledLink to="admin/login">Login</StyledLink>
            <StyledLink to="admin/forgot-password">Forgot Password</StyledLink>
            <StyledLink to="admin/reset-password">Reset Password</StyledLink>
            <h2 style={{ marginBottom: "10px" }}>Team Member</h2>
            <StyledLink to="team-member/create-password">Sign Up</StyledLink>
            <StyledLink to="team-member/login">Login</StyledLink>
            <StyledLink to="team-member/forgot-password">
                Forgot Password
            </StyledLink>
            <StyledLink to="team-member/reset-password">
                Reset Password
            </StyledLink>

            <div>
                <Badge label="Badge" color="gray" />
                <Badge
                    label="Badge"
                    shape="circle"
                    variant="outlined"
                    color="violet"
                />
                <Badge
                    label="Badge"
                    shape="rounded"
                    variant="contained"
                    color="orange"
                    status
                />
                <Badge
                    label="Badge"
                    shape="circle"
                    variant="contained"
                    color="blue"
                    status
                />
            </div>
            <div>
                <Badge label="Badge" color="red" />
                <Badge
                    label="Badge"
                    shape="circle"
                    variant="outlined"
                    color="violet"
                    iconName="three-dots"
                />
                <Badge
                    label="Badge"
                    shape="rounded"
                    variant="contained"
                    color="purple"
                   iconName="calendar"
                />
                <Badge
                    label="Badge"
                    shape="circle"
                    variant="contained"
                    color="green"
                    iconName="check-in-circle"
                />
            </div>
            <div>
                <Checkbox
                    label="Hello world"
                    id="checkbox"
                    checked={value}
                    onChange={(value) => setValue(value)}
                    shape="rounded"
                />

                <Switch
                    checked={value}
                    onSwitch={(value) => setValue(value)}
                    shape="circle"
                    id="switch"
                    position="end"
                />
            </div>
            <div>
                <LinearProgress value={50} color="orange" error />
                <LinearProgress value={40} color="blue" />
                <LinearProgress value={40} color="green" />
                <LinearProgress value={40} color="red" />
                <LinearProgress
                    value={50}
                    color="orange"
                    error
                    shape="rounded"
                />
               <LinearProgress
                    value={40}
                    color="blue"
                    shape="rounded"
                    size="md"
                />
                <LinearProgress
                    value={100}
                    color="green"
                    shape="rounded"
                    size="lg"
                />
                <LinearProgress value={40} color="red" error shape="rounded" />

                <LinearProgress value={99} />
            </div>
        </div>
    );
};

export { App };
