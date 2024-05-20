import { useState } from "react";
import styled from "styled-components";
import { AuthWrapper, AuthActionLink } from "../../components";
import { Button, Input } from "../../../design-system";

import puzzle from "../../../assets/images/puzzle.jpg";

const TeamMemberLoginForm = styled.form`
    width: 100%;
    display: grid;
    gap: var(--space-20);
`;

const ActionLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-12);
    align-items: center;
`;

const TeamMemberLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const handleOnChangePassword = (value: string) => {
        setPassword(value);
    };

    const confirmLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email, password);
    };

    return (
        <AuthWrapper imageUrl={puzzle} pageTitle="Projectify App">
            <TeamMemberLoginForm onSubmit={confirmLogin} noValidate>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChangeEmail}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleOnChangePassword}
                    shape="rounded"
                    size="lg"
                />

                <Button color="primary" size="lg" shape="rounded">
                    Login
                </Button>
            </TeamMemberLoginForm>

            <ActionLinks>
                <AuthActionLink
                    linkText="Forgot Password?"
                    linkTo="../team-member/forgot-password"
                />
                <AuthActionLink
                    hintText="Have not created password yet?"
                    linkText="Create Password"
                    linkTo="../team-member/create-password"
                />
            </ActionLinks>
        </AuthWrapper>
    );
};

export { TeamMemberLogin };
